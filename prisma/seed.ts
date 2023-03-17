import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const slugify = (str:string) =>
  str
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace('.','-')
    .replace(' ','-')
    
    
async function main() {
  const tomorrowGame = await prisma.game.findUniqueOrThrow({
    where:{
      id:21
    },
    include:{
      players:true
    }
  })

  const {players,winnerTeam} = tomorrowGame

  for await (const player of players) {
    await prisma.playerProfile.update({
      where: {
        id: player.playerId,
      },
      data: {
        victories:
          winnerTeam === player.currentTeam ? { increment: 1 } : { increment: 0 },
        defeats:
          winnerTeam !== player.currentTeam && winnerTeam !== 'DRAW'
            ? { increment: 1 }
            : { increment: 0 },
        draws: winnerTeam === 'DRAW' ? { increment: 1 } : { increment: 0 },
      },
    });
  }
  

}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
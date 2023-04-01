import { PlayerProfile } from './../src/entities/PlayerProfile';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const {players} = await prisma.game.findUniqueOrThrow({
    where:{
      id:22
    },
    include:{
      players:true
    }
  })

  for await(const jogador of players){

    if(jogador.currentTeam === 'GREEN'){
      const pl = await prisma.playerProfile.findUniqueOrThrow({
        where:{
          id:jogador.playerId
        }
      })
      console.log(pl)
    }
    return
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
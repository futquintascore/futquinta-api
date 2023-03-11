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
  const games = await prisma.game.findMany({
    include:{
      players:{
        include:{
          player:true
        }
      }
    }
  })


  for await (const game of games){
    const winnerTeam = game.winnerTeam
    const playersStats = game.players

    playersStats.map(async (stat)=>{
      if(stat.currentTeam === 'GREEN'){
        await prisma.playerStats.update({
          where:{
            id:stat.id
          },
          data:{
            
          }
        })

      }
      if(stat.currentTeam === 'WHITE'){
        
      }
    })
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
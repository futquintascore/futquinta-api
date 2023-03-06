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
return prisma.$transaction(async (ctx)=>{
  const players = await ctx.playerProfile.findMany()

  for await(const player of players){
    await ctx.playerProfile.update({
      where:{
        id:player.id
      },
      data:{
        slug:slugify(player.name)
      }
    })
  }
},{
  timeout:400000
})
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
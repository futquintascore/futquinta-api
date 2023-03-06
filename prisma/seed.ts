import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const slugify = (str:string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[^\w\s-]/g, '.')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
async function main() {
return prisma.$transaction(async (ctx)=>{
  const players = await ctx.playerProfile.findMany()

  players.map(player =>{
    console.log(slugify(player.name))
  })
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
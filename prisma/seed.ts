import { PlayerProfile } from './../src/entities/PlayerProfile';
import { PrismaClient } from '@prisma/client'
import {faker} from '@faker-js/faker/locale/pt_BR'
import {slugify} from '../../backend/src/functions/slugfy'

const prisma = new PrismaClient()

async function main() {
  const allGames = await prisma.game.findMany()

  for await (const {id,createdAt,gameDate} of allGames){
    await prisma.game.update({
      where:{
        id,
      },
      data:{
        gameDate:createdAt
      }
    })
  }
  return

//   for (let i = 0;i<20;i++){
//     const name = faker.name.firstName()
//     await prisma.playerProfile.create({
//       data:{
//         name,
//         slug:slugify(name),
//         victories:0,
//         defeats:0,
//         draws:0,
//         assists:0,
//         goals:0,
//         role:'PERMANENT',
//         shirtNumber:faker.datatype.number({min:1,max:99})

//       }
//     })
//   }
//   await prisma.playerProfile.create({
//     data:{
//       name:'Goleiro-2',
//       slug:slugify('Goleiro-2'),
//       victories:0,
//       defeats:0,
//       draws:0,
//       assists:0,
//       goals:0,
//       function:'GOALKEEPER',
//       role:'PERMANENT',
//       shirtNumber:faker.datatype.number({min:1,max:99})
//     }
// })

// await prisma.playerProfile.create({
//   data:{
//     name:'Goleiro-1',
//     slug:slugify('Goleiro-1'),
//     victories:0,
//     defeats:0,
//     draws:0,
//     assists:0,
//     goals:0,
//     function:'GOALKEEPER',
//     role:'PERMANENT',
//     shirtNumber:faker.datatype.number({min:1,max:99})
//   }
// })
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
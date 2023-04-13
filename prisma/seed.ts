import { PlayerProfile } from './../src/entities/PlayerProfile';
import { PrismaClient } from '@prisma/client'
import {faker} from '@faker-js/faker'
import {slugify} from '../../backend/src/functions/slugfy'

const prisma = new PrismaClient()

async function main() {
  await prisma.playerProfile.create({
    data:{
      name:'Goleiro-2',
      slug:slugify('Goleiro-2'),
      victories:0,
      defeats:0,
      draws:0,
      assists:0,
      goals:0,
      function:'GOALKEEPER',
      role:'PERMANENT',
      shirtNumber:faker.datatype.number({min:1,max:99})
    }
})

await prisma.playerProfile.create({
  data:{
    name:'Goleiro-1',
    slug:slugify('Goleiro-1'),
    victories:0,
    defeats:0,
    draws:0,
    assists:0,
    goals:0,
    function:'GOALKEEPER',
    role:'PERMANENT',
    shirtNumber:faker.datatype.number({min:1,max:99})
  }
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
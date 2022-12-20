/*
  Warnings:

  - You are about to drop the column `finalScore` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `players` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `gameId` on the `Player` table. All the data in the column will be lost.
  - You are about to drop the column `games` on the `Player` table. All the data in the column will be lost.
  - Added the required column `playerId` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Made the column `goals` on table `Player` required. This step will fail if there are existing NULL values in that column.
  - Made the column `assists` on table `Player` required. This step will fail if there are existing NULL values in that column.
  - Made the column `wins` on table `Player` required. This step will fail if there are existing NULL values in that column.
  - Made the column `loses` on table `Player` required. This step will fail if there are existing NULL values in that column.
  - Made the column `record` on table `Player` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "finalScore",
DROP COLUMN "players",
ADD COLUMN     "playerId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Player" DROP COLUMN "gameId",
DROP COLUMN "games",
ALTER COLUMN "goals" SET NOT NULL,
ALTER COLUMN "assists" SET NOT NULL,
ALTER COLUMN "wins" SET NOT NULL,
ALTER COLUMN "loses" SET NOT NULL,
ALTER COLUMN "record" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

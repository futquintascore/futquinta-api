/*
  Warnings:

  - You are about to drop the column `player` on the `Game` table. All the data in the column will be lost.
  - Added the required column `position` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "player",
ADD COLUMN     "players" TEXT[];

-- AlterTable
ALTER TABLE "Player" ADD COLUMN     "position" TEXT NOT NULL,
ALTER COLUMN "picture" DROP NOT NULL,
ALTER COLUMN "goals" DROP NOT NULL,
ALTER COLUMN "assists" DROP NOT NULL,
ALTER COLUMN "wins" DROP NOT NULL,
ALTER COLUMN "loses" DROP NOT NULL,
ALTER COLUMN "record" DROP NOT NULL,
ALTER COLUMN "gameId" DROP NOT NULL;

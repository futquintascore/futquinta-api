/*
  Warnings:

  - You are about to drop the `players_in_game` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "players_in_game" DROP CONSTRAINT "players_in_game_gameId_fkey";

-- DropForeignKey
ALTER TABLE "players_in_game" DROP CONSTRAINT "players_in_game_playerId_fkey";

-- DropTable
DROP TABLE "players_in_game";

-- CreateTable
CREATE TABLE "stats" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "goals" INTEGER NOT NULL,
    "assists" INTEGER NOT NULL,
    "substituition" INTEGER NOT NULL,
    "playerId" INTEGER NOT NULL,
    "gameId" INTEGER,

    CONSTRAINT "stats_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "stats_name_key" ON "stats"("name");

-- AddForeignKey
ALTER TABLE "stats" ADD CONSTRAINT "stats_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "players"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stats" ADD CONSTRAINT "stats_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "games"("id") ON DELETE CASCADE ON UPDATE CASCADE;

/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `players` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "players_in_game" DROP CONSTRAINT "players_in_game_gameId_fkey";

-- DropForeignKey
ALTER TABLE "players_in_game" DROP CONSTRAINT "players_in_game_playerId_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "players_name_key" ON "players"("name");

-- AddForeignKey
ALTER TABLE "players_in_game" ADD CONSTRAINT "players_in_game_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "players"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "players_in_game" ADD CONSTRAINT "players_in_game_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "games"("id") ON DELETE CASCADE ON UPDATE CASCADE;

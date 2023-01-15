/*
  Warnings:

  - A unique constraint covering the columns `[playerId]` on the table `games` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "games_playerId_key" ON "games"("playerId");

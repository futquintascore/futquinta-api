/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `players_in_game` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `players_in_game` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "players_in_game" ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "players_in_game_name_key" ON "players_in_game"("name");

/*
  Warnings:

  - Added the required column `assists` to the `players_in_game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `goals` to the `players_in_game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `substituition` to the `players_in_game` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "players_in_game" ADD COLUMN     "assists" INTEGER NOT NULL,
ADD COLUMN     "goals" INTEGER NOT NULL,
ADD COLUMN     "substituition" INTEGER NOT NULL;

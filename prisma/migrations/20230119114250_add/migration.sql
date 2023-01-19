/*
  Warnings:

  - Added the required column `green_team_motm` to the `games` table without a default value. This is not possible if the table is not empty.
  - Added the required column `white_team_motm` to the `games` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "games" ADD COLUMN     "green_team_motm" TEXT NOT NULL,
ADD COLUMN     "white_team_motm" TEXT NOT NULL;

/*
  Warnings:

  - Added the required column `winner_team` to the `games` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "games" ADD COLUMN     "winner_team" "Team" NOT NULL;

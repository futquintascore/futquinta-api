/*
  Warnings:

  - Added the required column `current_team` to the `stats` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Team" AS ENUM ('WHITE', 'GREEN');

-- AlterTable
ALTER TABLE "stats" ADD COLUMN     "current_team" "Team" NOT NULL;

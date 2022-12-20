/*
  Warnings:

  - Added the required column `gameId` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('NOT_STARTED', 'IN_PROGRESS', 'FINISHED');

-- AlterTable
ALTER TABLE "Player" ADD COLUMN     "gameId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "player" TEXT[],
    "team1_goals" INTEGER NOT NULL,
    "team2_goals" INTEGER NOT NULL,
    "finalScore" TEXT NOT NULL,
    "status" "Status" NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

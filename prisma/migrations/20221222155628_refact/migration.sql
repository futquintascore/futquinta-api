-- CreateEnum
CREATE TYPE "Status" AS ENUM ('NOT_STARTED', 'IN_PROGRESS', 'FINISHED');

-- CreateTable
CREATE TABLE "players" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "picture" TEXT NOT NULL,
    "goals" INTEGER NOT NULL,
    "assists" INTEGER NOT NULL,
    "victories" INTEGER NOT NULL,
    "defeats" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "players_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "games" (
    "id" SERIAL NOT NULL,
    "white_goals" INTEGER NOT NULL,
    "green_goals" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "games_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "players_in_game" (
    "id" SERIAL NOT NULL,
    "playerId" INTEGER NOT NULL,
    "gameId" INTEGER,

    CONSTRAINT "players_in_game_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "players_in_game" ADD CONSTRAINT "players_in_game_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "players_in_game" ADD CONSTRAINT "players_in_game_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "games"("id") ON DELETE SET NULL ON UPDATE CASCADE;

/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `games` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `players` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `stats` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "games" ADD COLUMN     "slug" TEXT;

-- AlterTable
ALTER TABLE "players" ADD COLUMN     "slug" TEXT;

-- AlterTable
ALTER TABLE "stats" ADD COLUMN     "slug" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "games_slug_key" ON "games"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "players_slug_key" ON "players"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "stats_slug_key" ON "stats"("slug");

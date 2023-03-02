/*
  Warnings:

  - You are about to drop the column `picture` on the `players` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "players" DROP COLUMN "picture",
ADD COLUMN     "greenShirtpicture" TEXT,
ADD COLUMN     "whiteShirtpicture" TEXT;

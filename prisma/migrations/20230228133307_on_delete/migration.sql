/*
  Warnings:

  - You are about to drop the column `MOTM_score` on the `players` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "MOTM" DROP CONSTRAINT "MOTM_playerProfileId_fkey";

-- AlterTable
ALTER TABLE "players" DROP COLUMN "MOTM_score";

-- AddForeignKey
ALTER TABLE "MOTM" ADD CONSTRAINT "MOTM_playerProfileId_fkey" FOREIGN KEY ("playerProfileId") REFERENCES "players"("id") ON DELETE CASCADE ON UPDATE CASCADE;

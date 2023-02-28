/*
  Warnings:

  - You are about to drop the column `green_team_motm` on the `games` table. All the data in the column will be lost.
  - You are about to drop the column `white_team_motm` on the `games` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "games" DROP COLUMN "green_team_motm",
DROP COLUMN "white_team_motm";

-- CreateTable
CREATE TABLE "_GameToMOTM" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_GameToMOTM_AB_unique" ON "_GameToMOTM"("A", "B");

-- CreateIndex
CREATE INDEX "_GameToMOTM_B_index" ON "_GameToMOTM"("B");

-- AddForeignKey
ALTER TABLE "_GameToMOTM" ADD CONSTRAINT "_GameToMOTM_A_fkey" FOREIGN KEY ("A") REFERENCES "games"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameToMOTM" ADD CONSTRAINT "_GameToMOTM_B_fkey" FOREIGN KEY ("B") REFERENCES "MOTM"("id") ON DELETE CASCADE ON UPDATE CASCADE;

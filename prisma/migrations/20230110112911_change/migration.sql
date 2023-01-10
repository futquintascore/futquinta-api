/*
  Warnings:

  - You are about to drop the `_GameToPlayer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_GameToPlayer" DROP CONSTRAINT "_GameToPlayer_A_fkey";

-- DropForeignKey
ALTER TABLE "_GameToPlayer" DROP CONSTRAINT "_GameToPlayer_B_fkey";

-- DropTable
DROP TABLE "_GameToPlayer";

-- CreateTable
CREATE TABLE "_GameToPlayerProfile" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_GameToPlayerProfile_AB_unique" ON "_GameToPlayerProfile"("A", "B");

-- CreateIndex
CREATE INDEX "_GameToPlayerProfile_B_index" ON "_GameToPlayerProfile"("B");

-- AddForeignKey
ALTER TABLE "_GameToPlayerProfile" ADD CONSTRAINT "_GameToPlayerProfile_A_fkey" FOREIGN KEY ("A") REFERENCES "games"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameToPlayerProfile" ADD CONSTRAINT "_GameToPlayerProfile_B_fkey" FOREIGN KEY ("B") REFERENCES "players"("id") ON DELETE CASCADE ON UPDATE CASCADE;

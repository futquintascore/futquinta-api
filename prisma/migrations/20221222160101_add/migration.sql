-- DropForeignKey
ALTER TABLE "games" DROP CONSTRAINT "games_playerId_fkey";

-- CreateTable
CREATE TABLE "_GameToPlayer" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_GameToPlayer_AB_unique" ON "_GameToPlayer"("A", "B");

-- CreateIndex
CREATE INDEX "_GameToPlayer_B_index" ON "_GameToPlayer"("B");

-- AddForeignKey
ALTER TABLE "_GameToPlayer" ADD CONSTRAINT "_GameToPlayer_A_fkey" FOREIGN KEY ("A") REFERENCES "games"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameToPlayer" ADD CONSTRAINT "_GameToPlayer_B_fkey" FOREIGN KEY ("B") REFERENCES "players"("id") ON DELETE CASCADE ON UPDATE CASCADE;

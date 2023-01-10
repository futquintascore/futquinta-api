-- AlterTable
ALTER TABLE "games" ADD COLUMN     "playerId" INTEGER;

-- AddForeignKey
ALTER TABLE "games" ADD CONSTRAINT "games_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "players"("id") ON DELETE SET NULL ON UPDATE CASCADE;

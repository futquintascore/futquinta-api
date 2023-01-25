-- CreateEnum
CREATE TYPE "PlayerFunction" AS ENUM ('OUTFIELDPLAYER', 'GOALKEEPER');

-- AlterTable
ALTER TABLE "players" ADD COLUMN     "function" "PlayerFunction" NOT NULL DEFAULT 'OUTFIELDPLAYER',
ADD COLUMN     "goalsConceded" INTEGER;

-- AlterTable
ALTER TABLE "stats" ADD COLUMN     "function" "PlayerFunction" NOT NULL DEFAULT 'OUTFIELDPLAYER',
ADD COLUMN     "goalsConceded" INTEGER;

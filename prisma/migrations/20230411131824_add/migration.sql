-- CreateEnum
CREATE TYPE "PlayerProfileRole" AS ENUM ('PERMANENT', 'GUEST');

-- AlterTable
ALTER TABLE "players" ADD COLUMN     "role" "PlayerProfileRole" DEFAULT 'PERMANENT';

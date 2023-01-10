/*
  Warnings:

  - The values [NULL] on the enum `Winner` will be removed. If these variants are still used in the database, this will fail.
  - The `winner_team` column on the `games` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `draws` to the `players` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Winner_new" AS ENUM ('WHITE', 'GREEN', 'DRAW');
ALTER TABLE "games" ALTER COLUMN "winner_team" TYPE "Winner_new" USING ("winner_team"::text::"Winner_new");
ALTER TYPE "Winner" RENAME TO "Winner_old";
ALTER TYPE "Winner_new" RENAME TO "Winner";
DROP TYPE "Winner_old";
COMMIT;

-- AlterTable
ALTER TABLE "games" DROP COLUMN "winner_team",
ADD COLUMN     "winner_team" "Winner" NOT NULL DEFAULT 'DRAW';

-- AlterTable
ALTER TABLE "players" ADD COLUMN     "draws" INTEGER NOT NULL;

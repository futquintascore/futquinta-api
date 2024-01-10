/*
  Warnings:

  - Added the required column `motmPoints` to the `OldSeason` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OldSeason" ADD COLUMN     "motmPoints" INTEGER NOT NULL;

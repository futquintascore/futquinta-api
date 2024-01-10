-- CreateTable
CREATE TABLE "OldSeason" (
    "id" SERIAL NOT NULL,
    "year" INTEGER NOT NULL,
    "goals" INTEGER NOT NULL DEFAULT 0,
    "goalsConceded" INTEGER NOT NULL DEFAULT 0,
    "victories" INTEGER NOT NULL,
    "defeats" INTEGER NOT NULL,
    "draws" INTEGER NOT NULL,
    "playerId" INTEGER,

    CONSTRAINT "OldSeason_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OldSeason" ADD CONSTRAINT "OldSeason_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "players"("id") ON DELETE SET NULL ON UPDATE CASCADE;

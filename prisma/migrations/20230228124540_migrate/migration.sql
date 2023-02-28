-- CreateTable
CREATE TABLE "MOTM" (
    "id" SERIAL NOT NULL,
    "team" "Team" NOT NULL,
    "playerProfileId" INTEGER NOT NULL,

    CONSTRAINT "MOTM_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MOTM" ADD CONSTRAINT "MOTM_playerProfileId_fkey" FOREIGN KEY ("playerProfileId") REFERENCES "players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

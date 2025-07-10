-- CreateEnum
CREATE TYPE "Team" AS ENUM ('A', 'B');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Match" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "teamA" TEXT NOT NULL,
    "teamB" TEXT NOT NULL,
    "playerPerTeam" INTEGER NOT NULL,
    "venue" TEXT NOT NULL,
    "overs" INTEGER NOT NULL,
    "ballType" TEXT NOT NULL,
    "winnerTeam" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Match_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Player" (
    "id" SERIAL NOT NULL,
    "matchId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "team" "Team" NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ball" (
    "id" SERIAL NOT NULL,
    "matchId" INTEGER NOT NULL,
    "over" INTEGER NOT NULL,
    "ball" INTEGER NOT NULL,
    "batsmanId" INTEGER NOT NULL,
    "bowlerId" INTEGER NOT NULL,
    "runs" INTEGER NOT NULL,
    "extras" INTEGER,
    "wicket" BOOLEAN,

    CONSTRAINT "Ball_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Commentary" (
    "id" SERIAL NOT NULL,
    "matchId" INTEGER NOT NULL,
    "ballId" INTEGER,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Commentary_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Match"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ball" ADD CONSTRAINT "Ball_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Match"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ball" ADD CONSTRAINT "Ball_batsmanId_fkey" FOREIGN KEY ("batsmanId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ball" ADD CONSTRAINT "Ball_bowlerId_fkey" FOREIGN KEY ("bowlerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commentary" ADD CONSTRAINT "Commentary_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Match"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commentary" ADD CONSTRAINT "Commentary_ballId_fkey" FOREIGN KEY ("ballId") REFERENCES "Ball"("id") ON DELETE SET NULL ON UPDATE CASCADE;

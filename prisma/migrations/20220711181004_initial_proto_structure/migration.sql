-- CreateEnum
CREATE TYPE "ProtoPropType" AS ENUM ('DESCRIPTION', 'LIKERT');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" TEXT;

-- CreateTable
CREATE TABLE "Proto" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Proto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProtoProp" (
    "id" SERIAL NOT NULL,
    "type" "ProtoPropType" NOT NULL,

    CONSTRAINT "ProtoProp_pkey" PRIMARY KEY ("id")
);

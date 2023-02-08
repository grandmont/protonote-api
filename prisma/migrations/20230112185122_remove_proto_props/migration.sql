/*
  Warnings:

  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `ProtoProp` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProtoProp" DROP CONSTRAINT "ProtoProp_protoId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "password",
DROP COLUMN "updatedAt";

-- DropTable
DROP TABLE "ProtoProp";

-- DropEnum
DROP TYPE "ProtoPropEnum";

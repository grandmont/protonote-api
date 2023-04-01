/*
  Warnings:

  - The `externalId` column on the `DeezerData` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "DeezerData" DROP COLUMN "externalId",
ADD COLUMN     "externalId" INTEGER;

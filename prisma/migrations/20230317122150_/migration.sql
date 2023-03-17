/*
  Warnings:

  - Made the column `createdAt` on table `IntegrationData` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `IntegrationData` required. This step will fail if there are existing NULL values in that column.
  - Made the column `data` on table `IntegrationData` required. This step will fail if there are existing NULL values in that column.
  - Made the column `integrationId` on table `IntegrationData` required. This step will fail if there are existing NULL values in that column.
  - Made the column `protoId` on table `IntegrationData` required. This step will fail if there are existing NULL values in that column.
  - Made the column `search` on table `IntegrationData` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "IntegrationData" DROP CONSTRAINT "IntegrationData_integrationId_fkey";

-- DropForeignKey
ALTER TABLE "IntegrationData" DROP CONSTRAINT "IntegrationData_protoId_fkey";

-- AlterTable
ALTER TABLE "IntegrationData" ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL,
ALTER COLUMN "data" SET NOT NULL,
ALTER COLUMN "integrationId" SET NOT NULL,
ALTER COLUMN "protoId" SET NOT NULL,
ALTER COLUMN "search" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "IntegrationData" ADD CONSTRAINT "IntegrationData_integrationId_fkey" FOREIGN KEY ("integrationId") REFERENCES "Integration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IntegrationData" ADD CONSTRAINT "IntegrationData_protoId_fkey" FOREIGN KEY ("protoId") REFERENCES "Proto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

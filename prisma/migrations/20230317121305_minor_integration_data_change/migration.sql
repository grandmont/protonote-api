-- DropForeignKey
ALTER TABLE "IntegrationData" DROP CONSTRAINT "IntegrationData_integrationId_fkey";

-- DropForeignKey
ALTER TABLE "IntegrationData" DROP CONSTRAINT "IntegrationData_protoId_fkey";

-- AlterTable
ALTER TABLE "IntegrationData" ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "updatedAt" DROP NOT NULL,
ALTER COLUMN "data" DROP NOT NULL,
ALTER COLUMN "integrationId" DROP NOT NULL,
ALTER COLUMN "protoId" DROP NOT NULL,
ALTER COLUMN "search" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "IntegrationData" ADD CONSTRAINT "IntegrationData_integrationId_fkey" FOREIGN KEY ("integrationId") REFERENCES "Integration"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IntegrationData" ADD CONSTRAINT "IntegrationData_protoId_fkey" FOREIGN KEY ("protoId") REFERENCES "Proto"("id") ON DELETE SET NULL ON UPDATE CASCADE;

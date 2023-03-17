/*
  Warnings:

  - You are about to drop the column `integrationId` on the `IntegrationData` table. All the data in the column will be lost.
  - You are about to drop the column `protoId` on the `IntegrationData` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "IntegrationData" DROP CONSTRAINT "IntegrationData_integrationId_fkey";

-- DropForeignKey
ALTER TABLE "IntegrationData" DROP CONSTRAINT "IntegrationData_protoId_fkey";

-- AlterTable
ALTER TABLE "IntegrationData" DROP COLUMN "integrationId",
DROP COLUMN "protoId";

-- CreateTable
CREATE TABLE "IntegrationOnProtos" (
    "protoId" INTEGER NOT NULL,
    "integrationDataId" INTEGER NOT NULL,

    CONSTRAINT "IntegrationOnProtos_pkey" PRIMARY KEY ("protoId","integrationDataId")
);

-- AddForeignKey
ALTER TABLE "IntegrationOnProtos" ADD CONSTRAINT "IntegrationOnProtos_protoId_fkey" FOREIGN KEY ("protoId") REFERENCES "Proto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IntegrationOnProtos" ADD CONSTRAINT "IntegrationOnProtos_integrationDataId_fkey" FOREIGN KEY ("integrationDataId") REFERENCES "IntegrationData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

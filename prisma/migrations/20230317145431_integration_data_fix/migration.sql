/*
  Warnings:

  - You are about to drop the `IntegrationOnProtos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "IntegrationOnProtos" DROP CONSTRAINT "IntegrationOnProtos_integrationDataId_fkey";

-- DropForeignKey
ALTER TABLE "IntegrationOnProtos" DROP CONSTRAINT "IntegrationOnProtos_protoId_fkey";

-- AlterTable
ALTER TABLE "IntegrationData" ADD COLUMN     "externalId" TEXT;

-- DropTable
DROP TABLE "IntegrationOnProtos";

-- CreateTable
CREATE TABLE "IntegrationDataOnProtos" (
    "protoId" INTEGER NOT NULL,
    "integrationDataId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "IntegrationDataOnProtos_pkey" PRIMARY KEY ("protoId","integrationDataId")
);

-- AddForeignKey
ALTER TABLE "IntegrationDataOnProtos" ADD CONSTRAINT "IntegrationDataOnProtos_protoId_fkey" FOREIGN KEY ("protoId") REFERENCES "Proto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IntegrationDataOnProtos" ADD CONSTRAINT "IntegrationDataOnProtos_integrationDataId_fkey" FOREIGN KEY ("integrationDataId") REFERENCES "IntegrationData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

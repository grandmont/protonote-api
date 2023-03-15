-- CreateTable
CREATE TABLE "IntegrationData" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data" TEXT NOT NULL,
    "integrationId" INTEGER NOT NULL,
    "protoId" INTEGER NOT NULL,

    CONSTRAINT "IntegrationData_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "IntegrationData" ADD CONSTRAINT "IntegrationData_integrationId_fkey" FOREIGN KEY ("integrationId") REFERENCES "Integration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IntegrationData" ADD CONSTRAINT "IntegrationData_protoId_fkey" FOREIGN KEY ("protoId") REFERENCES "Proto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

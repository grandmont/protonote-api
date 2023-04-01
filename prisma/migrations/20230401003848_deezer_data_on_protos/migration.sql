-- CreateTable
CREATE TABLE "DeezerDataOnProtos" (
    "protoId" INTEGER NOT NULL,
    "deezerDataId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DeezerDataOnProtos_pkey" PRIMARY KEY ("protoId","deezerDataId")
);

-- CreateTable
CREATE TABLE "DeezerData" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "externalId" TEXT,
    "search" TEXT NOT NULL,
    "data" TEXT NOT NULL,

    CONSTRAINT "DeezerData_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DeezerDataOnProtos" ADD CONSTRAINT "DeezerDataOnProtos_protoId_fkey" FOREIGN KEY ("protoId") REFERENCES "Proto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeezerDataOnProtos" ADD CONSTRAINT "DeezerDataOnProtos_deezerDataId_fkey" FOREIGN KEY ("deezerDataId") REFERENCES "DeezerData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

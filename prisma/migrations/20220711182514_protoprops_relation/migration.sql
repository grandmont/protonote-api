/*
  Warnings:

  - Added the required column `userId` to the `Proto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `protoId` to the `ProtoProp` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Proto" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ProtoProp" ADD COLUMN     "protoId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Proto" ADD CONSTRAINT "Proto_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProtoProp" ADD CONSTRAINT "ProtoProp_protoId_fkey" FOREIGN KEY ("protoId") REFERENCES "Proto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

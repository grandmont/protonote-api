-- DropForeignKey
ALTER TABLE "Proto" DROP CONSTRAINT "Proto_userId_fkey";

-- AlterTable
ALTER TABLE "Proto" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Proto" ADD CONSTRAINT "Proto_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

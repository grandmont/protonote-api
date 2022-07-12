/*
  Warnings:

  - You are about to drop the column `name` on the `ProtoProp` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ProtoProp" DROP COLUMN "name",
ADD COLUMN     "value" JSONB;

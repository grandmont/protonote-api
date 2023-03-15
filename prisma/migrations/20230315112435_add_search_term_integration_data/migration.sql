/*
  Warnings:

  - Added the required column `search` to the `IntegrationData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "IntegrationData" ADD COLUMN     "search" TEXT NOT NULL;

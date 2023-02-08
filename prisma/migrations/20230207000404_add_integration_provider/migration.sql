-- CreateEnum
CREATE TYPE "IntegrationProvider" AS ENUM ('SPOTIFY');

-- CreateEnum
CREATE TYPE "IntegrationStatus" AS ENUM ('CONNECTED', 'DISCONNECTED');

-- AlterTable
ALTER TABLE "Integration" ADD COLUMN     "provider" "IntegrationProvider",
ADD COLUMN     "status" "IntegrationStatus";

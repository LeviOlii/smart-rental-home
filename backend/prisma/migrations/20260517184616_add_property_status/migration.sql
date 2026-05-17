-- CreateEnum
CREATE TYPE "PropertyStatus" AS ENUM ('AVAILABLE', 'OCCUPIED', 'INACTIVE');

-- AlterTable
ALTER TABLE "Property" ADD COLUMN     "status" "PropertyStatus" NOT NULL DEFAULT 'AVAILABLE';

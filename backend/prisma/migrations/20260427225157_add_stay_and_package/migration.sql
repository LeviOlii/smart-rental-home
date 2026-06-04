-- CreateEnum
CREATE TYPE "SessionStatus" AS ENUM ('SCHEDULED', 'ACTIVE', 'FINISHED', 'CANCELLED');

-- AlterTable
ALTER TABLE "Device" ADD COLUMN     "powerWatts" DOUBLE PRECISION;

-- CreateTable
CREATE TABLE "RentalPackage" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "basePrice" DOUBLE PRECISION NOT NULL,
    "durationDays" INTEGER,
    "durationHours" INTEGER,
    "energyLimitKwh" DOUBLE PRECISION,
    "pricePerExtraKwh" DOUBLE PRECISION,
    "maxDevicesActive" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "propertyId" INTEGER NOT NULL,

    CONSTRAINT "RentalPackage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StaySession" (
    "id" SERIAL NOT NULL,
    "clientName" TEXT NOT NULL,
    "checkinAt" TIMESTAMP(3) NOT NULL,
    "checkoutAt" TIMESTAMP(3) NOT NULL,
    "startedAt" TIMESTAMP(3),
    "endedAt" TIMESTAMP(3),
    "status" "SessionStatus" NOT NULL DEFAULT 'SCHEDULED',
    "totalConsumptionKwh" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "extraConsumptionKwh" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "extraCost" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "propertyId" INTEGER NOT NULL,
    "packageId" INTEGER,
    "customEnergyLimitKwh" DOUBLE PRECISION,
    "customPricePerExtraKwh" DOUBLE PRECISION,

    CONSTRAINT "StaySession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StaySessionDevice" (
    "id" SERIAL NOT NULL,
    "isAllowed" BOOLEAN NOT NULL DEFAULT true,
    "sessionId" INTEGER NOT NULL,
    "deviceId" INTEGER NOT NULL,

    CONSTRAINT "StaySessionDevice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StaySessionDevice_sessionId_deviceId_key" ON "StaySessionDevice"("sessionId", "deviceId");

-- AddForeignKey
ALTER TABLE "RentalPackage" ADD CONSTRAINT "RentalPackage_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StaySession" ADD CONSTRAINT "StaySession_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StaySession" ADD CONSTRAINT "StaySession_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "RentalPackage"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StaySessionDevice" ADD CONSTRAINT "StaySessionDevice_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "StaySession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StaySessionDevice" ADD CONSTRAINT "StaySessionDevice_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "Device"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

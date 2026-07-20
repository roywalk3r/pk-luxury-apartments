-- AlterTable
ALTER TABLE `RentPayment` ADD COLUMN `billId` VARCHAR(191) NULL;

-- CreateIndex
CREATE INDEX `RentPayment_billId_idx` ON `RentPayment`(`billId`);

-- AddForeignKey
ALTER TABLE `RentPayment` ADD CONSTRAINT `RentPayment_billId_fkey` FOREIGN KEY (`billId`) REFERENCES `UtilityBill`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

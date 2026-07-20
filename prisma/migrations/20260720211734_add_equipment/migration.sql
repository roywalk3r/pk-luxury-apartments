-- CreateTable
CREATE TABLE `Equipment` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NULL,
    `location` VARCHAR(191) NULL,
    `serialNumber` VARCHAR(191) NULL,
    `purchaseDate` DATETIME(3) NOT NULL,
    `lifespanMonths` INTEGER NOT NULL,
    `warrantyExpiry` DATETIME(3) NULL,
    `lastServicedAt` DATETIME(3) NULL,
    `status` ENUM('ACTIVE', 'UNDER_MAINTENANCE', 'RETIRED', 'REPLACED') NOT NULL DEFAULT 'ACTIVE',
    `notes` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Equipment_serialNumber_key`(`serialNumber`),
    INDEX `Equipment_status_idx`(`status`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

/*
  Warnings:

  - Added the required column `tanggal_lahir` to the `Fomulir` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `tempat_lahir` on the `Fomulir` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Fomulir" ADD COLUMN     "tanggal_lahir" INTEGER NOT NULL,
DROP COLUMN "tempat_lahir",
ADD COLUMN     "tempat_lahir" VARCHAR(15) NOT NULL;

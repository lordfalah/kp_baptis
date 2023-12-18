-- CreateEnum
CREATE TYPE "Jenis_Baptis" AS ENUM ('ANAK', 'DEWASA');

-- CreateTable
CREATE TABLE "Fomulir" (
    "id" TEXT NOT NULL,
    "fullname" VARCHAR(50) NOT NULL,
    "kode_anggota" VARCHAR(5) NOT NULL,
    "no_hp" VARCHAR(15) NOT NULL,
    "tempat_lahir" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name_baptis" VARCHAR(50) NOT NULL,
    "jenis_kelamin" VARCHAR(15) NOT NULL,
    "alamat" VARCHAR(100) NOT NULL,
    "name_ayah" VARCHAR(50) NOT NULL,
    "name_ibu" VARCHAR(50) NOT NULL,
    "jenis_baptis" "Jenis_Baptis" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Fomulir_pkey" PRIMARY KEY ("id")
);

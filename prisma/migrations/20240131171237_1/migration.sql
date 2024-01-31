-- CreateEnum
CREATE TYPE "Jenis_Baptis" AS ENUM ('ANAK', 'DEWASA');

-- CreateEnum
CREATE TYPE "Jenis_Kelamin" AS ENUM ('PRIA', 'WANITA');

-- CreateEnum
CREATE TYPE "Status_Pernikahan" AS ENUM ('SUDAH', 'BELUM');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "Calon_Baptis" (
    "id" TEXT NOT NULL,
    "nama_lengkap" VARCHAR(50) NOT NULL,
    "jenis_kelamin" "Jenis_Kelamin" NOT NULL,
    "tempat_lahir" VARCHAR(150) NOT NULL,
    "jenis_baptis" "Jenis_Baptis" NOT NULL,
    "akte_lahir" VARCHAR(200) NOT NULL,
    "ktp" VARCHAR(200) NOT NULL,
    "surat_katekisasi" VARCHAR(200) NOT NULL,
    "alamat_lengkap" VARCHAR(225) NOT NULL,
    "wilayah" VARCHAR(80),
    "gereja_asal" VARCHAR(100),
    "surat_keterangan_gereja_asal" VARCHAR(200),
    "angkatanSlug" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Calon_Baptis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Angkatan_Baptis" (
    "id" TEXT NOT NULL,
    "nama" VARCHAR(40) NOT NULL,

    CONSTRAINT "Angkatan_Baptis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Keluarga" (
    "id" TEXT NOT NULL,
    "nama_ayah" VARCHAR(50) NOT NULL,
    "nama_ibu" VARCHAR(50) NOT NULL,
    "agama_ayah" VARCHAR(20) NOT NULL,
    "agama_ibu" VARCHAR(20) NOT NULL,
    "calon_baptisID" TEXT NOT NULL,
    "kartu_keluarga" VARCHAR(200) NOT NULL,
    "status_pernikahan" "Status_Pernikahan" NOT NULL,

    CONSTRAINT "Keluarga_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "role" "Role" DEFAULT 'USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Calon_Baptis_userId_key" ON "Calon_Baptis"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Angkatan_Baptis_nama_key" ON "Angkatan_Baptis"("nama");

-- CreateIndex
CREATE UNIQUE INDEX "Keluarga_calon_baptisID_key" ON "Keluarga"("calon_baptisID");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- AddForeignKey
ALTER TABLE "Calon_Baptis" ADD CONSTRAINT "Calon_Baptis_angkatanSlug_fkey" FOREIGN KEY ("angkatanSlug") REFERENCES "Angkatan_Baptis"("nama") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Calon_Baptis" ADD CONSTRAINT "Calon_Baptis_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Keluarga" ADD CONSTRAINT "Keluarga_calon_baptisID_fkey" FOREIGN KEY ("calon_baptisID") REFERENCES "Calon_Baptis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

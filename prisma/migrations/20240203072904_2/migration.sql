-- DropForeignKey
ALTER TABLE "Keluarga" DROP CONSTRAINT "Keluarga_calon_baptisID_fkey";

-- AddForeignKey
ALTER TABLE "Keluarga" ADD CONSTRAINT "Keluarga_calon_baptisID_fkey" FOREIGN KEY ("calon_baptisID") REFERENCES "Calon_Baptis"("id") ON DELETE CASCADE ON UPDATE CASCADE;

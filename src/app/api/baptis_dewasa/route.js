import prisma from "@/app/libs/prisma";
import { NextResponse } from "next/server";
import { getAuthSession } from "../auth/[...nextauth]/route";

export async function POST(req, res) {
  try {
    const session = await getAuthSession();
    if (!session)
      return NextResponse.json(
        { message: "NOT AUTHORIZED", data: null },
        { status: 401 }
      );

    const { angkatan, calon_baptis, keluarga } = await req.json();
    const {
      nama_lengkap,
      jenis_kelamin,
      tempat_lahir,
      tanggal_lahir,
      akte_lahir,
      ktp,
      surat_katekisasi,
      wilayah,
      alamat_lengkap,
    } = calon_baptis;

    const {
      nama_ayah,
      nama_ibu,
      agama_ayah,
      agama_ibu,
      kartu_keluarga,
      status_pernikahan,
    } = keluarga;

    if (
      !angkatan ||
      !nama_lengkap ||
      !jenis_kelamin ||
      !tempat_lahir ||
      !tanggal_lahir ||
      !akte_lahir ||
      !ktp ||
      !surat_katekisasi ||
      !wilayah ||
      !alamat_lengkap ||
      !nama_ayah ||
      !nama_ibu ||
      !agama_ayah ||
      !agama_ibu ||
      !kartu_keluarga ||
      !status_pernikahan
    ) {
      return NextResponse.json(
        { message: "Isi semua fields", data: null },
        { status: 400 }
      );
    }

    const pendaftaran_baptis = await prisma.calon_Baptis.create({
      data: {
        nama_lengkap: nama_lengkap,
        jenis_kelamin: jenis_kelamin,
        tempat_lahir: tempat_lahir,
        jenis_baptis: "DEWASA",
        akte_lahir: akte_lahir,
        ktp: ktp,
        surat_katekisasi: surat_katekisasi,
        alamat_lengkap: alamat_lengkap,
        wilayah: wilayah,
        userId: session?.token?.id,
        angkatanSlug: angkatan,
        keluarga: {
          create: {
            nama_ayah: nama_ayah,
            nama_ibu: nama_ibu,
            agama_ayah: agama_ayah,
            agama_ibu: agama_ibu,
            kartu_keluarga: kartu_keluarga,
            status_pernikahan: status_pernikahan,
          },
        },
      },
    });

    return NextResponse.json({ data: pendaftaran_baptis }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error.message || "" }, { status: 500 });
  }
}

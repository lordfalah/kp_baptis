import prisma from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export async function PATCH(req, { params }) {
  try {
    const baptis = await prisma.fomulir.findUnique({
      where: {
        id: params.id,
      },
    });

    if (!baptis)
      return NextResponse.json(
        { message: "Baptis Not Found" },
        { status: 404 }
      );

    const {
      name,
      kode_anggota,
      no_hp,
      tempat_lahir,
      tanggal_lahir,
      name_baptis,
      jenis_kelamin,
      alamat,
      name_ayah,
      name_ibu,
      jenis_baptis,
    } = await req.json();

    if (
      !name ||
      !kode_anggota ||
      !no_hp ||
      !tempat_lahir ||
      !tanggal_lahir ||
      !name_baptis ||
      !jenis_kelamin ||
      !alamat ||
      !name_ayah ||
      !name_ibu ||
      !jenis_baptis
    ) {
      return NextResponse.json({ message: "isi semua field" }, { status: 400 });
    }

    const updateBaptis = await prisma.fomulir.update({
      where: {
        id: baptis.id,
      },

      data: {
        fullname: name,
        kode_anggota,
        no_hp,
        tempat_lahir,
        tanggal_lahir: tanggal_lahir.toString(),
        name_baptis,
        jenis_baptis: jenis_baptis.toString().toUpperCase(),
        alamat,
        name_ayah,
        name_ibu,
        jenis_baptis,
      },
    });

    return NextResponse.json(updateBaptis, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message || "" }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const baptis = await prisma.fomulir.delete({
      where: {
        id: params.id,
      },
    });

    if (!baptis)
      return NextResponse.json(
        { message: "Baptis Not Found" },
        { status: 404 }
      );

    return NextResponse.json(baptis, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error.message || "" }, { status: 500 });
  }
}

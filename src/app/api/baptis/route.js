import prisma from "@/app/libs/prisma";
import { NextResponse } from "next/server";
import { getAuthSession } from "../auth/[...nextauth]/route";

export async function POST(req, res) {
  try {
    const session = await getAuthSession();
    if (!session)
      return NextResponse.json({ message: "NOT AUTHORIZED" }, { status: 401 });

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
      return NextResponse.json(null, { status: 400 });
    }

    const res = await prisma.fomulir.create({
      data: {
        fullname: name,
        kode_anggota,
        no_hp,
        tempat_lahir,
        tanggal_lahir: tanggal_lahir.toString(),
        name_baptis,
        jenis_kelamin,
        alamat,
        name_ayah,
        name_ibu,
        jenis_baptis: jenis_baptis.toString().toUpperCase(),
        user_id: session.token.id,
      },
    });

    return NextResponse.json(res, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error.message || "" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const res = await prisma.fomulir.findMany({
      where: {
        user: {
          role: {
            contains: "USER",
          },
        },
      },

      include: {
        user: true,
      },
    });

    return NextResponse.json(res || [], { status: 200 });
  } catch (error) {
    throw new Error(error.message || "");
  }
}

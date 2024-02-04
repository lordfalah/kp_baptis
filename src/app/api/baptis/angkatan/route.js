import prisma from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await prisma.angkatan_Baptis.findMany();

    return NextResponse.json({ data: res }, { status: 200 });
  } catch (error) {
    throw new Error(error.message || "");
  }
}

export async function POST(req, res) {
  try {
    const { angkatan } = await req.json();
    if (!angkatan)
      return NextResponse.json(
        { message: "Isi fields angkatan", data: null },
        { status: 400 }
      );

    const createAngkatanBaptis = await prisma.angkatan_Baptis.create({
      data: {
        nama: angkatan,
      },
    });

    return NextResponse.json({ data: createAngkatanBaptis }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error.message || "" }, { status: 500 });
  }
}

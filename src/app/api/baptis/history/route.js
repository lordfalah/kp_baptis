import prisma from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await prisma.history_Calon_Baptis.findMany();

    return NextResponse.json({ data: res }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message || "" }, { status: 500 });
  }
}

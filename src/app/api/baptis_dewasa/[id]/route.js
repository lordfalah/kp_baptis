import prisma from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    const calon_baptis = await prisma.calon_Baptis.delete({
      where: {
        id: params.id,
      },
    });

    if (!calon_baptis)
      return NextResponse.json(
        { message: "Baptis Not Found" },
        { status: 404 }
      );

    return NextResponse.json({ data: calon_baptis }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error.message || "" }, { status: 500 });
  }
}

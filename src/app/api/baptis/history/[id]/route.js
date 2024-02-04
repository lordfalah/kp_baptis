import prisma from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  console.log(params?.id);
  try {
    const calon_history_baptis = await prisma.history_Calon_Baptis.delete({
      where: {
        id: params.id,
      },
    });

    console.log(calon_history_baptis);

    if (!calon_history_baptis)
      return NextResponse.json(
        { message: "History Baptis Not Found" },
        { status: 404 }
      );

    return NextResponse.json({ data: calon_history_baptis }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error.message || "" }, { status: 500 });
  }
}

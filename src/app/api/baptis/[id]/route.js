import prisma from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    return prisma.$transaction(async (tx) => {
      const calon_baptis = await tx.calon_Baptis.delete({
        where: {
          id: params.id,
        },

        include: {
          keluarga: true,
          angkatan: true,
        },
      });

      if (!calon_baptis)
        return NextResponse.json(
          { message: "Baptis Not Found" },
          { status: 404 }
        );

      await tx.history_Calon_Baptis.create({
        data: {
          history: calon_baptis,
        },
      });

      return NextResponse.json({ data: calon_baptis }, { status: 201 });
    });
  } catch (error) {
    console.log(error?.message);
    return NextResponse.json({ message: error.message || "" }, { status: 500 });
  }
}

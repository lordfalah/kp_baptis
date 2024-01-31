import prisma from "@/app/libs/prisma";
import { NextResponse } from "next/server";
import { getAuthSession } from "../auth/[...nextauth]/route";

export async function GET() {
  try {
    const res = await prisma.user.findMany({
      where: {
        role: {
          equals: "USER",
        },

        calon_baptis: {
          isNot: null,
        },
      },

      include: {
        calon_baptis: true,
      },
    });

    return NextResponse.json({ data: res }, { status: 200 });
  } catch (error) {
    throw new Error(error.message || "");
  }
}

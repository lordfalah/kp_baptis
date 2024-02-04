import prisma from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      // Process a POST request
      const { surat_upload_baptis } = await req.json();
      if (!surat_upload_baptis)
        return NextResponse.json(
          { message: "Isi fields surat baptis", data: null },
          { status: 400 }
        );

      const uploadSurat = await prisma.upload_Surat_Baptis.create({
        data: {
          surat_baptis: surat_upload_baptis,
        },
      });

      return NextResponse.json({ data: uploadSurat }, { status: 201 });
    } else if (req.method === "PATCH") {
      // Handle any other HTTP method
    } else {
      return NextResponse.json(
        { message: "method not allowed!!!" },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json({ message: error.message || "" }, { status: 500 });
  }
}

export { handler as PATCH, handler as POST };

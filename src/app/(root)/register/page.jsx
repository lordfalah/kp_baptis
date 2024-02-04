import React, { Fragment } from "react";
import Image from "next/image";
import HoverDevCards from "@/component/cards/HoverDevCards";
import FormAnak from "./(baptis_anak)/Form";
import FormDewasa from "./(baptis_dewasa)/Form";
import prisma from "@/app/libs/prisma";
import { getAuthSession } from "@/app/api/auth/[...nextauth]/route";

export const revalidate = 0;

const userBaptis = async () => {
  try {
    const session = await getAuthSession();

    if (!session) return null;

    const res = await prisma.calon_Baptis.findUnique({
      where: {
        userId: session?.token?.id,
      },
    });

    return res;
  } catch (error) {
    throw new Error(error.message || "");
  }
};

const angkatanBaptis = async () => {
  try {
    const res = await prisma.angkatan_Baptis.findMany();
    return res;
  } catch (error) {
    throw new Error(error.message || "");
  }
};

const page = async ({ searchParams }) => {
  const alreadyRegist = await userBaptis();

  const angkatan = await angkatanBaptis();

  let tipeBaptis = searchParams ? searchParams?.baptis : null;

  return (
    <section
      className={`lg:px-48 md:px-12 px-4 py-24 ${
        true ? "min-h-screen" : "h-auto"
      }`}
    >
      <div className="bg-white p-4 my-10 rounded-md">
        <div className="flex justify-center text-black relative py-4 z-20">
          <div className="space-y-3.5 mx-auto text-center">
            <h2 className="text-2xl font-semibold">GSJA MERTIGUNA SINTANG</h2>
            <div>
              <p>Jl. Tamat Mahmudin Marti Guna,</p>
              <p>Kecamatan Sintang, Kabupaten Sintang, Kalimantan Barat</p>
              <p>78614</p>
              <p>-</p>
            </div>
          </div>
          <div className="absolute right-0 -z-10 top-1/2 -translate-y-1/2">
            <Image
              src="/image/logo/gsja.png"
              alt="Logo"
              className="w-32 md:w-40 aspect-square"
              width={200}
              height={200}
              priority
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <hr className="border-1.5 border-black" />
      </div>

      {!tipeBaptis && <HoverDevCards />}

      {alreadyRegist && tipeBaptis ? (
        <div className="flex flex-col items-center gap-4">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-slate-800 drop-shadow-sm">
              You are already registed
            </h2>
            <p className="text-muted-foreground drop-shadow">Just wait</p>
          </div>
        </div>
      ) : (
        <Fragment>
          {tipeBaptis === "dewasa" && <FormDewasa tipeBaptis={tipeBaptis} />}
          {tipeBaptis === "anak" && <FormAnak tipeBaptis={tipeBaptis} />}
        </Fragment>
      )}
    </section>
  );
};

export default page;

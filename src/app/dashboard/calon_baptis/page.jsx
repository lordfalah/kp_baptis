import FormAnak from "@/app/(root)/register/(baptis_anak)/Form";
import FormDewasa from "@/app/(root)/register/(baptis_dewasa)/Form";
import HoverDevCards from "@/component/cards/HoverDevCards";
import Header from "@/component/dashboard/Header";
import { Fragment } from "react";
import Image from "next/image";
import { FormBaptisProvider } from "@/app/context/FormBaptis";
import FormCalonBaptisAdmin from "./Form";

const getAngkatans = async () => {
  try {
    const req = await fetch(
      `${process.env.NEXT_PUBLIC_URL_PAGE}/api/baptis/angkatan`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const res = await req.json();
    return res;
  } catch (error) {
    throw new Error(error.message || "INTERNAL SERVER ERROR");
  }
};

export default async function page({ searchParams }) {
  const angkatan = await getAngkatans();

  const change_angkatan = angkatan.data.map((item) => {
    const newAngkatan = item.nama.charAt(0).toUpperCase() + item.nama.slice(1);
    return {
      value: item.nama,
      label: newAngkatan,
    };
  });

  let tipeBaptis = searchParams ? searchParams?.baptis : null;

  return (
    <Fragment>
      <main className="relative h-full transition-all duration-200 ease-in-out xl:ml-68 rounded-xl w-full">
        <div className="w-full px-6 py-6 mx-auto">
          <Header />
        </div>

        {/* body */}
        <section
          className={`lg:px-28 md:px-12 px-4 py-10 ${
            true ? "min-h-screen" : "h-auto"
          }`}
        >
          <div className="bg-white p-4 my-10 rounded-md">
            <div className="flex justify-center text-black relative py-4 z-20">
              <div className="space-y-3.5 mx-auto text-center">
                <h2 className="text-2xl font-semibold">
                  GSJA MERTIGUNA SINTANG
                </h2>
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
          {!tipeBaptis && (
            <Fragment>
              <FormCalonBaptisAdmin />
              <HoverDevCards />
            </Fragment>
          )}
          <FormBaptisProvider>
            {tipeBaptis === "dewasa" && (
              <FormDewasa tipeBaptis={tipeBaptis} angkatan={change_angkatan} />
            )}
            {tipeBaptis === "anak" && (
              <FormAnak tipeBaptis={tipeBaptis} angkatan={change_angkatan} />
            )}
          </FormBaptisProvider>
          ;
        </section>
      </main>
    </Fragment>
  );
}

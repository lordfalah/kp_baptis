import { getAuthSession } from "@/app/api/auth/[...nextauth]/route";
import FormEdit from "../(form)/FormEdit";
import { redirect } from "next/navigation";
import Image from "next/image";
import prisma from "@/app/libs/prisma";

export const revalidate = 0;

const fomulirBaptisUser = async () => {
  try {
    const session = await getAuthSession();
    if (!session) throw new Error("You not registed");

    const res = await prisma.fomulir.findUnique({
      where: {
        user_id: session?.token?.id,
      },
    });

    return res || null;
  } catch (error) {
    throw new Error(error.message || "");
  }
};

const page = async () => {
  const baptis = await fomulirBaptisUser();
  if (!baptis) return redirect("/register");

  return (
    <section className={`lg:px-48 md:px-12 px-4 py-24`}>
      <div className="bg-white p-4 my-10 rounded-md">
        <div className="flex justify-center text-black relative z-20">
          <div className="space-y-3.5 mx-auto text-center">
            <h2 className="text-2xl font-semibold">
              Klinik & Apotek Kesehatan
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

      <FormEdit data={baptis} />
    </section>
  );
};

export default page;

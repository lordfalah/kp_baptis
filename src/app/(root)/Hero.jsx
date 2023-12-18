"use client";

import Link from "next/link";
import Image from "next/image";
import Persyaratan from "./Persyaratan";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Hero = () => {
  return (
    <section className="pt-24 md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4">
      <div className="md:flex-1 md:mr-10">
        <h1 className="font-pt-serif text-5xl font-bold mb-7">
          Pendaftaran Baptis
          <span className="bg-underline1 bg-left-bottom bg-no-repeat pb-2 bg-100%">
            GSJA Mertiguna Sintang
          </span>
        </h1>
        <p className="font-pt-serif font-normal mb-7">
          Matius 28:19 – “Karena itu pergilah, jadikanlah semua bangsa murid-Ku
          dan baptislah mereka dalam nama Bapa dan Anak dan Roh Kudus"
        </p>
        <div className="font-montserrat">
          <Dialog>
            <DialogTrigger className="bg-black px-6 py-4 rounded-lg border-2 border-black border-solid text-white mr-2 mb-2">
              Persyaratan
            </DialogTrigger>
            <DialogContent className="max-w-xl">
              <Persyaratan />
            </DialogContent>
          </Dialog>

          <Link
            href={"#how_it_works"}
            className="px-6 py-4 border-2 border-black border-solid rounded-lg"
          >
            More Baptis
          </Link>
        </div>
      </div>
      <div className="flex md:block mt-8 md:mt-0 md:flex-1">
        <Image
          src="/image/content/pray.svg"
          width={350}
          height={350}
          priority
          className="w-full max-w-sm sm:max-w-xl mx-auto"
          style={{ objectFit: "cover" }}
          alt="pray"
        />
      </div>
    </section>
  );
};

export default Hero;

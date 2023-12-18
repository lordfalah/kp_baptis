"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DialogContent } from "@/components/ui/dialog";

import Printer from "@/assets/icon/Printer";
import FormLabel from "./FormLabel";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { ScrollArea } from "@/components/ui/scroll-area";

const CetakPermohonan = ({ data }) => {
  let myForm = useRef(null);

  const handlePrint = useReactToPrint({
    documentTitle: "Permohonan Baptis",
    bodyClass: "print-agreement",
    content: () => myForm.current,
  });

  return (
    <DialogContent className="sm:max-w-3xl">
      <ScrollArea className="h-[80vh] overflow-y-auto">
        <div ref={myForm} className="w-full">
          <div className="p-4 mt-4 rounded-md">
            <div className="flex justify-center text-black relative z-20 py-4 ">
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
          <FormLabel
            data={data}
            title={`Permohonan Baptis ${data?.jenis_baptis}`}
            handlePrint={handlePrint}
          />
        </div>
      </ScrollArea>

      <div className="flex justify-end">
        <Button type="submit" className="flex gap-x-2" onClick={handlePrint}>
          <Printer className="w-6 h-6 stroke-red-500" /> <span>Cetak</span>
        </Button>
      </div>
    </DialogContent>
  );
};

export default CetakPermohonan;

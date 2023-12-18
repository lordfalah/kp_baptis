"use client";

import { Label } from "@/components/ui/label";
import { format } from "date-fns";

const FormLabel = ({ data, title }) => {
  return (
    <div className="bg-white rounded-md text-black py-4 px-6 space-y-6">
      <h1 className="text-3xl font-medium text-center">{title}</h1>

      <div className="space-y-4 sm:space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-y-2 sm:gap-y-4 gap-x-8">
          <Label
            htmlFor="name"
            className="basis-2/5 text-lg relative after:content-[''] sm:after:content-[':'] after:absolute after:right-0"
          >
            Nama Lengkap
          </Label>

          <div className="flex flex-col w-full">
            <Label className="text-muted-foreground sm:text-black w-full text-md">
              {data?.fullname}
            </Label>
            <hr className="block w-11/12 -mt-1 sm:mt-0 " />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-y-2 sm:gap-y-4 gap-x-8 ">
          <Label
            htmlFor="name_baptis"
            className="basis-2/5 text-lg relative after:content-[''] sm:after:content-[':'] after:absolute after:right-0"
          >
            Nama Baptis
          </Label>
          <div className="flex flex-col w-full">
            <Label className="text-muted-foreground sm:text-black w-full text-md">
              {data?.name_baptis}
            </Label>
            <hr className="block w-11/12 -mt-1 sm:mt-0" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-y-2 sm:gap-y-4 gap-x-8 ">
          <Label
            htmlFor="tempat_lahir"
            className="basis-2/5 text-lg relative after:content-[''] sm:after:content-[':'] after:absolute after:right-0"
          >
            Tempat Lahir
          </Label>

          <div className="flex flex-col w-full">
            <Label className="text-muted-foreground sm:text-black w-full text-md">
              {data?.tempat_lahir}
            </Label>
            <hr className="block w-11/12 -mt-1 sm:mt-0" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-y-2 sm:gap-y-4 gap-x-8 ">
          <Label
            htmlFor="tanggal_lahir"
            className="basis-2/5 text-lg relative after:content-[''] sm:after:content-[':'] after:absolute after:right-0.5"
          >
            Tanggal Lahir
          </Label>

          <div className="flex flex-col w-full">
            <Label className="text-muted-foreground sm:text-black w-full text-md">
              {format(new Date(parseInt(data?.tanggal_lahir)), "PPP")}
            </Label>

            <hr className="block w-11/12 -mt-1 sm:mt-0" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-y-2 sm:gap-y-4 gap-x-8 ">
          <Label
            htmlFor="name_ayah"
            className="basis-2/5 text-lg relative after:content-[''] sm:after:content-[':'] after:absolute after:right-0"
          >
            Nama ayah
          </Label>

          <div className="flex flex-col w-full">
            <Label className="text-muted-foreground sm:text-black w-full text-md">
              {data?.name_ayah}
            </Label>
            <hr className="block w-11/12 -mt-1 sm:mt-0" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-y-2 sm:gap-y-4 gap-x-8 ">
          <Label
            htmlFor="name_ibu"
            className="basis-2/5 text-lg relative after:content-[''] sm:after:content-[':'] after:absolute after:right-0"
          >
            Nama Ibu
          </Label>

          <div className="flex flex-col w-full">
            <Label className="text-muted-foreground sm:text-black w-full text-md">
              {data?.name_ibu}
            </Label>
            <hr className="block w-11/12 -mt-1 sm:mt-0" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-y-2 sm:gap-y-4 gap-x-8 ">
          <Label
            htmlFor="jenis_kelamin"
            className="basis-2/5 text-lg relative after:content-[''] sm:after:content-[':'] after:absolute after:right-0.5"
          >
            Jenis Kelamin
          </Label>

          <div className="flex flex-col w-full">
            <Label className="text-muted-foreground sm:text-black w-full text-md">
              {data?.jenis_kelamin}
            </Label>
            <hr className="block w-11/12 -mt-1 sm:mt-0" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-y-2 sm:gap-y-4 gap-x-8 ">
          <Label
            htmlFor="jenis_baptis"
            className="basis-2/5 text-lg relative after:content-[''] sm:after:content-[':'] after:absolute after:right-0.5"
          >
            Jenis Baptis
          </Label>

          <div className="flex flex-col w-full">
            <Label className="text-muted-foreground sm:text-black w-full text-md">
              {data?.jenis_baptis}
            </Label>
            <hr className="block w-11/12 -mt-1 sm:mt-0" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-y-2 sm:gap-y-4 gap-x-8 ">
          <Label
            htmlFor="no_anggota"
            className="basis-2/5 text-lg relative after:content-[''] sm:after:content-[':'] after:absolute after:right-0"
          >
            No Anggota
          </Label>

          <div className="flex flex-col w-full">
            <Label className="text-muted-foreground sm:text-black w-full text-md">
              {data?.kode_anggota}
            </Label>
            <hr className="block w-11/12 -mt-1 sm:mt-0" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-y-2 sm:gap-y-4 gap-x-8 ">
          <Label
            htmlFor="alamat"
            className="basis-2/5 text-lg relative after:content-[''] sm:after:content-[':'] after:absolute after:right-0"
          >
            Alamat
          </Label>

          <div className="flex flex-col w-full">
            <Label className="text-muted-foreground sm:text-black w-full text-md">
              {data?.alamat}
            </Label>
            <hr className="block w-11/12 -mt-1 sm:mt-0" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-y-2 sm:gap-y-4 gap-x-8 ">
          <Label
            htmlFor="no_hp"
            className="basis-2/5 text-lg relative after:content-[''] sm:after:content-[':'] after:absolute after:right-0"
          >
            No Telepon
          </Label>

          <div className="flex flex-col w-full">
            <Label className="text-muted-foreground sm:text-black w-full text-md">
              {data?.no_hp}
            </Label>
            <hr className="block w-11/12 -mt-1 sm:mt-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLabel;

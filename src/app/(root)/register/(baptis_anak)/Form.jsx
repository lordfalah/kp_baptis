"use client";

import { useFormBaptis } from "@/app/context/FormBaptis";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useState } from "react";
import FormBaptis from "../(form)/FormBaptis";

const FormAnak = ({ tipeBaptis, angkatan }) => {
  const { form } = useFormBaptis();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const disabledSubmit = Boolean(
    form.angkatan &&
      form.calon_baptis.akte_lahir &&
      form.calon_baptis.alamat_lengkap &&
      form.calon_baptis.jenis_kelamin &&
      form.calon_baptis.ktp &&
      form.calon_baptis.nama_lengkap &&
      form.calon_baptis.tanggal_lahir &&
      form.calon_baptis.tempat_lahir &&
      form.keluarga.agama_ayah &&
      form.keluarga.agama_ibu &&
      form.keluarga.kartu_keluarga &&
      form.keluarga.nama_ayah &&
      form.keluarga.nama_ibu &&
      form.keluarga.status_pernikahan
  );

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const req = await fetch("/api/baptis", {
        method: "POST",
        body: JSON.stringify({
          ...form,
          calon_baptis: {
            ...form.calon_baptis,
            jenis_baptis: tipeBaptis.toUpperCase(),
          },
        }),
      });

      const res = await req.json();
      if (!req.ok) throw new Error(res?.message);
      toast({
        variant: "success",
        title: "Success",
        description: "Berhasil melakukan registrasi",
      });
      router.refresh();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error?.message || "Gagal melakukan registrasi",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormBaptis
      angkatan={angkatan}
      title={"Anak"}
      form={form}
      isLoading={isLoading}
      disabledSubmit={disabledSubmit}
      handleForm={handleForm}
    />
  );
};

export default FormAnak;

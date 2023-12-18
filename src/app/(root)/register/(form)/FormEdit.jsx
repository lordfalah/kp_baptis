"use client";

import { useState } from "react";
import InputForm from "./InputForm";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

const FormEdit = ({ data }) => {
  const [form, setForm] = useState({
    name: data.fullname || "",
    kode_anggota: data.kode_anggota || "",
    no_hp: data.no_hp || "",
    tempat_lahir: data.tempat_lahir || "",
    tanggal_lahir: parseInt(data.tanggal_lahir) || null,
    name_baptis: data.name_baptis || "",
    jenis_kelamin: data.jenis_kelamin || "",
    alamat: data.alamat || "",
    name_ayah: data.name_ayah || "",
    name_ibu: data.name_ibu || "",
    jenis_baptis: data.jenis_baptis || "",
  });
  const onChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const {
        name,
        kode_anggota,
        no_hp,
        tempat_lahir,
        tanggal_lahir,
        name_baptis,
        jenis_kelamin,
        alamat,
        name_ayah,
        name_ibu,
        jenis_baptis,
      } = form;
      if (
        !name ||
        !kode_anggota ||
        !no_hp ||
        !tempat_lahir ||
        !tanggal_lahir ||
        !name_baptis ||
        !jenis_kelamin ||
        !alamat ||
        !name_ayah ||
        !name_ibu ||
        !jenis_baptis
      ) {
        throw new Error("Isi semua field");
      }

      const req = await fetch(`/api/baptis/${data.id}`, {
        method: "PATCH",
        body: JSON.stringify(form),
      });

      if (!req.ok) {
        throw new Error(req.statusText || "");
      }

      await req.json();
      toast({
        variant: "success",
        title: "Success",
        description: "Permohonan berhasil di Update",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.message || "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  };

  return (
    <InputForm
      method="PATCH"
      title={"Edit Permohonan"}
      onChange={onChange}
      form={form}
      setForm={setForm}
      onSubmit={submitForm}
    />
  );
};

export default FormEdit;

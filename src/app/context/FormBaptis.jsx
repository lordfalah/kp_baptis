"use client";

import React, { createContext, useContext, useState } from "react";

// Membuat objek context
const FormContext = createContext();

const FormBaptisProvider = ({ children }) => {
  const [form, setForm] = useState({
    angkatan: "",
    calon_baptis: {
      nama_lengkap: "",
      jenis_kelamin: "",
      tempat_lahir: "",
      tanggal_lahir: "",
      akte_lahir: "",
      ktp: "",
      surat_katekisasi: "",
      wilayah: "",
      alamat_lengkap: "",
    },

    keluarga: {
      nama_ayah: "",
      nama_ibu: "",
      agama_ayah: "",
      agama_ibu: "",
      kartu_keluarga: "",
      status_pernikahan: "",
    },
  });

  return (
    <FormContext.Provider value={{ form, setForm }}>
      {children}
    </FormContext.Provider>
  );
};

const useFormBaptis = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};

export { useFormBaptis, FormBaptisProvider };

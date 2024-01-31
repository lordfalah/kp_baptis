"use client";

import { useFormBaptis } from "@/app/context/FormBaptis";
import Angkatan from "@/component/Angkatan";
import CalonBaptis from "../(form)/CalonBaptis";
import { Button } from "@/components/ui/button";
import Keluarga from "./Keluarga";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

const angkatan = [
  {
    value: "februari 2024",
    label: "Februari 2024",
  },
  {
    value: "maret 2024",
    label: "Maret 2024",
  },
];

const FormDewasa = () => {
  const { form } = useFormBaptis();
  const router = useRouter();

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const req = await fetch("/api/baptis_dewasa", {
        method: "POST",
        body: JSON.stringify(form),
      });
      const res = await req.json();
      toast({
        variant: "success",
        title: "Success",
        description: "Data Product berhasil di tambah",
      });
      router.refresh();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error?.message || "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  };

  return (
    <main className="space-y-20">
      <form className="space-y-20" onSubmit={handleForm}>
        {/* Bagian 1 */}
        <Angkatan name={"Angkatan"} datas={angkatan} />

        {/* bagian 2 */}
        <CalonBaptis />

        {/* bagian 3 */}
        <Keluarga />

        <Button
          className="w-full bg-black text-white font-semibold "
          type="submit"
        >
          Daftar
        </Button>
      </form>
    </main>
  );
};

export default FormDewasa;

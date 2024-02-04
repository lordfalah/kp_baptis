"use client";
import { Loader2 } from "lucide-react";
import Angkatan from "@/component/Angkatan";
import CalonBaptis from "../(form)/CalonBaptis";
import { Button } from "@/components/ui/button";
import { Dropdown } from "@/component/Dropdown";
import { Fragment } from "react";
import Keluarga from "../(baptis_dewasa)/Keluarga";

const FormBaptis = ({
  angkatan,
  title,
  isLoading,
  disabledSubmit,
  handleForm,
}) => {
  return (
    <main className="space-y-10">
      <h2 className="text-center font-semibold text-3xl">Baptis {title}</h2>
      <form className="space-y-20" onSubmit={handleForm}>
        {/* Bagian 1 */}
        <Angkatan>
          <Dropdown datas={angkatan} name="Angkatan" />
        </Angkatan>

        <hr className="bg-muted-foreground" />

        {/* bagian 2 */}
        <CalonBaptis tipeBaptis={title.toUpperCase()} />

        <hr className="bg-muted-foreground" />

        {/* bagian 3 */}
        <Keluarga />

        <Button
          disabled={!disabledSubmit && !isLoading}
          className={`w-full bg-black text-white font-semibold ${
            !disabledSubmit ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          type="submit"
        >
          {isLoading ? (
            <Fragment>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Fragment>
          ) : (
            "Daftar"
          )}
        </Button>
      </form>
    </main>
  );
};

export default FormBaptis;

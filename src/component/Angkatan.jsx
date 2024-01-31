import { Dropdown } from "@/component/Dropdown";
import React from "react";

const Angkatan = ({ datas, name }) => {
  return (
    <div className="space-y-12">
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold text-black">Angkatan</h3>
        <p className="text-muted-foreground text-xl">
          Data Pendaftaran Bagian 1
        </p>
      </div>

      <div>
        <p className="text-sm">
          <span>Angkatan</span>{" "}
          <span className="text-muted-foreground italic">Wajib Disi</span>
        </p>

        <Dropdown datas={datas} name={name} />
      </div>
    </div>
  );
};

export default Angkatan;

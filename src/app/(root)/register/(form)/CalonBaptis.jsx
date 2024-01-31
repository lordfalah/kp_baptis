"use client";

import { useFormBaptis } from "@/app/context/FormBaptis";
import { useEdgeStore } from "@/app/libs/edgestore";
import { Dropdown } from "@/component/Dropdown";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

const wilayah = [
  {
    value: "jakarta",
    label: "Jakarta",
  },
  {
    value: "surabaya",
    label: "Surabaya",
  },
  {
    value: "bandung",
    label: "Bandung",
  },
  {
    value: "yogyakarta",
    label: "Yogyakarta",
  },
  {
    value: "medan",
    label: "Medan",
  },
];

const CalonBaptis = () => {
  const { edgestore } = useEdgeStore();
  const { setForm } = useFormBaptis();

  return (
    <div className="space-y-12">
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold text-black">Calon Baptis</h3>
        <p className="text-muted-foreground text-xl">
          Data Pendaftaran Bagian 2
        </p>
      </div>

      <aside className="flex justify-between">
        <div className="space-y-8 basis-2/5">
          {/* nama lengkap */}
          <div>
            <Label
              htmlFor="name"
              className="basis-2/5 relative after:content-[''] sm:after:content-[':'] after:absolute after:right-0"
            >
              Nama Lengkap{" "}
              <span className="text-sm italic text-muted-foreground">
                Sesuai Akte Lahir, Wajib Diisi
              </span>
            </Label>
            <Input
              required
              type="text"
              id="name"
              name="name"
              placeholder="nama lengkap"
              className="basis-auto"
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  calon_baptis: {
                    ...prev.calon_baptis,
                    nama_lengkap: e.target.value,
                  },
                }))
              }
            />
          </div>

          {/* jenis kelamin */}
          <div>
            <Label
              htmlFor="name"
              className="basis-2/5 relative after:content-[''] sm:after:content-[':'] after:absolute after:right-0"
            >
              Jenis Kelamin
              <span className="text-sm italic text-muted-foreground">
                Wajib Diisi
              </span>
            </Label>

            <RadioGroup
              className="flex gap-x-6"
              defaultValue="option-one"
              onValueChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  calon_baptis: {
                    ...prev.calon_baptis,
                    jenis_kelamin: e,
                  },
                }))
              }
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="PRIA" id="PRIA" />
                <Label htmlFor="PRIA">Pria</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="WANITA" id="WANITA" />
                <Label htmlFor="WANITA">Wanita</Label>
              </div>
            </RadioGroup>
          </div>

          {/* tempat lahir */}
          <div>
            <Label
              htmlFor="name"
              className="basis-2/5 relative after:content-[''] sm:after:content-[':'] after:absolute after:right-0"
            >
              Tempat Lahir
              <span className="text-sm italic text-muted-foreground">
                Wajib Diisi
              </span>
            </Label>
            <Input
              required
              type="text"
              id="name"
              name="name"
              placeholder="lahir..."
              className="basis-auto"
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  calon_baptis: {
                    ...prev.calon_baptis,
                    tempat_lahir: e.target.value,
                  },
                }))
              }
            />
          </div>

          {/* tanggal lahir */}
          <div>
            <Label
              htmlFor="name"
              className="basis-2/5 relative after:content-[''] sm:after:content-[':'] after:absolute after:right-0"
            >
              Tanggal Lahir
              <span className="text-sm italic text-muted-foreground">
                Wajib Diisi
              </span>
            </Label>
            <Input
              required
              type="text"
              id="name"
              name="name"
              placeholder="tanggal lahir..."
              className="basis-auto"
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  calon_baptis: {
                    ...prev.calon_baptis,
                    tanggal_lahir: e.target.value,
                  },
                }))
              }
            />
          </div>

          {/* akte lahir */}
          <div>
            <Label
              htmlFor="name"
              className="basis-2/5 relative after:content-[''] sm:after:content-[':'] after:absolute after:right-0"
            >
              Akte Lahir
              <span className="text-sm italic text-muted-foreground">
                Wajib Diisi
              </span>
            </Label>
            <Input
              required
              type="file"
              className="basis-auto"
              onChange={async (e) => {
                try {
                  const res = await edgestore.publicFiles.upload({
                    file: e.target.files?.[0],
                    options: {
                      temporary: true,
                    },
                  });
                  setForm((prev) => ({
                    ...prev,
                    calon_baptis: {
                      ...prev.calon_baptis,
                      akte_lahir: res?.url,
                    },
                  }));
                } catch (error) {
                  console.log(error);
                }
              }}
            />
          </div>
        </div>

        <div className="space-y-8 basis-2/5">
          {/* alamat lengkap */}
          <div>
            <Label
              htmlFor="name"
              className="basis-2/5 relative after:content-[''] sm:after:content-[':'] after:absolute after:right-0"
            >
              Alamat Lengkap
              <span className="text-sm italic text-muted-foreground">
                Sesuai KK, Wajib Diisi
              </span>
            </Label>
            <Textarea
              placeholder="Type your message here."
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  calon_baptis: {
                    ...prev.calon_baptis,
                    alamat_lengkap: e.target.value,
                  },
                }))
              }
            />
          </div>

          {/* wilayah */}
          <div>
            <p className="text-sm">
              <span>Wilayah</span>
              <span className="text-muted-foreground italic">Wajib Disi</span>
            </p>

            <Dropdown datas={wilayah} name={"wilayah"} />
          </div>

          {/* ktp */}
          <div>
            <Label
              htmlFor="name"
              className="basis-2/5 relative after:content-[''] sm:after:content-[':'] after:absolute after:right-0"
            >
              Ktp
              <span className="text-sm italic text-muted-foreground">
                Wajib Diisi
              </span>
            </Label>
            <Input
              required
              type="file"
              className="basis-auto"
              onChange={async (e) => {
                try {
                  const res = await edgestore.publicFiles.upload({
                    file: e.target.files?.[0],
                    options: {
                      temporary: true,
                    },
                  });
                  setForm((prev) => ({
                    ...prev,
                    calon_baptis: {
                      ...prev.calon_baptis,
                      ktp: res?.url,
                    },
                  }));
                } catch (error) {
                  console.log(error);
                }
              }}
            />
          </div>

          {/* Surat Katekisasi */}
          <div>
            <Label
              htmlFor="name"
              className="basis-2/5 relative after:content-[''] sm:after:content-[':'] after:absolute after:right-0"
            >
              Surat Katekisasi
              <span className="text-sm italic text-muted-foreground">
                Wajib Diisi
              </span>
            </Label>
            <Input
              required
              type="file"
              className="basis-auto"
              onChange={async (e) => {
                try {
                  const res = await edgestore.publicFiles.upload({
                    file: e.target.files?.[0],
                    options: {
                      temporary: true,
                    },
                  });
                  setForm((prev) => ({
                    ...prev,
                    calon_baptis: {
                      ...prev.calon_baptis,
                      surat_katekisasi: res?.url,
                    },
                  }));
                } catch (error) {
                  console.log(error);
                }
              }}
            />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default CalonBaptis;

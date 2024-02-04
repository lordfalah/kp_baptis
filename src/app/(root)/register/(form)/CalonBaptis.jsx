"use client";

import { useFormBaptis } from "@/app/context/FormBaptis";
import { useEdgeStore } from "@/app/libs/edgestore";
import { Dropdown } from "@/component/Dropdown";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Fragment } from "react";

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

const CalonBaptis = ({ tipeBaptis }) => {
  const { edgestore } = useEdgeStore();
  const { setForm, form } = useFormBaptis();

  return (
    <div className="space-y-12">
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold text-black">Calon Baptis</h3>
        <p className="text-muted-foreground text-xl">
          Data Pendaftaran Bagian 2
        </p>
      </div>

      <aside className="flex justify-between gap-y-8 flex-col lg:flex-row lg:gap-0">
        <div className="space-y-8 basis-2/5">
          {/* nama lengkap */}
          <div>
            <Label htmlFor="name" className="space-x-1.5">
              <span>Nama Lengkap</span>
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
              autoComplete="off"
              value={form.calon_baptis.nama_lengkap}
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
            <Label htmlFor="name" className="space-x-1.5">
              <span>Jenis Kelamin</span>
              <span className="text-sm italic text-muted-foreground">
                Wajib Diisi
              </span>
            </Label>

            <div className="w-full py-3.5 px-3.5 bg-white rounded-md shadow-sm">
              <RadioGroup
                className="flex gap-x-6"
                value={form.calon_baptis.jenis_kelamin}
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
          </div>

          {/* tempat lahir */}
          <div>
            <Label htmlFor="tempat_lahir" className="space-x-1.5">
              <span>Tempat Lahir</span>
              <span className="text-sm italic text-muted-foreground">
                Wajib Diisi
              </span>
            </Label>
            <Input
              required
              type="text"
              id="tempat_lahir"
              name="tempat_lahir"
              placeholder="lahir..."
              className="basis-auto"
              autoComplete="off"
              value={form.calon_baptis.tempat_lahir}
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
            <Label htmlFor="name" className="space-x-1.5">
              <span>Tanggal Lahir</span>
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
            <Label htmlFor="akte_lahir" className="space-x-1.5">
              <span>Akte Lahir</span>
              <span className="text-sm italic text-muted-foreground">
                Wajib Diisi
              </span>
            </Label>
            <Input
              id="akte_lahir"
              name="akte_lahir"
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
            <Label htmlFor="alamat_lengkap" className="space-x-1.5">
              <span>Alamat Lengkap</span>
              <span className="text-sm italic text-muted-foreground">
                Sesuai KK, Wajib Diisi
              </span>
            </Label>
            <Textarea
              placeholder="Type your message here."
              name="alamat_lengkap"
              id="alamat_lengkap"
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

          {/* paroki */}
          <div>
            <Label htmlFor="paroki" className="space-x-1.5">
              <span>Paroki</span>
              <span className="text-sm italic text-muted-foreground">
                Wajib Diisi
              </span>
            </Label>

            <div className="w-full py-3.5 px-3.5 bg-white rounded-md shadow-sm">
              <RadioGroup
                className="flex gap-x-6"
                value={form.paroki}
                onValueChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    paroki: e,
                  }))
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="MKK" id="MKK" />
                  <Label htmlFor="MKK">MKK</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="LUAR MKK" id="LUAR MKK" />
                  <Label htmlFor="LUAR MKK">LUAR MKK</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          {form.paroki === "MKK" ? (
            <div>
              <label htmlFor="wilayah" className="text-sm space-x-1.5">
                <span>Wilayah</span>
                <span className="text-muted-foreground italic">Wajib Disi</span>
              </label>

              <Dropdown datas={wilayah} name={"wilayah"} />
            </div>
          ) : (
            <Fragment>
              {/* Surat Katekisasi */}
              {tipeBaptis === "DEWASA" && (
                <div>
                  <Label htmlFor="name" className="space-x-1.5">
                    <span>Surat Katekisasi</span>
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
              )}
              {/* Surat Pembekalan Ortu */}
              {tipeBaptis === "ANAK" && (
                <div>
                  <Label htmlFor="name" className="space-x-1.5">
                    <span>Surat Pembekalan Ortu</span>
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
                            surat_pembekalan_ortu: res?.url,
                          },
                        }));
                      } catch (error) {
                        console.log(error);
                      }
                    }}
                  />
                </div>
              )}
            </Fragment>
          )}

          {/* ktp */}
          <div>
            <Label htmlFor="name" className="space-x-1.5">
              <span>Ktp</span>
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
        </div>
      </aside>
    </div>
  );
};

export default CalonBaptis;

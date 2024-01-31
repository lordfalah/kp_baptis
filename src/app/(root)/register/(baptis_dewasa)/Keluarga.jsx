"use client";

import { useFormBaptis } from "@/app/context/FormBaptis";
import { useEdgeStore } from "@/app/libs/edgestore";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Keluarga = () => {
  const { edgestore } = useEdgeStore();
  const { setForm } = useFormBaptis();
  return (
    <div className="space-y-12">
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold text-black">Keluarga</h3>
        <p className="text-muted-foreground text-xl">
          Data Pendaftaran Bagian 3
        </p>
      </div>

      <aside className="flex justify-between">
        <div className="space-y-8 basis-2/5">
          {/* nama ayah */}
          <div>
            <Label
              htmlFor="name"
              className="basis-2/5 relative after:content-[''] sm:after:content-[':'] after:absolute after:right-0"
            >
              Nama Ayah
              <span className="text-sm italic text-muted-foreground">
                Wajib Diisi
              </span>
            </Label>
            <Input
              required
              type="text"
              id="name"
              name="name"
              placeholder="nama.."
              className="basis-auto"
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  keluarga: {
                    ...prev.keluarga,
                    nama_ayah: e.target.value,
                  },
                }))
              }
            />
          </div>

          {/* nama ibu */}
          <div>
            <Label
              htmlFor="name"
              className="basis-2/5 relative after:content-[''] sm:after:content-[':'] after:absolute after:right-0"
            >
              Nama Ibu
              <span className="text-sm italic text-muted-foreground">
                Wajib Diisi
              </span>
            </Label>
            <Input
              required
              type="text"
              id="name"
              name="name"
              placeholder="nama.."
              className="basis-auto"
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  keluarga: {
                    ...prev.keluarga,
                    nama_ibu: e.target.value,
                  },
                }))
              }
            />
          </div>

          {/* agama ayah */}
          <div>
            <Label
              htmlFor="name"
              className="basis-2/5 relative after:content-[''] sm:after:content-[':'] after:absolute after:right-0"
            >
              agama ayah
              <span className="text-sm italic text-muted-foreground">
                Wajib Diisi
              </span>
            </Label>
            <Input
              required
              type="text"
              id="name"
              name="name"
              placeholder="agama.."
              className="basis-auto"
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  keluarga: {
                    ...prev.keluarga,
                    agama_ayah: e.target.value,
                  },
                }))
              }
            />
          </div>
        </div>

        <div className="space-y-8 basis-2/5">
          {/* agama Ibu */}
          <div>
            <Label
              htmlFor="name"
              className="basis-2/5 relative after:content-[''] sm:after:content-[':'] after:absolute after:right-0"
            >
              agama Ibu
              <span className="text-sm italic text-muted-foreground">
                Wajib Diisi
              </span>
            </Label>
            <Input
              required
              type="text"
              id="name"
              name="name"
              placeholder="agama.."
              className="basis-auto"
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  keluarga: {
                    ...prev.keluarga,
                    agama_ibu: e.target.value,
                  },
                }))
              }
            />
          </div>

          {/* kk */}
          <div>
            <Label
              htmlFor="name"
              className="basis-2/5 relative after:content-[''] sm:after:content-[':'] after:absolute after:right-0"
            >
              Kartu Keluarga
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
                    keluarga: {
                      ...prev.keluarga,
                      kartu_keluarga: res.url,
                    },
                  }));
                } catch (error) {
                  console.log(error);
                }
              }}
            />
          </div>

          <div>
            <Label
              htmlFor="name"
              className="basis-2/5 relative after:content-[''] sm:after:content-[':'] after:absolute after:right-0"
            >
              Status Pernikahan
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
                  keluarga: {
                    ...prev.keluarga,
                    status_pernikahan: e,
                  },
                }))
              }
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="SUDAH" id="sudah" />
                <Label htmlFor="sudah">Sudah</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="BELUM" id="belum" />
                <Label htmlFor="belum">Belum</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Keluarga;

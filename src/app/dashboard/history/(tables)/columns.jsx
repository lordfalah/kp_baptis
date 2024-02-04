"use client";

import { useRouter } from "next/navigation";
import View from "@/assets/icon/View";
import { Trash } from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { clientApi } from "@/utils/actions/clientApi";
import DialogDelete from "@/component/dialogs/DialogDelete";
import { ScrollArea } from "@/components/ui/scroll-area";

export const columnsHistoryBaptis = [
  {
    header: "No",
    cell: ({ row }) => <span className="font-medium">{row?.index + 1}</span>,
  },

  {
    accessorKey: "nama_lengkap",
    header: "Nama",
    accessorFn: (row) => row?.history?.nama_lengkap,
  },

  {
    accessorKey: "jenis_baptis",
    header: "Jenis Baptis",
    accessorFn: (row) => row?.history?.jenis_baptis,
  },
  {
    accessorKey: "jenis_kelamin",
    header: "Jenis Kelamin",
    accessorFn: (row) => row?.history?.jenis_kelamin,
  },
  {
    accessorKey: "angkatanSlug",
    header: "Angkatan",
    accessorFn: (row) => row?.history?.angkatanSlug,
  },
  {
    accessorKey: "alamat_lengkap",
    header: "Alamat",
    accessorFn: (row) => row?.history?.alamat_lengkap,
  },

  {
    header: "TINDAKAN",
    cell: ({ row }) => {
      const router = useRouter();
      const { toast } = useToast();
      const downloadImage = (imageUrl) => {
        const link = document.createElement("a");
        link.href = imageUrl;
        link.download = imageUrl;
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

      return (
        <div className="flex gap-x-4">
          <Dialog>
            <DialogTrigger>
              <View className="w-6" />
            </DialogTrigger>
            <DialogContent className="max-w-5xl lg:max-w-6xl overflow-x-auto">
              <DialogHeader>
                <DialogTitle>
                  Calon baptis {row?.original?.history?.nama_lengkap}
                </DialogTitle>
                <hr className="border-t pb-4 block" />
                <div>Berikut data - data yang sudah di inputkan</div>
                <ScrollArea className="max-h-80 w-full rounded-md border p-6 overflow-x-auto">
                  <article>
                    <div className="grid grid-cols-6 lg:grid-cols-9 gap-16 relative text-black">
                      {/* bagan 1 */}
                      <div className="col-span-6 lg:col-span-3">
                        <h4 className="text-black font-semibold">Keluarga</h4>
                        <hr className="border-t block absolute w-full" />
                        <div className="flex justify-between relative before:content-[':'] before:absolute before:text-black before:z-30  before:right-[45%] mt-3.5">
                          <p>Nama Ayah</p>
                          <p>{row?.original?.history?.keluarga?.nama_ayah}</p>
                        </div>

                        <div className="flex justify-between relative before:content-[':'] before:absolute before:text-black before:z-30  before:right-[45%]">
                          <p>Nama Ibu</p>
                          <p>{row?.original?.history?.keluarga?.nama_ibu}</p>
                        </div>

                        <div className="flex justify-between relative before:content-[':'] before:absolute before:text-black before:z-30  before:right-[45%]">
                          <p>Agama Ayah</p>
                          <p>{row?.original?.history?.keluarga?.agama_ayah}</p>
                        </div>

                        <div className="flex justify-between relative before:content-[':'] before:absolute before:text-black before:z-30  before:right-[45%]">
                          <p>Agama Ibu</p>
                          <p>{row?.original?.history?.keluarga?.agama_ibu}</p>
                        </div>
                        <div className="flex justify-between relative before:content-[':'] before:absolute before:text-black before:z-30  before:right-[45%]">
                          <p>Status Pernikahan</p>
                          <p>
                            {
                              row?.original?.history?.keluarga
                                ?.status_pernikahan
                            }
                          </p>
                        </div>
                        <hr className="border-t pb-4 block" />

                        <div className="flex flex-col items-center">
                          <div className="font-semibold text-center">
                            Photo Kartu Keluarga
                          </div>

                          <Image
                            onClick={() =>
                              downloadImage(
                                row?.original?.history?.keluarga?.kartu_keluarga
                              )
                            }
                            src={
                              row?.original?.history?.keluarga?.kartu_keluarga
                            }
                            width={300}
                            height={300}
                            className="w-40 aspect-square rounded-md shadow-md cursor-pointer"
                            alt={"Photo Kartu Keluarga"}
                            style={{
                              objectFit: "cover",
                            }}
                            onError={({ target }) => {
                              target.onerror = null; // prevents looping
                              target.src = "https://i.imgur.com/jQewV47.jpeg";
                            }}
                            loading="lazy"
                          />
                        </div>
                      </div>

                      {/* bagan 2 */}
                      <div className="col-span-6 lg:col-span-6">
                        <h4 className="text-black font-semibold">
                          Data Calon Baptis
                        </h4>
                        <div className="flex justify-between relative before:content-[':'] before:absolute before:text-black before:z-30  before:right-1/2 mt-3.5">
                          <p>Nama</p>
                          <p>{row?.original?.history?.nama_lengkap}</p>
                        </div>

                        <div className="flex justify-between relative before:content-[':'] before:absolute before:text-black before:z-30  before:right-1/2">
                          <p>Tempat Lahir</p>
                          <p>{row?.original?.history?.tempat_lahir}</p>
                        </div>

                        <div className="flex justify-between relative before:content-[':'] before:absolute before:text-black before:z-30  before:right-1/2">
                          <p>Agama Ayah</p>
                          <p>{row?.original?.history?.keluarga?.agama_ayah}</p>
                        </div>

                        <div className="flex justify-between relative before:content-[':'] before:absolute before:text-black before:z-30  before:right-1/2">
                          <p>Agama Ibu</p>
                          <p>{row?.original?.history?.keluarga?.agama_ibu}</p>
                        </div>
                        <div className="flex justify-between relative before:content-[':'] before:absolute before:text-black before:z-30  before:right-1/2">
                          <p>Status Pernikahan</p>
                          <p>
                            {
                              row?.original?.history?.keluarga
                                ?.status_pernikahan
                            }
                          </p>
                        </div>
                        <hr className="border-t pb-4 block" />

                        <div className="flex justify-center md:justify-between gap-6 flex-wrap">
                          {row?.original?.history?.jenis_baptis ===
                            "DEWASA" && (
                            <div className="flex flex-col items-center">
                              <div className="font-semibold text-center">
                                Photo Surat Katekisasi
                              </div>

                              <Image
                                onClick={() =>
                                  downloadImage(
                                    row?.original?.history?.surat_katekisasi
                                  )
                                }
                                src={row?.original?.history?.surat_katekisasi}
                                width={300}
                                height={300}
                                className="w-40 aspect-square rounded-md shadow-md cursor-pointer"
                                alt={"Photo Surat Katekisasi"}
                                style={{
                                  objectFit: "cover",
                                }}
                                onError={({ target }) => {
                                  target.onerror = null; // prevents looping
                                  target.src =
                                    "https://i.imgur.com/jQewV47.jpeg";
                                }}
                                loading="lazy"
                              />
                            </div>
                          )}

                          {row?.original?.history?.jenis_baptis === "ANAK" && (
                            <div className="flex flex-col items-center">
                              <div className="font-semibold text-center">
                                Photo Surat Pembekalan Ortu
                              </div>

                              <Image
                                onClick={() =>
                                  downloadImage(
                                    row?.original?.history
                                      ?.surat_pembekalan_ortu
                                  )
                                }
                                src={
                                  row?.original?.history?.surat_pembekalan_ortu
                                }
                                width={300}
                                height={300}
                                className="w-40 aspect-square rounded-md shadow-md cursor-pointer"
                                alt={"Photo Surat Katekisasi"}
                                style={{
                                  objectFit: "cover",
                                }}
                                onError={({ target }) => {
                                  target.onerror = null; // prevents looping
                                  target.src =
                                    "https://i.imgur.com/jQewV47.jpeg";
                                }}
                                loading="lazy"
                              />
                            </div>
                          )}

                          <div className="flex flex-col items-center">
                            <div className="font-semibold text-center">
                              Photo KTP
                            </div>

                            <Image
                              onClick={() =>
                                downloadImage(row?.original?.history?.ktp)
                              }
                              src={row?.original?.history?.ktp}
                              width={300}
                              height={300}
                              className="w-40 aspect-square rounded-md shadow-md cursor-pointer"
                              alt={"Photo KTP"}
                              style={{
                                objectFit: "cover",
                              }}
                              onError={({ target }) => {
                                target.onerror = null; // prevents looping
                                target.src = "https://i.imgur.com/jQewV47.jpeg";
                              }}
                              loading="lazy"
                            />
                          </div>

                          <div className="flex flex-col items-center">
                            <div className="font-semibold text-center">
                              Photo Akte Lahir
                            </div>

                            <Image
                              onClick={() =>
                                downloadImage(
                                  row?.original?.history?.akte_lahir
                                )
                              }
                              src={row?.original?.history?.akte_lahir}
                              width={300}
                              height={300}
                              className="w-40 aspect-square rounded-md shadow-md cursor-pointer"
                              alt={"Photo Akte Lahir"}
                              style={{
                                objectFit: "cover",
                              }}
                              onError={({ target }) => {
                                target.onerror = null; // prevents looping
                                target.src = "https://i.imgur.com/jQewV47.jpeg";
                              }}
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </ScrollArea>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <DialogDelete
            title={"Are you sure want to delete this calon history baptis?"}
            description={
              "This will delete this calon history baptis permanently. You cannot undo this action."
            }
            onClick={async () => {
              try {
                const res = await clientApi.deleteCalonHistoryBaptis(
                  row?.original?.id
                );

                if (res.message) {
                  throw new Error(res?.message);
                } else {
                  toast({
                    variant: "success",
                    title: "Success",
                    description: "Calon history baptis berhasil di hapus",
                  });
                }

                router.refresh();
              } catch (error) {
                toast({
                  variant: "destructive",
                  title: "Uh oh! Something went wrong.",
                  description:
                    error?.message || "There was a problem with your request.",
                  action: (
                    <ToastAction altText="Try again">Try again</ToastAction>
                  ),
                });
              }
            }}
          />
        </div>
      );
    },
  },
];

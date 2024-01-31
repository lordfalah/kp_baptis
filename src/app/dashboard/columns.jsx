"use client";

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
import CetakPermohonan from "./(detail)/CetakPermohonan";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { clientApi } from "@/utils/actions/clientApi";

export const columnsBaptis = [
  {
    header: "No",
    cell: ({ row }) => <span className="font-medium">{row?.index + 1}</span>,
  },

  {
    accessorKey: "name",
    header: "Nama",
  },

  {
    header: "Profile",
    cell: ({ row }) => {
      return (
        <Image
          width={150}
          height={150}
          src={row?.original?.image}
          alt={row?.original?.name}
          className="w-8 h-8 aspect-square rounded-full"
          style={{ objectFit: "cover" }}
        />
      );
    },
  },

  {
    header: "Jenis Baptis",
    cell: ({ row }) => {
      return <span>{row?.original?.calon_baptis?.jenis_baptis}</span>;
    },
  },
  {
    header: "Jenis Kelamin",
    cell: ({ row }) => {
      return <span>{row?.original?.calon_baptis?.jenis_kelamin}</span>;
    },
  },
  {
    header: "Angkatan",
    cell: ({ row }) => {
      return <span>{row?.original?.calon_baptis?.angkatanSlug}</span>;
    },
  },
  {
    header: "Alamat",
    cell: ({ row }) => {
      return <span>{row?.original?.calon_baptis?.alamat_lengkap}</span>;
    },
  },

  {
    header: "TINDAKAN",
    cell: ({ row }) => {
      const { toast } = useToast();
      const queryClient = useQueryClient();

      const deleteCalonBaptis = async (id) => {
        try {
          console.log(id);
          return id;
          const req = await fetch(`/api/baptis_dewasa/${id}`, {
            method: "DELETE",
          });
          return await req.json();
        } catch (error) {}
      };

      const { mutateAsync: deleteMutate } = useMutation({
        mutationFn: deleteCalonBaptis,
        onMutate: async (id) => {
          await queryClient.cancelQueries({ queryKey: ["calon_baptis"] });
          const previousFormulirUser = queryClient.getQueryData([
            "calon_baptis",
          ]);

          queryClient.setQueryData(["calon_baptis"], () =>
            previousFormulirUser.filter((posts) => posts?.id !== id)
          );

          return { previousFormulirUser };
        },

        onSuccess: () => {
          toast({
            variant: "success",
            title: "Success",
            description: "Data Baptis berhasil di hapus",
          });
        },

        onError: (err, newTodo, context) => {
          queryClient.setQueryData(
            "calon_baptis",
            context.previousFormulirUser
          );
          queryClient.invalidateQueries({ queryKey: ["calon_baptis"] });
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description:
              err?.message || "There was a problem with your request.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        },
      });

      return (
        <div className="flex gap-x-4">
          <Dialog>
            <DialogTrigger>
              <View className="w-6" />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  Calon baptis {row?.original?.calon_baptis?.nama_lengkap}
                </DialogTitle>
                <DialogDescription>
                  <p>Berikut data - data yang sudah di inputkan</p>

                  <div className="flex gap-8 flex-wrap justify-between mt-4">
                    <div className="space-y-2.5">
                      <Image
                        src={row?.original?.calon_baptis?.ktp}
                        width={300}
                        height={300}
                        className="w-40 aspect-square rounded-md shadow-md"
                        alt={row?.original?.calon_baptis?.nama_lengkap}
                        style={{
                          objectFit: "cover",
                        }}
                      />
                      <p>Kartu Tanda Penduduk</p>
                    </div>

                    <div className="space-y-2.5">
                      <Image
                        src={row?.original?.calon_baptis?.akte_lahir}
                        width={300}
                        height={300}
                        className="w-40 aspect-square rounded-md shadow-md"
                        alt={row?.original?.calon_baptis?.nama_lengkap}
                        style={{
                          objectFit: "cover",
                        }}
                      />
                      <p>Akte Kelahiran</p>
                    </div>

                    <div className="space-y-2.5">
                      <Image
                        src={row?.original?.calon_baptis?.surat_katekisasi}
                        width={300}
                        height={300}
                        className="w-40 aspect-square rounded-md shadow-md"
                        alt={row?.original?.calon_baptis?.nama_lengkap}
                        style={{
                          objectFit: "cover",
                        }}
                      />
                      <p>Surat Katekisasi</p>
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          {/* <button
            type="button"
            onClick={async () => {
              try {
                await deleteMutate(row?.original?.calon_baptis?.id);
              } catch (error) {}
            }}
          >
            <Trash />
          </button> */}

          {/* <Dialog>
            <DialogTrigger asChild>
              <button type="button">
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>
                  Are you sure want to delete this calon baptis?
                </DialogTitle>
                <DialogDescription>
                  This will delete this calon baptis permanently. You cannot
                  undo this action.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <button
                    className="text-white bg-red-500 w-40 py-3 rounded-md font-semibold"
                    type="button"

                  >
                    Delete
                  </button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog> */}
        </div>
      );
    },
  },
];

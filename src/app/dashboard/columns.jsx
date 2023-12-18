"use client";

import View from "@/assets/icon/View";
import { Trash } from "lucide-react";
import Image from "next/image";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
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
    header: "User",
    cell: ({ row }) => {
      return (
        <Image
          width={150}
          height={150}
          src={row?.original?.user?.image}
          alt={row?.original?.user?.name}
          className="w-8 h-8 aspect-square rounded-full"
          style={{ objectFit: "cover" }}
        />
      );
    },
  },

  {
    accessorKey: "fullname",
    header: "Nama",
  },
  {
    accessorKey: "name_baptis",
    header: "Nama Baptis",
  },
  {
    accessorKey: "jenis_kelamin",
    header: "Jenis Kelamin",
  },
  {
    accessorKey: "alamat",
    header: "Alamat",
  },

  {
    accessorKey: "jenis_baptis",
    header: "Jenis Baptis",
  },

  {
    header: "TINDAKAN",
    cell: ({ row }) => {
      const { toast } = useToast();
      const queryClient = useQueryClient();

      const { mutate: deleteMutate } = useMutation({
        mutationFn: clientApi.deleteformulirBaptisUsers,
        onMutate: async (id) => {
          await queryClient.cancelQueries({ queryKey: ["formulir_user"] });
          const previousFormulirUser = queryClient.getQueryData([
            "formulir_user",
          ]);

          queryClient.setQueryData(["formulir_user"], () =>
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
            "formulir_user",
            context.previousFormulirUser
          );
          queryClient.invalidateQueries({ queryKey: ["formulir_user"] });
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
            <DialogTrigger asChild>
              <button type="button">
                <View className="w-6" />
              </button>
            </DialogTrigger>
            <CetakPermohonan data={row?.original} />
          </Dialog>

          <button type="button" onClick={() => deleteMutate(row?.original?.id)}>
            <Trash />
          </button>
        </div>
      );
    },
  },
];

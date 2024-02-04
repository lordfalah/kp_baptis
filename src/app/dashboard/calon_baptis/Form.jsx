"use client";

import { Button } from "@/components/ui/button";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

const FormCalonBaptisAdmin = () => {
  const [angkatan, setAngkatan] = useState("");
  const router = useRouter();
  const { toast } = useToast();

  const createBaptis = async (e) => {
    if (!angkatan || angkatan.length === 0) return e.preventDefault();
    try {
      const req = await fetch("/api/baptis/angkatan", {
        method: "POST",
        body: JSON.stringify({ angkatan }),
      });

      const res = await req.json();
      if (!req.ok) throw new Error(res?.message);

      toast({
        variant: "success",
        title: "Success",
        description: "Angkatan berhasil di tambah",
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
    <Dialog>
      <div className="flex justify-end ">
        <DialogTrigger className="bg-blue-600 hover:bg-blue-500 py-2 px-6 rounded-md text-white font-medium text-base">
          Buat Angkatan
        </DialogTrigger>
      </div>
      <DialogContent className="!max-w-xl">
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="angkatan" className="text-right">
              Angkatan
            </Label>
            <Input
              id="angkatan"
              value={angkatan}
              onChange={(e) => setAngkatan(e.target.value)}
              className="col-span-3"
              required
              autoComplete="off"
            />
          </div>
        </div>

        <DialogFooter className="justify-end">
          <DialogClose asChild>
            <Button
              disabled={!angkatan}
              onClick={createBaptis}
              type="button"
              className="bg-red-500"
            >
              Create
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FormCalonBaptisAdmin;

"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const InputForm = ({ onChange, form, setForm, onSubmit, title, method }) => {
  return (
    <form
      method={method}
      onSubmit={onSubmit}
      className="bg-white rounded-md text-black p-4 space-y-6"
    >
      <h1 className="text-4xl font-medium text-center">{title}</h1>

      <div className="text-lg space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-y-4 gap-x-8">
          <Label
            htmlFor="name"
            className="basis-2/5 relative after:content-[''] sm:after:content-[':'] after:absolute after:right-0"
          >
            Nama Lengkap
          </Label>
          <Input
            required
            value={form.name}
            onChange={onChange}
            type="text"
            id="name"
            name="name"
            placeholder="nama lengkap"
            className="basis-auto"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-y-4 gap-x-8 ">
          <Label
            htmlFor="name_baptis"
            className="basis-2/5 relative after:content-[''] sm:after:content-[':'] after:absolute after:right-0"
          >
            Nama Baptis
          </Label>
          <Input
            required
            value={form.name_baptis}
            onChange={onChange}
            type="text"
            id="name_baptis"
            name="name_baptis"
            placeholder="nama baptis"
            className="basis-auto"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-y-4 gap-x-8 ">
          <Label
            htmlFor="tempat_lahir"
            className="basis-2/5 relative after:content-[''] sm:after:content-[':'] after:absolute after:right-0"
          >
            Tempat Lahir
          </Label>
          <Input
            required
            value={form.tempat_lahir}
            onChange={onChange}
            type="text"
            id="tempat_lahir"
            name="tempat_lahir"
            placeholder="tempat lahir"
            className="basis-auto"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-y-4 gap-x-8 ">
          <Label
            htmlFor="tanggal_lahir"
            className="basis-2/5 relative after:content-[''] sm:after:content-[':'] after:absolute after:right-0.5"
          >
            Tanggal Lahir
          </Label>
          <div className="basis-full -ml-0.5">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !new Date(form.tanggal_lahir) && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {form.tanggal_lahir ? (
                    format(new Date(form.tanggal_lahir), "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  captionLayout="dropdown-buttons"
                  fromYear={1990}
                  toYear={2008}
                  mode="single"
                  selected={new Date(form.tanggal_lahir)}
                  onSelect={(val) =>
                    setForm((prev) => ({
                      ...prev,
                      tanggal_lahir: new Date(val).getTime(),
                    }))
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-y-4 gap-x-8 ">
          <Label
            htmlFor="name_ayah"
            className="basis-2/5 relative after:content-[''] sm:after:content-[':'] after:absolute after:right-0"
          >
            Nama ayah
          </Label>
          <Input
            required
            value={form.name_ayah}
            onChange={onChange}
            type="text"
            id="name_ayah"
            name="name_ayah"
            placeholder="nama ayah"
            className="basis-auto"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-y-4 gap-x-8 ">
          <Label
            htmlFor="name_ibu"
            className="basis-2/5 relative after:content-[''] sm:after:content-[':'] after:absolute after:right-0"
          >
            Nama Ibu
          </Label>
          <Input
            required
            value={form.name_ibu}
            onChange={onChange}
            type="text"
            id="name_ibu"
            name="name_ibu"
            placeholder="nama ayah"
            className="basis-auto"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-y-4 gap-x-8 ">
          <Label
            htmlFor="jenis_kelamin"
            className="basis-2/5 relative after:content-[''] sm:after:content-[':'] after:absolute after:right-0.5"
          >
            Jenis Kelamin
          </Label>

          <div className="basis-full -ml-0.5">
            <Select
              value={form.jenis_kelamin}
              onValueChange={(val) =>
                setForm((prev) => ({
                  ...prev,
                  jenis_kelamin: val,
                }))
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Pilih Jenis Kelamin" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Jenis Kelamin</SelectLabel>
                  <SelectItem value="PRIA">Pria</SelectItem>
                  <SelectItem value="WANITA">Wanita</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-y-4 gap-x-8 ">
          <Label
            htmlFor="jenis_baptis"
            className="basis-2/5 relative after:content-[''] sm:after:content-[':'] after:absolute after:right-0.5"
          >
            Jenis Baptis
          </Label>

          <div className="basis-full -ml-0.5">
            <Select
              required
              value={form.jenis_baptis}
              onValueChange={(val) =>
                setForm((prev) => ({ ...prev, jenis_baptis: val }))
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Pilih Jenis Baptis" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Jenis Baptis</SelectLabel>
                  <SelectItem value="ANAK">Anak</SelectItem>
                  <SelectItem value="DEWASA">Dewasa</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-y-4 gap-x-8 ">
          <Label
            htmlFor="no_anggota"
            className="basis-2/5 relative after:content-[''] sm:after:content-[':'] after:absolute after:right-0"
          >
            No Anggota
          </Label>
          <Input
            required
            value={form.kode_anggota}
            onChange={onChange}
            type="text"
            id="no_anggota"
            name="kode_anggota"
            placeholder="No Anggota"
            className="basis-auto"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-y-4 gap-x-8 ">
          <Label
            htmlFor="alamat"
            className="basis-2/5 relative after:content-[''] sm:after:content-[':'] after:absolute after:right-0"
          >
            Alamat
          </Label>

          <Textarea
            required
            value={form.alamat}
            onChange={onChange}
            type="text"
            id="alamat"
            name="alamat"
            placeholder="Alamat"
            className="basis-auto"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-y-4 gap-x-8 ">
          <Label
            htmlFor="no_hp"
            className="basis-2/5 relative after:content-[''] sm:after:content-[':'] after:absolute after:right-0"
          >
            No Telepon
          </Label>
          <Input
            required
            value={form.no_hp}
            onChange={onChange}
            type="number"
            id="no_hp"
            name="no_hp"
            placeholder="No Telepon"
            className="basis-auto"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <Button type="submit">Submit Permohonan</Button>
      </div>
    </form>
  );
};

export default InputForm;

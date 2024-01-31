"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useFormBaptis } from "@/app/context/FormBaptis";

export function Dropdown({ datas, name }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const { setForm } = useFormBaptis();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? datas.find((data) => data.value === value)?.label
            : `Select ${name}...`}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <Command>
          <CommandInput placeholder={`Search ${name}...`} />
          <CommandEmpty>No {name} found.</CommandEmpty>
          <CommandGroup>
            {datas.map((data) => (
              <CommandItem
                key={data.value}
                value={data.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  if (name.toLowerCase() === "angkatan") {
                    setForm((prev) => ({
                      ...prev,

                      angkatan: currentValue === value ? "" : currentValue,
                    }));
                  }

                  if (name.toLowerCase() === "wilayah") {
                    setForm((prev) => ({
                      ...prev,

                      calon_baptis: {
                        ...prev.calon_baptis,
                        wilayah: currentValue === value ? "" : currentValue,
                      },
                    }));
                  }
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === data.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {data.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

import { ScrollText } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Persyaratan = () => {
  return (
    <div className="py-6 space-y-4">
      <ScrollText className="w-14 h-14 stroke-1 mx-auto" />

      <div className="flex justify-between items-center gap-x-4">
        <hr className="border-muted-foreground w-full" />
        <h2 className="text-2xl font-semibold">PERSYARATAN</h2>
        <hr className="border-muted-foreground w-full" />
      </div>

      <article>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Syarat baptis dewasa</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5">
                <li>Usia minimal 18 tahun</li>
                <li>Memiliki pemahaman yang cukup tentang ajaran Kristen</li>
                <li>
                  Telah menyatakan imannya kepada Yesus Kristus secara sukarela
                </li>
                <li>Mendapat persetujuan dari orang tua atau wali</li>
                <li>
                  Memiliki wali baptis yang telah dibaptis dan menerima sakrama
                  Krisma
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Syarat baptis anak</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5">
                <li>
                  Memiliki orang tua atau wali yang telah dibaptis dan menerima
                  sakramen Krisma
                </li>
                <li>
                  Memiliki wali baptis yang telah dibaptis dan menerima sakramen
                  Krisma
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </article>
    </div>
  );
};

export default Persyaratan;

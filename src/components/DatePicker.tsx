"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export default function DatePicker({ className }: { className?: string }) {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn("justify-start text-left font-normal", !date && "text-muted-foreground", className)}
        >
          <CalendarIcon className='h-5 w-5 text-gray-400' />
          {date ? format(date, "PPP", { locale: fr }) : <span>Choisissez une date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0' align='start'>
        <Calendar mode='single' selected={date} onSelect={setDate} initialFocus locale={fr} />
      </PopoverContent>
    </Popover>
  );
}

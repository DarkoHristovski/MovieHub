import { useState } from "react";
import type { ReactNode } from "react";

type AccordionItemProps={
title:string;
children:ReactNode;
}


function AccordionItem({ title, children }:AccordionItemProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white shadow-sm">
      
      {/* Header */}
      <button
        onClick={() => setOpen(open =>!open)}
        className="flex w-full items-center justify-between px-5 py-4 text-lg font-semibold"
      >
        <span>{title}</span>
        <span
          className={`transition-transform duration-200 ${
            open ? "rotate-90" : ""
          }`}
        >
          ▶
        </span>
      </button>

      {/* Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-full opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-4 pt-2 text-gray-600">
          {children}
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;
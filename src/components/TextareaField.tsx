import { Textarea } from "@yamada-ui/react";
import React from "react";

interface TextareaFieldProps {
  id: string;
  name: string;
  placeholder: string;
  rows: number;
  required: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export function TextareaField({
  id,
  name,
  placeholder = "",
  rows = 3,
  required = false,
  value,
  onChange,
}: TextareaFieldProps) {
  return (
    <Textarea
      id={id}
      name={name}
      rows={rows}
      required={required}
      className="relative block w-full resize-none appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-lg"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default TextareaField;

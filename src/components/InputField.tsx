import { Input, VStack } from "@yamada-ui/react";
import React from "react";

interface InputFieldProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  required: boolean;
  className: string;
}

export function InputField({
  id,
  name,
  type = "text",
  placeholder = "",
  required = false,
  className = "",
}: InputFieldProps) {
  return (
    <VStack>
      <Input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={`relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-lg ${className}`}
      />
    </VStack>
  );
}

export default InputField;

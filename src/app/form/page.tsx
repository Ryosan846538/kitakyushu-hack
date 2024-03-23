import { Button } from "@yamada-ui/react";
import React from "react";
import { InputField } from "@/components/InputField";
import { TextareaField } from "@/components/TextareaField";

function FormPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            お申し込みフォーム
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <InputField
              id="company"
              name="company"
              type="text"
              required
              placeholder="会社名"
            />

            <InputField
              id="name"
              name="name"
              type="name"
              required
              placeholder="代表者名"
            />

            <InputField
              id="email"
              name="email"
              type="email"
              required
              placeholder="メールアドレス"
            />

            <TextareaField
              id="business-details"
              name="business-details"
              required
              placeholder="事業内容"
              rows={6}
            />
          </div>
          <div>
            <Button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              colorScheme="primary"
            >
              送信
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormPage;

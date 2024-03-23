import { Button } from "@yamada-ui/react";
import React, { useState } from "react";
import { InputField } from "@/components/InputField";
import { TextareaField } from "@/components/TextareaField";

interface FormData {
  company: string;
  week: string;
  activity: string;
  request: string;
  email: string;
}

// eslint-disable-next-line react/function-component-definition
const FormPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    company: "",
    week: "",
    activity: "",
    request: "",
    email: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const apiUrl = "/api/sendToSheet"; // Next.js APIルート

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) throw new Error("Failed to send data");
      const result = await response.json();
      console.log(result);
      // 成功処理: フォームクリア、通知表示など
    } catch (error) {
      console.error("Submission error:", error);
      // エラー処理: エラーメッセージ表示など
    }
  };

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
              value={formData.company}
              onChange={handleChange}
            />

            <InputField
              id="week"
              name="week"
              type="text"
              required
              placeholder="希望日程"
            />

            <TextareaField
              id="activity"
              name="activity"
              required
              placeholder="何をするか"
              rows={6}
            />

            <TextareaField
              id="request"
              name="request"
              required
              placeholder="事前の要望"
              rows={6}
            />

            <InputField
              id="email"
              name="email"
              type="email"
              required
              placeholder="メールアドレス"
            />
          </div>
          <div>
            <Button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              colorScheme="primary"
              onSubmit={handleSubmit}
            >
              送信
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPage;

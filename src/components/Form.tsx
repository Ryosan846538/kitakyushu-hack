import { Button } from "@yamada-ui/react"; // 仮のUIライブラリを想定
import React, { useState } from "react";
import { InputField, TextareaField } from "@/components/InputField"; // 仮のコンポーネントパスを想定

interface FormData {
  company: string;
  week: string;
  activity: string;
  request: string;
  email: string;
}

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
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <InputField
            id="company"
            name="company"
            type="text"
            required
            placeholder="会社名"
            value={formData.company}
            onChange={handleChange}
          />
          {/* 他のフィールドも同様に追加 */}
          <Button type="submit">送信</Button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;

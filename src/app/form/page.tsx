"use client";

import { Text, Button, Select, Option } from "@yamada-ui/react";
import React, { useState } from "react";
import { InputField } from "@/components/InputField";
import { TextareaField } from "@/components/TextareaField";

interface FormData {
  lastName: string;
  firstName: string;
  company: string;
  email: string;
  business: string;
  use_slack: boolean;
  inquiry: string;
  slack_other?: OtherStaffForm[];
}

interface OtherStaffForm {
  lastName: string;
  firstName: string;
  email: string;
}

function FormPage() {
  const [useSlack, setUseSlack] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    lastName: "",
    firstName: "",
    company: "",
    email: "",
    business: "",
    use_slack: false,
    inquiry: "",
  });
  const [otherStaffForms, setOtherStaffForms] = useState<OtherStaffForm[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (value: string) => {
    setUseSlack(value === "slack");
  };

  const handleOtherStaffFormChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    const updatedOtherStaffForms = [...otherStaffForms];
    updatedOtherStaffForms[index] = {
      ...updatedOtherStaffForms[index],
      [name]: value,
    };
    setOtherStaffForms(updatedOtherStaffForms);
  };

  const handleAddOtherStaffForm = () => {
    setOtherStaffForms([
      ...otherStaffForms,
      { lastName: "", firstName: "", email: "" },
    ]);
  };

  const handleRemoveOtherStaffForm = (index: number) => {
    const updatedOtherStaffForms = [...otherStaffForms];
    updatedOtherStaffForms.splice(index, 1);
    setOtherStaffForms(updatedOtherStaffForms);
  };

  interface ErrorData {
    error: string;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: FormData = {
      ...formData,
      use_slack: useSlack,
      slack_other: otherStaffForms,
    };
    fetch("https://jch.a.shion.pro/api/v1/inquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorData: ErrorData) => {
            // Add type to 'errorData'
            const errorMessage = errorData.error;
            throw new Error(errorMessage);
          });
        }
        return null;
      })
      .catch(() => {
        // Remove unused 'error' variable
        // Implement appropriate error handling
      });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <Text className="text-center text-3xl font-extrabold text-gray-900">
            お申し込みフォーム
          </Text>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div className="space-y-2">
              <Text>代表者名（必須）</Text>
              <div className="flex space-x-4">
                <InputField
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  placeholder="姓"
                  className="flex-1"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <InputField
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  placeholder="名"
                  className="flex-1"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <InputField
                id="company"
                name="company"
                type="text"
                required
                placeholder="会社名"
                className=""
                value={formData.company}
                onChange={handleChange}
              />
              <InputField
                id="email"
                name="email"
                type="email"
                required
                placeholder="メールアドレス"
                className=""
                value={formData.email}
                onChange={handleChange}
              />

              <TextareaField
                id="business"
                name="business"
                required
                placeholder="事業内容"
                rows={4}
                value={formData.business}
                onChange={handleChange}
              />

              <TextareaField
                id="inquiry"
                name="inquiry"
                required={false}
                placeholder="気になること"
                rows={4}
                value={formData.inquiry}
                onChange={handleChange}
              />

              <Select
                placeholder="返信オプションを選択"
                onChange={handleSelectChange}
              >
                <Option value="slack">Slack</Option>
                <Option value="email">Email</Option>
              </Select>

              <div>
                <Button
                  colorScheme="secondary"
                  size="xs"
                  onClick={handleAddOtherStaffForm}
                >
                  その他の担当者を追加
                </Button>
                {otherStaffForms.map((form, index) => (
                  <div
                    key={`${form.lastName}-${form.firstName}-${form.email}`}
                    className="mb-2"
                  >
                    <div className="flex">
                      <InputField
                        id={`otherStaffLastName-${index}`}
                        name="lastName"
                        type="text"
                        placeholder="姓"
                        required={false}
                        className="mr-2 flex-1"
                        value={form.lastName}
                        onChange={(e) => handleOtherStaffFormChange(index, e)}
                      />
                      <InputField
                        id={`otherStaffFirstName-${index}`}
                        name="firstName"
                        type="text"
                        placeholder="名"
                        required={false}
                        className="flex-1"
                        value={form.firstName}
                        onChange={(e) => handleOtherStaffFormChange(index, e)}
                      />
                    </div>
                    <InputField
                      id={`otherStaffEmail-${index}`}
                      name="email"
                      type="email"
                      placeholder="メールアドレス"
                      required={false}
                      className="flex-1"
                      value={form.email}
                      onChange={(e) => handleOtherStaffFormChange(index, e)}
                    />
                    <Button
                      colorScheme="danger"
                      size="xs"
                      onClick={() => handleRemoveOtherStaffForm(index)}
                      className="ml-auto"
                    >
                      削除
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Button
            type="submit"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            colorScheme="primary"
          >
            送信
          </Button>
        </form>
      </div>
    </div>
  );
}

export default FormPage;

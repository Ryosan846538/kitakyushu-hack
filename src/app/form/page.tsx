import React from "react";

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
            <div>
              <label htmlFor="company" className="sr-only">
                あなたの会社
                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-lg"
                  placeholder="あなたの会社"
                />
              </label>
            </div>
            <div>
              <label htmlFor="week" className="sr-only">
                希望日程
                <input
                  id="week"
                  name="week"
                  type="text"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-lg"
                  placeholder="希望日程"
                />
              </label>
            </div>
            <div>
              <label htmlFor="activity" className="sr-only">
                何をするか
                <textarea
                  id="activity"
                  name="activity"
                  required
                  className="relative block w-full resize-none appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-lg"
                  placeholder="何をするか"
                  rows="4"
                />
              </label>
            </div>
            <div>
              <label htmlFor="request" className="sr-only">
                事前の要望
                <textarea
                  id="request"
                  name="request"
                  required
                  className="relative block w-full resize-none appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-lg"
                  placeholder="事前の要望"
                  rows="4"
                />
              </label>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                メールアドレス
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-lg"
                  placeholder="メールアドレス"
                />
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              送信
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormPage;

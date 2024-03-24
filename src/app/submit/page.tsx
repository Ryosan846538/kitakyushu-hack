import { Text, Button } from "@yamada-ui/react";
import Link from "next/link";
import React from "react";

function SubmitPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-8">
      <Text fontWeight="bold" fontSize="4xl" isTruncated>
        送信されました。ご返答をお待ちください。
      </Text>
      <Link href="/">
        <Button className="px-8 py-4 text-2xl" colorScheme="success">
          Homeに戻る
        </Button>
      </Link>
    </div>
  );
}

export default SubmitPage;

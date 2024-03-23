// src/pages/api/test.ts
import type { NextApiRequest, NextApiResponse } from "next";

// レスポンスの型を定義
interface ApiResponse {
  message: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>,
) {
  if (req.method === "GET") {
    // GETリクエストの場合、簡単なメッセージを返します
    res.status(200).json({ message: "API is working!" });
  } else {
    // GET以外のリクエストに対しては、405 Method Not Allowed ステータスを返します
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

import type { NextApiRequest, NextApiResponse } from "next";

interface ApiResponse {
  status: string;
  data?: unknown;
  message?: string;
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>,
) => {
  if (req.method === "POST") {
    try {
      const scriptUrl =
        "https://script.google.com/macros/s/AKfycbx5J_jC0s1-vtuSNyUGzKFm3NjbErFV6LjznALv0nwMtGwk4HwCRtuCgmqktavVsUDpCg/exec";
      const response = await fetch(scriptUrl, {
        method: "POST",
        body: JSON.stringify(req.body),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) throw new Error("Network response was not ok");
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const resp = await response.json();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      res.status(200).json({ status: "success", data: resp });
    } catch (err) {
      res.status(500).json({ status: "error" });
    }
  } else {
    // Handle any other HTTP methods
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

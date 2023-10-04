import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const response = await fetch(
    "https://api.openai.com/v1/engines/gpt-3.5-turbo/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: req.body.prompt, max_tokens: 700 }),
    }
  );

  const data = await response.json();
  res.status(200).json(data);
}

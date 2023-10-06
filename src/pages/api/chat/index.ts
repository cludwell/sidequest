import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }
  console.log(JSON.stringify(req.body));
  const response = await fetch(
    "https://api.openai.com/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: req.body.messages
      }),
          }
  );
  const data = await response.json();
  if (response.ok) {
    res.status(200).json(data);
  } else {
    console.error("OpenAI API error:", data);
    return res.status(response.status).json(data);
  }
}

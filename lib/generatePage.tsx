import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"], // This is the default and can be omitted
});

export async function CallOpenAI(user: String) {
  const chatCompletion = await openai.chat.completions.create({
    messages: [
      { role: "user", content: `Generate a bio for a man named ${user}` },
    ],
    model: "gpt-3.5-turbo",
  });

  const res = await chatCompletion.choices[0].message.content;

  return res;
}

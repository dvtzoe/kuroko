import { generateText } from "xsai";
import { chat } from "@xsai/text-chat";

const model = chat({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1/",
  model: "deepseek/deepseek-v4.1-flash",
});

export const llm = async ({ prompt }: { prompt: string }) => {
  try {
    const response = await generateText(model, { input: prompt });

    return response.text;
  } catch (error) {
    console.error(error);

    return error;
  }
};

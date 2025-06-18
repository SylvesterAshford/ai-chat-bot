import OpenAI from "openai";

export const configureOpenAI = () => {
  return new OpenAI({
    apiKey: process.env.OPEN_AI_SECRET,
    baseURL: "https://openrouter.ai/api/v1", // important for OpenRouter
    defaultHeaders: {
      "HTTP-Referer": "http//localhost:5000", // optional but recommended
      "X-Title": "Your App Name", // optional
    },
  });
};

import { GoogleGenAI } from "@google/genai";
import { useState } from "react";

export default function useGemini() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [zeroShot, setZeroShot] = useState<string>("");
  const [fewShot, setFewShot] = useState<string>("");

  const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY,
  });

  const sendMessages = async (task: string, example?: string) => {
    setLoading(true);
    setError(null);
    setZeroShot("");
    setFewShot("");

    try {
      const createChat = () =>
        ai.chats.create({
          model: "gemini-2.5-flash",
        });

      const zeroShotChat = createChat();
      let zeroShotRes, fewShotRes;

      if (example) {
        const fewShotChat = createChat();
        [zeroShotRes, fewShotRes] = await Promise.all([
          zeroShotChat.sendMessage({ message: task }),
          fewShotChat.sendMessage({
            message: `${task}\n\nExample: ${example}`,
          }),
        ]);
        setFewShot(fewShotRes?.text ?? "");
      } else {
        zeroShotRes = await zeroShotChat.sendMessage({ message: task });
      }
      setZeroShot(zeroShotRes?.text ?? "");
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "에러가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };
  return { zeroShot, fewShot, loading, error, sendMessages };
}

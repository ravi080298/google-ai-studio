import Card from "../library/card";
import ChatPrompt from "../library/chatprompt";
import { useState } from "react";

const suggestions = [
  "Explain this code",
  "What is React server component?",
  "Generate a blog outline",
  "Refactor this function",
];

const ChatPage = () => {
  const [messages, setMessages] = useState<string[]>(suggestions);
  const [propmptvalue, setPromptValue] = useState<string>("");

  const handleSend = (msg: string) => {
    setMessages((prev) => [...prev, msg]);
  };

  const selectCard = (message: string) => {
    setPromptValue(message);
  };

  return (
    <div className="flex flex-col overflow-y-auto px-5 sm:px-8 md:px-10 lg:px-20 xl:px-32 py-6">
      <ChatPrompt onSend={handleSend} value={propmptvalue} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {messages.map((msg, i) => (
          <Card
            message={msg}
            selectCard={selectCard}
            key={i}
            className="w-full max-w-2xl"
          >
            <div className="p-4 text-sm text-gray-800 whitespace-pre-wrap">
              {msg}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ChatPage;

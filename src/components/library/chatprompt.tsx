import { useEffect, useState } from "react";
import { Send } from "lucide-react";

const ChatPrompt = ({
  onSend,
  value,
}: {
  onSend: (message: string) => void;
  value: string;
}) => {
  const [input, setInput] = useState(value || "");

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    setInput(value);
  }, [value]);

  return (
    <div className="w-full bg-white p-4 sticky bottom-0">
      <div className="flex items-end gap-2">
        <textarea
          className="w-full resize-none rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          placeholder="Send a message"
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          id="write prompt"
          name="write prompt"
        />
        <button
          onClick={handleSend}
          className="rounded-md bg-blue-600 p-2 text-white hover:bg-blue-700 transition"
          title="Send"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default ChatPrompt;

import { useState, useEffect, useRef } from "react";
import { sendMessage } from "../services/api";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const ChatBox = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const reply = await sendMessage(input);

      const aiMessage: Message = {
        role: "assistant",
        content: reply,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Server error. Please try again.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="w-[400px] h-[600px] bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden">

      {/* Header */}
      <div className="bg-green-500 text-white p-4 font-semibold text-center">
        Resume AI Assistant
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-100 space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm break-words ${
              msg.role === "user"
                ? "bg-green-500 text-white ml-auto rounded-br-none"
                : "bg-gray-300 text-black mr-auto rounded-bl-none"
            }`}
          >
            {msg.content}
          </div>
        ))}

        {loading && (
          <div className="bg-gray-300 text-black px-4 py-2 rounded-2xl rounded-bl-none text-sm w-fit">
            Typing...
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="flex p-3 border-t bg-white">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about my skills..."
          className="flex-1 px-3 py-2 border rounded-full outline-none text-sm text-black"
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="ml-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm hover:bg-green-600 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
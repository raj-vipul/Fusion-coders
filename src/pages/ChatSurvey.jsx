import React, { useState } from "react";

function ChatSurvey() {
  const [messages, setMessages] = useState([
    {
      text: "Hello, I'm here to help. How are you feeling today?",
      from: "bot",
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    setMessages([...messages, { text: input, from: "user" }]);
    setInput("");
    // Here call your backend/Gemini API to process and respond
  };

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-4">Mental Health Chat Survey</h2>
      <div className="bg-gray-100 p-4 h-80 overflow-y-scroll mb-4">
        {messages.map((msg, idx) => (
          <p
            key={idx}
            className={`my-2 ${
              msg.from === "bot" ? "text-left" : "text-right"
            }`}
          >
            {msg.text}
          </p>
        ))}
      </div>
      <div className="flex">
        <input
          className="border p-2 flex-grow"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 ml-2"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatSurvey;

"use client";

import ChatBot from "react-simple-chatbot";

function ChatUi() {
  const steps = [
    {
      id: "1",
      message: "What is your name?",
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: "Hi {previousValue}, nice to meet you!",
      end: true,
    },
  ];

  return (
    <div>
      <ChatBot
        steps={steps}
        headerTitle="ChatBot"
        floating="true"
        speaking="false"
      />
    </div>
  );
}

export default ChatUi;

"use client";

// eslint-disable-next-line import/no-extraneous-dependencies
import { grpc } from "@improbable-eng/grpc-web";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import ChatBot from "react-simple-chatbot";
import { ChatRequest, ChatResponse } from "@/pb_ts/chat";
import { OpenAIServiceClient } from "@/pb_ts/chat.client";

function getResponse(messages: string[]): ChatResponse {
  // define rpc transport
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
  const transport = grpc.CrossBrowserHttpTransport({ withCredentials: true });

  const client = new OpenAIServiceClient(transport);
  const chatRequest = new ChatRequest();
  chatRequest.setMessagesList(messages);
  return chatRequest.toObject() as ChatResponse;
}

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

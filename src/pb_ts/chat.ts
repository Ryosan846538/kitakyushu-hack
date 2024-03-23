/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "chat";

export interface ChatRequest {
  messages: string[];
}

export interface ChatResponse {
  text: string;
}

export const CHAT_PACKAGE_NAME = "chat";

export interface OpenAIServiceClient {
  streamChat(request: ChatRequest): Observable<ChatResponse>;
}

export interface OpenAIServiceController {
  streamChat(request: ChatRequest): Observable<ChatResponse>;
}

export function OpenAIServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["streamChat"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("OpenAIService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("OpenAIService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const OPEN_AI_SERVICE_NAME = "OpenAIService";

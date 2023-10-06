import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import type { formSchemaType } from "@/components/chat/ChatInput";

export const useSendMessage = () => {
  const sendMessage = async ({
    url,
    values,
  }: {
    url: string;
    values: formSchemaType;
  }) => {
    const response = axios.post(url, values);
    return response;
  };

  return useMutation(sendMessage);
};

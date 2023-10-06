"use client";
import axios from "axios";
import qs from "query-string";
import { useForm } from "react-hook-form";
import { Plus } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormControl, FormItem } from "@/components/ui/form";
import { useModal } from "@/hooks/useModalStore";
import { EmojiPicker } from "../EmojiPicker";
import { useRouter } from "next/navigation";
import { useSendMessage } from "@/hooks/useSendMessage";

type ChatInputProps = {
  apiUrl: string;
  query: Record<string, any>;
  name: string;
  type: "conversation" | "channel";
};

const formSchema = z.object({
  content: z.string().min(1),
});

export type formSchemaType = z.infer<typeof formSchema>;

export const ChatInput = ({ apiUrl, query, name, type }: ChatInputProps) => {
  const router = useRouter();
  const { onOpen } = useModal();

  const { mutateAsync } = useSendMessage();

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      content: "",
    },
    resolver: zodResolver(formSchema),
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: formSchemaType) => {
    try {
      const url = qs.stringifyUrl({
        url: apiUrl,
        query,
      });
      // await axios.post(url, values);
      mutateAsync({ url, values });
      form.reset();
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative p-4 pb-6">
                  <button
                    type="button"
                    onClick={() => onOpen("messageFile", { apiUrl, query })}
                    className="absolute top-7 left-8 h-[24px] w-[24px] bg-zinc-500 dark:bg-zinc-400 hover:bg-zinc-600 dark:hover:bg-zinc-300 transition rounded-full p-1 flex items-center justify-center"
                  >
                    <Plus className="text-white dark:text-[#313338]" />
                  </button>
                  <Input
                    autoComplete="off"
                    disabled={isLoading}
                    className="px-14 py-6 bg-zinc-200/90 dark:bg-zinc-700/75 border-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-zinc-600 dark:text-zinc-200"
                    placeholder={`Message ${
                      type === "conversation" ? name : `#${name}`
                    }`}
                    {...field}
                  />
                  {/* <div className="absolute top-7 right-8">
                    <EmojiPicker
                      onChange={(emojiData) =>
                        field.onChange(`${field.value}${emojiData.emoji}`)
                      }
                    />
                  </div> */}
                </div>
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

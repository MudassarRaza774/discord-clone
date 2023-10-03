"use client";
import PickEmoji, { Theme } from "emoji-picker-react";
import { useTheme } from "next-themes";
import { Smile } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import type { EmojiClickData } from "emoji-picker-react";

type EmojiPickerProps = {
  onChange: (value: EmojiClickData) => void;
};

const themeMapping = {
  dark: Theme.DARK,
  light: Theme.LIGHT,
  system: Theme.AUTO,
};

type themeMappingType = keyof typeof themeMapping;

export const EmojiPicker = ({ onChange }: EmojiPickerProps) => {
  const { resolvedTheme } = useTheme();

  const selectedTheme = !resolvedTheme ? "dark" : resolvedTheme;

  return (
    <Popover>
      <PopoverTrigger>
        <Smile className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition" />
      </PopoverTrigger>
      <PopoverContent
        side="right"
        sideOffset={40}
        className="bg-transparent border-none shadow-none drop-shadow-none mb-16"
      >
        <PickEmoji
          theme={themeMapping[selectedTheme as themeMappingType]}
          onEmojiClick={(emoji) => onChange(emoji)}
        />
      </PopoverContent>
    </Popover>
  );
};

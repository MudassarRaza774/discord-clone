import { Server } from "@prisma/client";
import { create } from "zustand";

export type ModalType = "createServer" | "editServer" | "invite";

type ModalData = {
  server?: Server;
};

type ModalStore = {
  data: ModalData;
  type: ModalType | null;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: ModalData) => void;
  onClose: () => void;
};

export const useModal = create<ModalStore>((set) => ({
  data: {},
  type: null,
  isOpen: false,
  onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false }),
}));

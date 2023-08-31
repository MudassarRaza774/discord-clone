"use client";
import React from "react";
import { CreateServerModal } from "../modal/CreateServerModal";
import { InviteModal } from "../modal/InviteModal";
import { EditServerModal } from "../modal/EditServerModal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <InviteModal />
      <EditServerModal />
      <CreateServerModal />
    </>
  );
};

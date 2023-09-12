"use client";
import React from "react";
import { CreateServerModal } from "../modal/CreateServerModal";
import { InviteModal } from "../modal/InviteModal";
import { EditServerModal } from "../modal/EditServerModal";
import { ManageMember } from "../modal/ManageMembers";
import { CreateChannelModal } from "../modal/CreateChannelModal";
import { LeaveServerModal } from "../modal/LeaveServerModal";
import { DeleteServerModal } from "../modal/DeleteServerModal";

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
      <ManageMember />
      <EditServerModal />
      <LeaveServerModal />
      <CreateServerModal />
      <DeleteServerModal />
      <CreateChannelModal />
    </>
  );
};

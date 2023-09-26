"use client";
import React from "react";
import { InviteModal } from "../modal/InviteModal";
import { ManageMember } from "../modal/ManageMembers";
import { EditServerModal } from "../modal/EditServerModal";
import { EditChannelModal } from "../modal/EditChannelModal";
import { LeaveServerModal } from "../modal/LeaveServerModal";
import { CreateServerModal } from "../modal/CreateServerModal";
import { DeleteServerModal } from "../modal/DeleteServerModal";
import { CreateChannelModal } from "../modal/CreateChannelModal";
import { DeleteChannelModal } from "../modal/DeleteChannelModal";

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
      <EditChannelModal />
      <LeaveServerModal />
      <CreateServerModal />
      <DeleteServerModal />
      <DeleteChannelModal />
      <CreateChannelModal />
    </>
  );
};

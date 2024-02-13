"use client";

import { useEffect, useState } from "react";
import { SettingsModal } from "@/app/(main)/_components/modals/SettingsModal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <SettingsModal />;
};

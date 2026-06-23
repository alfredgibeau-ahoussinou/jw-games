"use client";

import { useEffect } from "react";
import { useUserStore } from "@/stores/user-store";

export function SyncProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    void useUserStore.persist.rehydrate();
  }, []);

  return <>{children}</>;
}

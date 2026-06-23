"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star, Trophy, Zap } from "lucide-react";

export type ToastType = "xp" | "badge" | "level" | "info";

export interface Toast {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  icon?: string;
}

interface ToastContextValue {
  show: (toast: Omit<Toast, "id">) => void;
}

const ToastContext = createContext<ToastContextValue>({ show: () => {} });

export function useToast() {
  return useContext(ToastContext);
}

const icons = {
  xp: Zap,
  badge: Trophy,
  level: Star,
  info: Star,
};

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const show = useCallback((toast: Omit<Toast, "id">) => {
    const id = crypto.randomUUID();
    setToasts((t) => [...t, { ...toast, id }]);
    setTimeout(() => {
      setToasts((t) => t.filter((x) => x.id !== id));
    }, 4000);
  }, []);

  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      <div className="pointer-events-none fixed top-20 right-4 z-[100] flex flex-col gap-2 sm:top-24">
        <AnimatePresence>
          {toasts.map((t) => {
            const Icon = icons[t.type];
            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, x: 80, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 80, scale: 0.9 }}
                className="pointer-events-auto flex min-w-[260px] max-w-sm items-start gap-3 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] p-4 shadow-lg"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-light)]">
                  {t.icon ? (
                    <span className="text-lg">{t.icon}</span>
                  ) : (
                    <Icon className="h-5 w-5 text-[var(--accent)]" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[var(--text)]">{t.title}</p>
                  {t.message && (
                    <p className="mt-0.5 text-sm text-[var(--text-muted)]">{t.message}</p>
                  )}
                </div>
                <button
                  onClick={() => setToasts((x) => x.filter((i) => i.id !== t.id))}
                  className="text-[var(--text-dim)] hover:text-[var(--text)]"
                >
                  <X className="h-4 w-4" />
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

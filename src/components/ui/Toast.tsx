"use client";

import { createContext, useCallback, useContext, useState } from "react";

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
      <div>
        <>
          {toasts.map((t) => {
            const Icon = icons[t.type];
            return (
              <div
                key={t.id}
              >
                <div>
                  {t.icon ? (
                    <span>{t.icon}</span>
                  ) : (
                    <Icon />
                  )}
                </div>
                <div>
                  <p>{t.title}</p>
                  {t.message && (
                    <p>{t.message}</p>
                  )}
                </div>
                <button
                  onClick={() => setToasts((x) => x.filter((i) => i.id !== t.id))}
                >
                  <X />
                </button>
              </div>
            );
          })}
        </>
      </div>
    </ToastContext.Provider>
  );
}

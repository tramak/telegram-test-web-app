'use client';

import { useEffect, useState } from "react";

export const useTelegram = () => {
  const [telegram, setTelegram] = useState<any>();

  useEffect(() => {
    // if (typeof window !== 'undefined') {
    setTelegram((window as any)?.Telegram);
    // }
  }, []);

  return {
    telegram,
  }
}
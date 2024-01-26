'use client';

import {useEffect, useMemo, useState} from "react";

export const useTelegram = () => {
  const [telegram, setTelegram] = useState<any>();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTelegram((window as any)?.Telegram);
    } else {
      setTelegram({
        WebApp: {
          initDataUnsafe: {
            user: {
              username: 'error'
            }
          }
        }
      });
    }
  }, []);

  return {
    telegram,
  }
}
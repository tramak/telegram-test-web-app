'use client';

import {useEffect, useMemo, useState} from "react";

export const useTelegram = () => {
  const [telegram, setTelegram] = useState<any>();

  useEffect(() => {
    setTimeout(() => {
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
    }, 1000)
  }, []);

  return {
    telegram,
  }
}
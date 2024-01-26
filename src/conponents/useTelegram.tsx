'use client';

import {useEffect, useMemo, useState} from "react";

export const useTelegram = () => {
  const [telegram, setTelegram] = useState<any>();
  const [init, setInit] = useState(false);

  useEffect(() => {
    const update = () => {
      setTimeout(() => {
        if (typeof window !== 'undefined') {
          setTelegram((window as any)?.Telegram);
          setInit(true);
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
    }

    update();
  }, []);

  return {
    telegram,
    init,
  }
}
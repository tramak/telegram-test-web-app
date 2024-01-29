'use client';
import {useTelegram} from "@/conponents/useTelegram";
import {useEffect} from "react";

export const Close = () => {
  const { telegram } = useTelegram();
  const handlerClick = () => {
    telegram?.WebApp.close();
  };

  return (
    <div>
      Имя пользователя: {telegram?.WebApp.initDataUnsafe?.user?.username}
      <br />
      <div style={{
        maxWidth: '100%',
        wordBreak: 'break-all',
      }}>
        {JSON.stringify(telegram?.WebApp.initData!)}
      </div>

      <button onClick={handlerClick}>
        Закрыть
      </button>
    </div>
  );
}
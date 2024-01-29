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
      {JSON.stringify(telegram?.WebAp?.initData!)}

      <button onClick={handlerClick}>
        Закрыть!!
      </button>
    </div>
  );
}
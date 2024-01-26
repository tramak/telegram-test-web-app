'use client';
import {useTelegram} from "@/conponents/useTelegram";
import {useEffect} from "react";

export const Close = () => {
  const { telegram, init } = useTelegram();

  useEffect(() => {
    console.log('test!!!')
  }, []);

  const handlerClick = () => {
    telegram?.WebApp.close();
    alert('test');
  };

  return (
    <div>
      Имя пользователя: {telegram?.WebApp.initDataUnsafe?.user?.username}
      <br />

      <button onClick={handlerClick}>
        Закрыть!!
      </button>

      {init ? 'init': 'no init'}
      {JSON.stringify(telegram)}
    </div>
  );
}
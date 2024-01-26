'use client';
import {useTelegram} from "@/conponents/useTelegram";

export const Close = () => {
  const { telegram, init } = useTelegram();

  const handlerClick = () => {
    telegram?.WebApp.close();
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
'use client';
import {useTelegram} from "@/conponents/useTelegram";

export const Close = () => {
  const { telegram } = useTelegram();

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

      {JSON.stringify(telegram)}
    </div>
  );
}
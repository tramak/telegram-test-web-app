'use client';
import {useTelegram} from "@/conponents/useTelegram";
import axios from "axios";

export const Close = () => {
  const { telegram } = useTelegram();
  const handlerClick = () => {
    telegram?.WebApp.close();
  };

  const auth = () => {
    axios
      .post('http://localhost:3030/telegram/get-token', {
        telegramInitData: telegram?.WebApp.initData,
        username: telegram?.WebApp.initDataUnsafe?.user?.username,
        id: telegram?.WebApp.initDataUnsafe?.user?.id,
      })
      .then(function (response) {
        console.log(response);
      })
  }

  return (
    <div>
      Имя пользователя: {telegram?.WebApp.initDataUnsafe?.user?.username}
      <br />
      {/*<div style={{*/}
      {/*  maxWidth: '100%',*/}
      {/*  wordBreak: 'break-all',*/}
      {/*}}>*/}
      {/*  {JSON.stringify(telegram?.WebApp.initData!)}*/}
      {/*</div>*/}

      <button onClick={auth}>
        Авторизоваться
      </button>

      <button onClick={handlerClick}>
        Закрыть
      </button>
    </div>
  );
}
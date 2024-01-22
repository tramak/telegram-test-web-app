'use client';

const getTelegram = ():any => {
  return (window as any).Telegram.WebApp;
}
export const Close = () => {
  const handlerClick = () => {
    const tg = getTelegram();
    tg.close();
  };

  return (
    <button onClick={handlerClick}>
      Закрыть
    </button>
  );
}
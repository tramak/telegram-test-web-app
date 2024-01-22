'use client';

const getTelegram = ():any => {
  if (typeof(window) !== 'undefined') {
    return (window as any)?.Telegram?.WebApp;
  }

  return undefined
}
export const Close = () => {
  const tg = getTelegram();

  const handlerClick = () => {
    tg.close();
  };

  return (
    <div>
      Имя пользователя: {tg?.initDataUnsafe?.user?.username}
      <br />
      <button onClick={handlerClick}>
        Закрыть
      </button>
    </div>
  );
}
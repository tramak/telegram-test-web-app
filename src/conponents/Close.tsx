'use client';

const getTelegram = ():any => {
  try {
    if (typeof (window) !== 'undefined') {
      return (window as any)?.Telegram?.WebApp;
    }

    return undefined
  } catch (e) {
    return {
      initDataUnsafe: {
        user: {
          username: JSON.stringify(e),
        }
      },
      close: () => void 0
    }
  }
}
export const Close = () => {
  const tg = getTelegram();

  const handlerClick = () => {
    tg?.close();
  };

  return (
    <div>
      Имя пользователя: {tg?.initDataUnsafe?.user?.username}
      <br />
      {JSON.stringify(tg)}

      <button onClick={handlerClick}>
        Закрыть!
      </button>
    </div>
  );
}
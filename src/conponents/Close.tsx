'use client';

const getTelegram = ():any => {
  try {
    if (typeof (window) !== 'undefined') {
      return (window as any)?.Telegram;
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
    tg?.WebApp.close();
  };

  return (
    <div>
      Имя пользователя: {tg?.WebApp.initDataUnsafe?.user?.username}
      <br />
      {tg}

      <button onClick={handlerClick}>
        Закрыть!
      </button>
    </div>
  );
}
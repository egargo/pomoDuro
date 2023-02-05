const pomoDuroNotifyCheck = () => {
  if (Notification.permission === "granted") {
    console.log(true);
  } else {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log(`Notification: ${true}`);
      }
    });
  }
};

const pomoDuroNotify = (time: number) => {
  const HEADER = "pomoDuro";
  const icon = "https://egargocl.github.io/pomoDuro/pomoDuro.png";

  const start = () => {
    new Notification(HEADER, {
      icon: icon,
      body: `Started ${time} minute(s) task.`,
    });
  };

  const rest = () => {
    new Notification(HEADER, {
      icon: icon,
      body: `Break for ${time} minute(s).`,
    });
  };

  const end = () => {
    new Notification(HEADER, {
      icon: icon,
      body: `${time} minute(s) task ended.`,
    });
  };

  return { start, rest, end };
};

pomoDuroNotifyCheck();

export default pomoDuroNotify;

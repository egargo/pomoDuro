import pomoDuroNotify from "./notify";

let intervalID: any;

const pomoDuroTimer = (time: number, status: number) => {
  let time_title: HTMLElement | null = window.document.getElementById("time")!;
  let break_interval = JSON.parse(
    localStorage.getItem("longBreakInterval") || "4"
  );
  let shortBreak = JSON.parse(localStorage.getItem("shortBreak") || "5");
  let longBreak = JSON.parse(localStorage.getItem("longBreak") || "15");

  let timer = time * 60 - 1;

  const pomoDuroStartTimer = () => {
    let minutes = Math.floor(timer / 60);
    let seconds = timer % 60;
    let s_minutes = minutes < 10 ? `0${minutes}` : minutes;
    let s_seconds = seconds < 10 ? `0${seconds}` : seconds;

    timer -= 1;

    document.title = `${s_minutes}:${s_seconds}`;
    console.log(`${s_minutes}:${s_seconds}`);

    if (time_title !== null) time_title.innerText = `${s_minutes}:${s_seconds}`;

    if (timer === 0) {
      console.log("intervalID: ", intervalID, typeof intervalID);
      clearInterval(intervalID);
      document.title = "pmoDuro";

      if (time_title !== null) {
        time_title.innerText = time < 10 ? `0${time}:00` : `${time}:00`;
      }
    }
  };

  const resInterval = () => {
    for (let i = 0; i <= break_interval - 1; ++i) {
      if (i === break_interval - 1) {
        console.log(i, ": long break");
        intervalID = setInterval(pomoDuroStartTimer, 1000);
      } else {
        console.log(i, ": short break");
        intervalID = setInterval(pomoDuroStartTimer, 1000);
        setTimeout(intervalID, 1000 * time);
      }
    }
  };

  if (status >= 0) {
    if (status === 1) pomoDuroNotify(time).start();
    else pomoDuroNotify(time).rest();
    intervalID = setInterval(pomoDuroStartTimer, 1000);
  } else if (status === -1) {
    pomoDuroNotify(time).end();
    clearInterval(intervalID);
    document.title = "pomoDuro";
    if (time_title !== null)
      time_title.innerText = time < 10 ? `0${time}:00` : `${time}:00`;
  }
};

export default pomoDuroTimer;

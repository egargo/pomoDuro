import { useState } from "react";
import Button from "../../components/Button";
import pomoDuroTimer from "../../scripts/timer";
import "./index.scss";

const Time = (props: any) => {
  let work = JSON.parse(localStorage.getItem("pomoDuro") || "25");
  let rest = JSON.parse(localStorage.getItem("shortBreak") || "5");

  let [startButtonDisable, setStartButtonDisable] = useState(false);
  let [restButtonDisable, setRestButtonDisable] = useState(false);

  return (
    <div id="timer-container">
      <h1 id="time">{work < 10 ? `0${work}` : work}:00</h1>

      <Button
        title="START"
        id="start"
        disabled={startButtonDisable}
        onClick={() => {
          setRestButtonDisable((startButtonDisable) => !startButtonDisable);
          pomoDuroTimer(work, 1);
        }}
      />
      <Button
        title="REST"
        disabled={restButtonDisable}
        onClick={() => {
          setStartButtonDisable((startButtonDisable) => !startButtonDisable);
          pomoDuroTimer(rest, 0);
        }}
      />
      <Button
        title="STOP"
        onClick={() => {
          pomoDuroTimer(work, -1);
          setStartButtonDisable(false);
          setRestButtonDisable(false);
        }}
      />
    </div>
  );
};

export default Time;

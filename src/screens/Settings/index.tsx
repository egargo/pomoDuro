import { useEffect, useState } from "react";
import Button from "../../components/Button";
import InputField from "../../components/Input";
import year from "../../scripts/year";
import "./index.scss";

const Settings = (props: any) => {
  const [pomoDuro, setpomoDuro] = useState(() => {
    return JSON.parse(localStorage.getItem("pomoDuro") || "25");
  });

  const [shortBreak, setShortBreak] = useState(() => {
    return JSON.parse(localStorage.getItem("shortBreak") || "5");
  });

  const [longBreak, setLongBreak] = useState(() => {
    return JSON.parse(localStorage.getItem("longBreak") || "15");
  });

  const [longBreakInterval, setLongBreakInterval] = useState(() => {
    return JSON.parse(localStorage.getItem("longBreakInterval") || "4");
  });

  const handlepomoDuro = (e: any) => {
    setpomoDuro(e.target.value);
  };

  const handlerest = (e: any) => {
    setShortBreak(e.target.value);
  };

  const handleLongBreaks = (e: any) => {
    setLongBreak(e.target.value);
  };

  const handleLongBreakInterval = (e: any) => {
    setLongBreakInterval(e.target.value);
  };

  useEffect(() => {
    window.localStorage.setItem(
      "pomoDuro",
      JSON.stringify(pomoDuro === "" ? "25" : pomoDuro)
    );
    localStorage.setItem(
      "shortBreak",
      JSON.stringify(shortBreak === "" ? "5" : shortBreak)
    );
    localStorage.setItem(
      "longBreak",
      JSON.stringify(longBreak === "" ? "15" : longBreak)
    );
    localStorage.setItem(
      "longBreakInterval",
      JSON.stringify(longBreakInterval === "" ? "4" : longBreakInterval)
    );
  }, [pomoDuro, shortBreak, longBreak, longBreakInterval]);

  return (
    <>
      <div id="settings-container">
        <div id="settings">
          <Button
            style={`mini`}
            onClick={props.closeSettings}
            title="Close Settings"
          />
          <div>
            <h1>pomoDuro Settings</h1>
            <div>
              <InputField
                style={`mini`}
                type="number"
                value={pomoDuro}
                onChange={handlepomoDuro}
              />
              <label>pomoDuro</label>
            </div>
            <div>
              <InputField
                style={`mini`}
                type="number"
                value={shortBreak}
                onChange={handlerest}
              />
              <label>Short Break</label>
            </div>
            <div>
              <InputField
                style={`mini`}
                type="number"
                value={longBreak}
                onChange={handleLongBreaks}
              />
              <label>Long Break</label>
            </div>
            <div>
              <InputField
                style={`mini`}
                type="number"
                value={longBreakInterval}
                onChange={handleLongBreakInterval}
              />
              <label>Long Break interval</label>
            </div>
            <div>
              <Button
                style={`mini`}
                onClick={() => {
                  window.location.reload();
                }}
                title="Save settings"
              />
              <Button
                style={`mini`}
                onClick={() => {
                  localStorage.removeItem("pomoDuro");
                  localStorage.removeItem("rest");
                  localStorage.removeItem("longBreak");
                  localStorage.removeItem("longBreakInterval");
                  window.location.reload();
                }}
                title="Reset settings"
              />
            </div>
          </div>
          <div>
            <h1>duroList Settings</h1>
            <Button
              style={`mini`}
              onClick={() => {
                localStorage.removeItem("tasks");
                window.location.reload();
              }}
              title="Reset duroList"
            />
          </div>
          <div>
            <h1>About</h1>
            <p>
              👨‍💻 with 🤍 for 🐝
              <br />
              <a href="/">Home</a> |{" "}
              <a href="https://github.com/egargoc/pomoDuro">GitHub</a>
              <br />
              <p>2020 - {year()}</p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;

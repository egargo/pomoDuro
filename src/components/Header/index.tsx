import { useState } from "react";
import "./index.scss";
import Settings from "../../screens/Settings";
import Button from "../Button";

const SideBar = () => {
  const [isSettings, setIsSettings] = useState(false);

  const toggleSettings = () => {
    setIsSettings(!isSettings);
  };

  return (
    <>
      <div id="header-container">
        <div className="title">pomoDuro</div>
        <div className="left">
          <Button
            title="Settings"
            icon={"/pomoDuro/settings.png"}
            style={`mini`}
            onClick={toggleSettings}
          />

          {isSettings ? <Settings closeSettings={toggleSettings} /> : null}
        </div>
      </div>
    </>
  );
};

export default SideBar;

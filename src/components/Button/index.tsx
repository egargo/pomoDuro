import { ButtonTypes } from "../../types";
import "./index.scss";

const Button = (props: ButtonTypes) => {
  return (
    <>
      <button
        id="start"
        disabled={props.disabled}
        className={typeof props.style === "undefined" ? "button" : "mini"}
        onClick={props.onClick}
      >
        <>{props.title}</>
      </button>
    </>
  );
};

export default Button;

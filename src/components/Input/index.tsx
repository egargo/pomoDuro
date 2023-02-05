import "./index.scss";

const InputField = (props: any) => {
  return (
    <>
      <input
        id={typeof props.style === "undefined" ? "input" : "input-mini"}
        placeholder={props.title}
        value={props.value}
        onChange={props.onChange}
      />
    </>
  );
};

export default InputField;

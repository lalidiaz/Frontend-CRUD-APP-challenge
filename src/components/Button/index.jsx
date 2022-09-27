import "./Button.css";

export const Button = (props) => {
  return (
    <button
      type={props.type}
      className={props.color === "violet" ? "btn btn-violet" : "btn"}
      onClick={props.onClick}
      {...props}
      id="button"
    >
      {props.icon && props.icon}
      <span>{props.text}</span>
    </button>
  );
};

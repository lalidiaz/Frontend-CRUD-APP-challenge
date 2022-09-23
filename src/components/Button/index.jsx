import "./Button.css";

export const Button = ({ text, type, color, onClick, icon }) => {
  return (
    <button type={type} className={color === "violet" ? "btn btn-violet" : "btn"} onClick={onClick}>
      {icon}
      <span>{text}</span>
    </button>
  );
};

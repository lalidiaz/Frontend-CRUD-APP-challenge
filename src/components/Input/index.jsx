import "./Input.css";

export const Input = (props) => {
  return (
    <label className="input-label" htmlFor={props.htmlFor}>
      {props.label}
      <input
        type={props.type}
        name={props.name}
        required={props.required}
        {...props}
        className="input"
      />
    </label>
  );
};

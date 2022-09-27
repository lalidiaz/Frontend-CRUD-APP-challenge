import "./Field.css";

export const Field = (props) => {
  return (
    <div className="field-wrapper" {...props}>
      <p className="field-name">{props.name}</p>
      <p className="field-value">{props.value}</p>
    </div>
  );
};

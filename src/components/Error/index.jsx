import "./Error.css";

export const Error = ({ message }) => {
  return (
    <div className="error-wrapper">
      <div className="error-content">
        <p>{message}</p>
      </div>
    </div>
  );
};

import "./Login.css";

export const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="login-content">
        <form className="login-form">
          <label>
            Email
            <input type="email" />
          </label>

          <input type="submit" className="login-form-submit" />
        </form>
      </div>
    </div>
  );
};

import "./Login.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { adminLogin } from "../../store/authSlice";
import { Loading, Form, Input } from "../../components";

export const Login = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  const [errorEmpty, setErrorEmpty] = useState("");

  const handleLogIn = (e) => {
    e.preventDefault();
    setErrorEmpty("");
    const email = e.target.email.value;

    if (email) {
      dispatch(adminLogin({ email }));
    } else {
      setErrorEmpty("Please enter email");
    }
  };
  return (
    <div className="login-wrapper">
      <div className="login-content">
        {isLoading ? (
          <>
            <p>Logging in...</p>
            <Loading />
          </>
        ) : (
          <>
            <p>Please log in</p>
            <Form onSubmit={handleLogIn}>
              <Input name="email" type="email" label="Email" />
            </Form>
          </>
        )}
        {errorEmpty && <p className="error-empty-email">{errorEmpty}</p>}
      </div>
    </div>
  );
};

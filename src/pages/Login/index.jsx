import "./Login.css";
import { useSelector, useDispatch } from "react-redux";
import { adminLogin } from "../../store/authSlice";
import { Loading, Form, Input } from "../../components";

export const Login = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    if (email) {
      dispatch(adminLogin({ email }));
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
              <Input name="email" type="email" label="Email" required />
            </Form>
          </>
        )}
      </div>
    </div>
  );
};

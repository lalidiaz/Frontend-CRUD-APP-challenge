import "./UserDetails.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input, UserDetailDisplay } from "..";
import { updateUser } from "../../store/usersSlice";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AnimateRoute } from "../";

export const UserDetails = () => {
  const { data } = useSelector((state) => state.users);
  const [isEditing, setIsEditing] = useState(false);
  let navigate = useNavigate();
  const { id } = useParams();

  const user = data.find((user) => user.id === id);

  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault(e);
    const first_name = e.target.first_name.value;
    const last_name = e.target.last_name.value;
    const email = e.target.email.value;

    let id = user.id;
    if (user) dispatch(updateUser({ id, first_name, last_name, email, routeTo: navigate }));
  };

  return (
    <AnimateRoute>
      {user ? (
        <div className="user-detail-wrapper">
          <div className="user-detail-edit-container">
            <button type="button" className="btn-edit" onClick={() => setIsEditing(!isEditing)}>
              {isEditing ? "View user " : "Edit"}
            </button>
          </div>
          {isEditing ? (
            <div className="form-edit-container">
              <Form onSubmit={handleUpdate}>
                <Input type="text" name="first_name" label="First name" />
                <Input type="text" name="last_name" label=" Last name" />
                <Input type="text" name="email" label=" Email" />
              </Form>
            </div>
          ) : (
            <UserDetailDisplay user={user} />
          )}
        </div>
      ) : (
        <div className="details-select-user">
          <p>Please select a user. </p>
          <Link to="/users">Go back</Link>
        </div>
      )}
    </AnimateRoute>
  );
};

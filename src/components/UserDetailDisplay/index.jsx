import "./UserDetailDisplay.css";
import { Field } from "..";

export const UserDetailDisplay = ({ user }) => {
  return (
    <div className="user-detail">
      {user && (
        <>
          <img src={user.avatar} alt={user.name} className="user-detail-avatar" />
          <Field name="User ID" value={user.id} />
          <Field name="First name" value={user.first_name} />
          <Field name="Last name" value={user.last_name} />
          <Field name="Email" value={user.email} />
        </>
      )}
    </div>
  );
};

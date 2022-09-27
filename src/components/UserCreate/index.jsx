import "./UserCreate.css";
import { Form, Input, Modal } from "../";
import { createUser } from "../../store/usersSlice";
import { useDispatch } from "react-redux";

export const UserCreate = ({ hide }) => {
  const dispatch = useDispatch();

  const handleCreate = (e) => {
    e.preventDefault();
    const first_name = e.target.first_name.value;
    const last_name = e.target.last_name.value;
    const email = e.target.email.value;

    dispatch(createUser({ first_name, last_name, email }));
    hide();
  };
  return (
    <Modal title="Create user" hide={hide}>
      <Form onSubmit={handleCreate}>
        <Input type="text" name="first_name" label="First name" />
        <Input type="text" name="last_name" label=" Last name" />
        <Input type="text" name="email" label=" Email" />
      </Form>
    </Modal>
  );
};

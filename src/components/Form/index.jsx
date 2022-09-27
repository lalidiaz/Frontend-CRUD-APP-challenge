import "./Form.css";
import { Button } from "../";

export const Form = (props) => {
  return (
    <form className="form" onSubmit={props.onSubmit} {...props}>
      {props.children}
      <Button type="submit" text="Submit" color="violet" />
    </form>
  );
};

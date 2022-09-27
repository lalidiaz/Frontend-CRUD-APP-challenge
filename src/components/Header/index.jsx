import "./Header.css";
import { Button, UserCreate } from "../";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { MdAdd } from "react-icons/md";
import useModal from "../../hooks/useModal";

export const Header = (props) => {
  const { isShowing, toggle } = useModal();

  return (
    <header {...props}>
      <h3 className="header-title">{props.title}</h3>

      <div className="header-btn-container">
        <Button
          type="text"
          text="import"
          icon={<AiOutlineCloudUpload size={20} />}
          onClick={() => console.log("click")}
        />
        <Button
          type="text"
          text="Add user"
          icon={<MdAdd size={20} />}
          color="violet"
          onClick={toggle}
        />
      </div>

      {isShowing && <UserCreate isShowing={isShowing} hide={toggle} />}
    </header>
  );
};

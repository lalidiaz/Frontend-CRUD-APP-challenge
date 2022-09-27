import { MdMoreVert } from "react-icons/md";
import { BiUpArrowAlt } from "react-icons/bi";
import "./Card.css";

export const Card = ({ total, title, percent }) => {
  return (
    <div className="card-wrapper">
      <section className="card-left">
        <p className="card-left-title">{title}</p>
        <p className="card-left-total">{total}</p>
      </section>

      <section className="card-right">
        <div className="card-right-menu">
          <MdMoreVert />
        </div>
        <div className="card-right-percent">
          <BiUpArrowAlt /> <span>{percent}</span>
        </div>
      </section>
    </div>
  );
};

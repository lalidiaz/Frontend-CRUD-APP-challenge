import { MdMoreVert } from "react-icons/md";
import { BiUpArrowAlt } from "react-icons/bi";
import "./Card.css";

export const Card = () => {
  return (
    <div className="card-wrapper">
      <section className="card-left">
        <p className="card-left-title">Total customers</p>
        <p className="card-left-total">2,000</p>
      </section>

      <section className="card-right">
        <div className="card-right-menu">
          <MdMoreVert />
        </div>
        <div className="card-right-percent">
          <BiUpArrowAlt /> <span>20%</span>
        </div>
      </section>
    </div>
  );
};

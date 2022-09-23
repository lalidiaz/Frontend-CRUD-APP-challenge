import "./NoMatch.css";
import NotFound from "../../assets/404.png";

export const NoMatch = () => {
  return (
    <div className="not-match">
      <img src={NotFound} alt="not found" />
    </div>
  );
};

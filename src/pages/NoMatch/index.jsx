import "./NoMatch.css";
import NotFound from "../../assets/404.png";
import { Link } from "react-router-dom";

export const NoMatch = () => {
  return (
    <div className="not-match">
      <img src={NotFound} alt="not found" />
      <h3>Sorry this page doesn't exist yet ✨</h3>
      <Link to="/users" className="go-back">
        Go Back 🙈
      </Link>
    </div>
  );
};

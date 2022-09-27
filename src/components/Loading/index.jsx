import "./Loading.css";
import CircularProgress from "@mui/material/CircularProgress";

export const Loading = () => {
  return (
    <div className="loading-wrapper">
      <CircularProgress color="inherit" className="loading" />
    </div>
  );
};

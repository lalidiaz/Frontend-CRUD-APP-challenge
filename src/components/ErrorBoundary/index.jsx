import "./ErrorBoundary.css";
import React from "react";
import error from "../../assets/error.png";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-wrapper">
          <div className="error-boundary-content">
            <img src={error} alt="error page" className="error-boundary-img" />
            <h1 className="error-boundary-title">Something went wrong.</h1>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export { ErrorBoundary };

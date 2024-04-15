import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>We're sorry, the page you requested could not be found.</p>
      <button onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
};

export default NotFound;

import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "./Loader.css";
function Loader() {
  return (
    <div className="loader">
      <Spinner animation="border" role="status" variant="primary">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loader;

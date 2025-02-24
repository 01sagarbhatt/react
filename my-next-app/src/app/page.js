import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Home() {
  return (
    <div>
      <div className="container">
      <div className="row align-items-center min-vh-100">
        {/* Left Side */}
        <div className="col-md-6">
          <h1 className="fw-bold">We are Digital Agency.</h1>
          <p className="text-muted">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>

        {/* Right Side */}
        <div className="col-md-6 text-center">
          <img src="./images/1.jpg" alt="image" height="200px"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
    </div>
  );
}

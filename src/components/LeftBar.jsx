import React from "react";
import { Link } from "react-router-dom";
import "../components/css/LeftBar.css";

function LeftBar() {
  return (
    <div className="cont_leftBar ">
      <Link to="/about-us">
        <div className="left_icon_bar text-center ">
          <p>About This Project</p>
        </div>
      </Link>
    </div>
  );
}

export default LeftBar;

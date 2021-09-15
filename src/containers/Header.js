import React from "react";
import { Link } from "react-router-dom";
import '../App.css'
const Header = () => {
  return (
    <div className="ui top  inverted transparent icon menu main" id="nav">
      <div className="ui container centre">
        <div class="content">
          <div class="header">
            <Link to = {''}>
            <h2 className='header-title'>Shop Here</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

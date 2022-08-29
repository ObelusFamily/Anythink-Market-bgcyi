import React, { useState } from "react";
import logo from "../../imgs/logo.png";
import agent from "../../agent";

const Banner = (props) => {
  const [showSearch, setshowSearch] = useState(false);
  const handleSearch = (title) => {
    if (title.length < 3) {
      title = "";
    }
    props.onSearch(
      title,
      (page) => agent.Items.byTitle(title, page),
      agent.Items.byTitle(title)
    );
  };

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span onClick={() => setshowSearch(true)} id="get-part">
            A place to get
          </span>
          {showSearch ? (
            <input
              type="text"
              id="search-box"
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="What is it you truly desire?"
            />
          ) : (
            ""
          )}
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;

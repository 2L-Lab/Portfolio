import React from "react";

const SocialNetwork = () => {
  return (
    <div className="social-network">
      <ul className="content">
        <a
          href="https://www.twitter.com/2Ldev"
          target="_blanck"
          rel="noopener noreferrer"
          className="hover"
        >
          <li>
            <i className="fab fa-twitter fa-2x"></i>
          </li>
        </a>
        <a
          href="https://www.github.com/2L-Lab"
          target="_blanck"
          rel="noopener noreferrer"
          className="hover"
        >
          <li>
            <i className="fa-brands fa-github fa-2x"></i>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default SocialNetwork;

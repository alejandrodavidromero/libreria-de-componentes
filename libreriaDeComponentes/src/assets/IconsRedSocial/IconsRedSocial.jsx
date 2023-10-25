import React from "react";
import "./IconsRedSocial.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

function IconsRedSocial() {
  return (
    <div className="container">
      <ul className="wrapper">
        <li className="icon facebook">
          <span className="tooltip">Facebook</span>
          <span>
            <FontAwesomeIcon icon={faFacebookF} />
          </span>
        </li>

        <li className="icon twitter">
          <span className="tooltip">Twitter</span>
          <span>
            <FontAwesomeIcon icon={faTwitter} />
          </span>
        </li>

        <li className="icon instagram">
          <span className="tooltip">Instagram</span>
          <span>
            <FontAwesomeIcon icon={faInstagram} />
          </span>
        </li>

        <li className="icon github">
          <span className="tooltip">Github</span>
          <span>
            <FontAwesomeIcon icon={faGithub} />
          </span>
        </li>

        <li className="icon youtube">
          <span className="tooltip">Youtube</span>
          <span>
            <FontAwesomeIcon icon={faYoutube} />
          </span>
        </li>
      </ul>
    </div>
  );
}

export default IconsRedSocial;

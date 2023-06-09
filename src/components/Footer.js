import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import "../styles/Footer.css";
function Footer() {
  return (
    <div className = "footer">
        <div className ="socialMedia">
            <InstagramIcon/>
            <TwitterIcon />
            <FacebookIcon />
            <LinkedInIcon />
        </div>
        <p>&copy; 2023 Jacques LIU</p>

    </div>
  );
}

export default Footer
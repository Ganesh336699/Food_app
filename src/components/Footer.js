import {LINKEDIN_LINK} from "../config.js";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <span>  😎  </span>
      <a className="linkedin-name" href={LINKEDIN_LINK} target="_blank">
        Ganesh
      </a>
      <span> &copy; </span>
      { "  " + year + "  " } 
      <strong>
          Food   <span> Villa </span>
      </strong>
    </div>
  );
};

export default Footer;
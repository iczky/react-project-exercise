import styles from "../RecentWork.module.css";
// import linkBtn from "../../../assets/link-button.png";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { WorkInterface } from "../../../utils/project";

const Work: React.FC<WorkInterface> = ({ name, url }) => {
  return (
    <div className={styles["list-item"]}>
      <div className={styles["list-information"]}>
        <h2>{name}</h2>
        <p>
          Brand Design &nbsp;&nbsp;- &nbsp;&nbsp;Webflow Development
          &nbsp;&nbsp;-&nbsp;&nbsp; Web Design
        </p>
      </div>
      <div>
        {/* <img src={linkBtn} alt="Link Button" /> */}
        <IconContext.Provider value={{ className: styles["icon-style"] }}>
          <a href={url} target="_blank">
            <BsArrowUpRightCircleFill />
          </a>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Work;

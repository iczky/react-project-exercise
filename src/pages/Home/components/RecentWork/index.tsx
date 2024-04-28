import styles from "./RecentWork.module.css";
import Work from "./Work";
import { recentWork } from "../../../../utils/project";

const RecentWork = () => {
  return (
    <section className={styles["section-style"]}>
      <h1>Recent Work</h1>
      <div className={styles["list-container"]}>
        {recentWork.map((work, index) => (
          <Work key={index} name={work.name} url={work.url} />
        ))}
      </div>
    </section>
  );
};

export default RecentWork;

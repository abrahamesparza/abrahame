'use client';
import Projects from "./components/projects";
import styles from "./page.module.css";

export default function Home() {

  return (
    <div className={styles.container}>
        <div className={styles.body}>
            <h3 className={styles.littleName}>ABRAHAM ESPARZA</h3>
            <div className={styles.bigNameContainer}>
                <h1 className={styles.bigName}>ABRAHAM</h1>
            </div>
            <div className={styles.aboutContainer}>
                <h3 className={styles.title}>SOFTWARE ENGINEER</h3>
                <p className={styles.aboutText}>LOCATED IN CALIFORNIA.<br/>OPEN TO RELOCATION.<br/>2+ YEARS OF PROFESSIONAL EXPERIENCE.<br/>SPECIALIZING IN CRAFTING ROBUST APIs,<br/>STREAMLINING DEVOPS WORKFLOWS,<br/>AUTOMATING PROCESSES,<br/>AND BUILDING EFFICIENT ETL PIPELINES.</p>
            </div>
            <div className={styles.projects}>
                <Projects/>
            </div>
        </div>
    </div>
);
}

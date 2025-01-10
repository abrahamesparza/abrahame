'use client';
import styles from './home.module.css';

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
                    <p className={styles.aboutText}>LOCATED IN CALIFORNIA. OPEN TO RELOCATION.<br/>2+ YEARS OF PROFESSIONAL EXPERIENCE. SPECIALIZING IN CRAFTING ROBUST APIs, STEAMLINING DEVOPS WORKFLOWS, AUTOMATING PROCESSES, AND BUILDING EFFICIENT ETL PIPELINES.</p>
                </div>
            </div>
        </div>
    )
}
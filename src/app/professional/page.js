'use client';

import styles from '../page.module.css';
import Projects from '../components/projects';

import Navigation from '../components/navigation';

export default function Professional() {

    return (
        <div className={styles.container}>
            <div className={styles.body}>
                <Navigation />
                <div className={styles.bigNameContainer}>
                    <h1 className={styles.bigName}>Æ</h1>
                </div>
                <div className={styles.aboutContainer}>
                    <h3 className={styles.title}>SOFTWARE ENGINEER</h3>
                </div>
                <div className={styles.projects}>
                    <Projects/>
                </div>
            </div>
        </div>
    )
}
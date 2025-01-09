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
            </div>
        </div>
    )
}
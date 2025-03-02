'use client';

import { FaCross } from "react-icons/fa";

import styles from '../page.module.css';
import Navigation from '../components/navigation';

export default function Faith() {

    return (
        <div className={styles.container}>
            <div className={styles.body}>
                <Navigation />
                <div className={styles.crossContainer}>
                    <FaCross className={styles.cross} />
                </div>
                <div className={styles.faithContainer}>
                    <p className={styles.bibleQuote}>
                        "I can do all things through him who strengthens me."
                    </p>
                    <p>Phillipians 4:13</p>
                </div>
            </div>
        </div>
    )
};
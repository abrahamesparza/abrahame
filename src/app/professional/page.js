'use client';

import styles from '../page.module.css';
import Projects from '../components/projects';

import { IoIosArrowRoundBack } from "react-icons/io";


export default function Professional() {

    const handlePageRender = (e) => {
        const page = e.target.innerText;
        if (page === 'PROFESSIONAL') {
            router.push('/professional');
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.backButton}>
                <IoIosArrowRoundBack size={25}/>
            </div>
            <div className={styles.body}>
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
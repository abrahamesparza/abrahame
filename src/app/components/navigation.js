'use client';
import styles from './components.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Navigation () {
    const router = useRouter();
    const listOptions = ['FAITH', 'FAMILY', 'PROFESSIONAL', 'BUSINESS'];

    const handlePageRender = (e) => {
        const page = e.target.innerText;
        if (page === 'PROFESSIONAL') {
            router.push('/professional');
        }
    }

    return (
        <div>
            <ul className={styles.navList}>
                {listOptions.map((item, index) => (
                    <li className={styles.navItems} key={index} onClick={handlePageRender}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
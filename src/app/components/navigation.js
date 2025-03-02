'use client';
import styles from './components.module.css';
import { useRouter } from 'next/navigation';

export default function Navigation () {
    const router = useRouter();
    const listOptions = ['HOME', 'FAITH', 'FAMILY', 'PROFESSIONAL', 'BUSINESS'];

    const handlePageRender = (e) => {
        const page = e.target.innerText.toLowerCase();
        if (page === 'home') router.push('/');
        else {
            router.push(`/${page}`);
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
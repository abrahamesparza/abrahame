'use client';
import styles from './components.module.css';

export default function Navigation () {
    const listOptions = ['PHILEOTHEO', 'STORE'];
    return (
        <div className={styles.navigationContainer}>
            <ul>
                {listOptions.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
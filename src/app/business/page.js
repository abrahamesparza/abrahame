import styles from '../page.module.css';
import Navigation from '../components/navigation';

export default function Business() {

    return (
        <div className={styles.container}>
            <div className={styles.body}>
                <Navigation />
                <div className={styles.businessContainer}>
                    <h1>😎</h1>
                    <p>Business page is under development 👨🏽‍💻</p>
                </div>
            </div>
        </div>
    )
};
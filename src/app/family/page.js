import styles from '../page.module.css';
import Navigation from '../components/navigation';

export default function Family() {

    return (
        <div className={styles.container}>
            <div className={styles.body}>
                <Navigation />
                <div className={styles.familyContainer}>
                    <h1>👨🏽👩🏽👦🏽👧🏽</h1>
                    <p>Family page is under development 👨🏽‍💻</p>
                </div>
            </div>
        </div>
    )
};
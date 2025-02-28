'use client';
import Navigation from "./components/navigation";
import styles from "./page.module.css";
import StudiosIntroduction from "./components/studiosIntro";

export default function Home() {

  return (
    <div className={styles.container}>
        <div className={styles.body}>
            <Navigation/>
            <StudiosIntroduction />
        </div>
    </div>
);
}

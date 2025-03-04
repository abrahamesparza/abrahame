'use client';

import { useRouter } from 'next/navigation';
import styles from './components.module.css';

export default function StudiosIntroduction() {
    const router = useRouter();

    return (
        <div className={styles.introduction}>
            <div className={styles.statement}>
                <h1>
                    Esparza Studios
                </h1>
            </div>
            <div className={styles.introBody}>
                <p>
                    This site is a little bit of everything that makes me who I am. A software engineer, entrepreneur, husband, father, and a follower of Christ. It's a space where I share my work, my journey, and the things that drive me.
                </p>
                <p>
                    Whether you're here to explore my projects, connect over shared values, or learn more about my journey, I'm glad you stopped by.
                </p>
                <p>Take a look around, and freel free to <a className={styles.reachOutText} onClick={() => router.push('/contact')}>reach out</a>. I'd love to connect.</p>
            </div>
        </div>
    )
}
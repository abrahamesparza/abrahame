import styles from './components.module.css';

export default function VideoPlayer({ videoSrc }) {

    return (
        <div className={styles.videoContainer}>
            <video autoPlay muted controls>
                <source src={ videoSrc } type='video/mp4' />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}
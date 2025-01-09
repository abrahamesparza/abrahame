'use client';
import { useRouter } from "next/navigation";
import { FaPersonWalkingDashedLineArrowRight } from "react-icons/fa6";

import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();

  const routeHome = () => {
    router.push('/home');
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.name}>Abraham Esparza</h1>
      <div className={styles.buttonContainer}>
        <FaPersonWalkingDashedLineArrowRight className={styles.walkingIcon} onClick={routeHome} size={48}/>
      </div>
    </div>
  );
}

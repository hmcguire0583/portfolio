import styles from './AnimatedBackground.module.css';

const AnimatedBackground = () => {
  return (
    <div className={styles["animated-background"]}>
      <div className={styles["floating-shapes"]}>
        <div className={`${styles.shape} ${styles["shape-1"]}`}></div>
        <div className={`${styles.shape} ${styles["shape-2"]}`}></div>
        <div className={`${styles.shape} ${styles["shape-3"]}`}></div>
        <div className={`${styles.shape} ${styles["shape-4"]}`}></div>
        <div className={`${styles.shape} ${styles["shape-5"]}`}></div>
        <div className={`${styles.shape} ${styles["shape-6"]}`}></div>
      </div>
      <div className={styles["gradient-overlay"]}></div>
    </div>
  );
};

export default AnimatedBackground;
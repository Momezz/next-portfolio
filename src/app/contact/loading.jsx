import styles from '../../../public/assets/css/loading.module.css';

const Laoding = () => {
  return (
    <article className={styles.load_preview__container}>
      <div className={styles.load_preview__form}>
        <div className={`${styles.load_preview__title} ${styles.load_preview__all}`}></div>
        <div className={`${styles.load_preview__input} ${styles.load_preview__all}`}></div>
        <div className={`${styles.load_preview__input} ${styles.load_preview__all}`}></div>
        <div className={`${styles.load_preview__input} ${styles.load_preview__all}`}></div>
        <div className={`${styles.load_preview__input} ${styles.load_preview__all}`}></div>
        <div className={`${styles.load_preview__input} ${styles.load_preview__all}`}></div>
        <div className={`${styles.load_preview__button} ${styles.load_preview__all}`}></div>
      </div>
    </article>
  )
}

export default Laoding

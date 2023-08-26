import styles from '../../../public/assets/css/loading.module.css';

const Laoding = () => {
  return (
    <article className={styles.load_preview__container}>
      <div className={styles.load_preview__view_project}>
        <div className={styles.load_preview__view_project_img}></div>
        <div className={styles.load_preview__title}></div>
        <div className={styles.load_preview__view_project_cont}></div>
        <div className={styles.load_preview__view_project_cont}></div>
        <div className={styles.load_preview__view_project_cont}></div>
        <div className={styles.load_preview__view_project_button}></div>
      </div>
    </article>
  )
}

export default Laoding

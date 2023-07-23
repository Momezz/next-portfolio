import styles from './studies.module.css';
import TrainingCard from './TrainingCard';

const Studies = async () => {
  const fetchPost = () => {
    return fetch('http://localhost:8080/api/studies', { cache: 'no-store' })
      .then(res => res.json())
  }
  const posts = await fetchPost();

  return (
    <section className={styles.studies__container}>
      <h1 className={styles.studies__title}>FORMACION ACADEMICA</h1>
      <ul className={styles.studies__list}>
        {
          posts.map((value) => (
            <li className={styles.studies__link} key={value._id}>
              <TrainingCard element={value} />
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default Studies;
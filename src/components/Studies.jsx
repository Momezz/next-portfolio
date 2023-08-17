import styles from './studies.module.css';
import TrainingCard from './TrainingCard';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const Studies = async () => {
  const fetchPost = () => {
    return fetch(`${BASE_URL}api/studies`, { cache: 'no-store' })
      .then(res => res.json())
  }
  const posts = await fetchPost();

  return (
    <section className={styles.studies__container}>
      <h2 className={styles.studies__title}>FORMACION ACADEMICA</h2>
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

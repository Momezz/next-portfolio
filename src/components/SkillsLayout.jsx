import styles from './skillsLayout.module.css';
import Card from '../components/Card';

const SkillsLayout = async () => {
  const fetchPost = () => {
    return fetch('http://localhost:8080/api/skills', { cache: 'no-store' })
      .then(res => res.json())
  }
  const posts = await fetchPost();

  return (
    <section className={styles.skills_layout__container}>
      <h1 className={styles.skills_layout__title}>SIKILLS</h1>
      <ul className={styles.skills_layout__list}>
        {
          posts.map((value) => (
            <li className={styles.skills_layout__link} key={value._id}>
              <Card element={value} />
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default SkillsLayout;
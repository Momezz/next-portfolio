import styles from './skillsLayout.module.css';
import Card from '../components/Card';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const SkillsLayout = async () => {
  const fetchPost = () => {
    return fetch(`${BASE_URL}api/skills`, { cache: 'no-store' })
      .then(res => res.json())
  }
  const skills = await fetchPost();
  const skillsTechnicals = skills.filter(skill => skill.classAbility === 'TECHNICAL');
  const skillsSoft = skills.filter(skill => skill.classAbility === 'SOFT');

  return (
    <section className={styles.skills_layout__container}>
      <h1 className={styles.skills_layout__title}>Habilidades técnicas</h1>
      <ul className={styles.skills_layout__list}>
        {
          skillsTechnicals.map((value) => (
            <li className={styles.skills_layout__link} key={value._id}>
              <Card element={value} />
            </li>
          ))
        }
      </ul>
      <h1 className={styles.skills_layout__title}>Habilidades blandas</h1>
      <ul className={styles.skills_layout__list}>
        {
          skillsSoft.map((value) => (
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

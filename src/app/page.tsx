import styles from './page.module.css';
import Presentation from '../components/Presentation';
import AboutMe from '../components/AboutMe';
import SkillsLayout from '../components/SkillsLayout';
import Studies from '../components/Studies';

export default function Home() {
  return (
    <main className={styles.home_page__container}>
      <h1 className={styles.home_page__title}>Julian Gómez Mejia</h1>
      <article className={styles.home_page__presentation}>
        <Presentation />
      </article>
      <article>
        <AboutMe />
      </article>
      <section className={styles.home_page__skills_layout}>
        <SkillsLayout />
      </section>
      <Studies />
    </main>
  )
}

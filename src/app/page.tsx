import styles from './page.module.css';
import Presentation from '../components/Presentation';
import AboutMe from '../components/AboutMe';
import SkillsLayout from '../components/SkillsLayout';
import Studies from '../components/Studies';

export default function Home() {
  return (
    <main className={styles.home_page__container}>
      <Presentation />
      <AboutMe />
      <SkillsLayout />
      <Studies />
    </main>
  )
}

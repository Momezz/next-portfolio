import styles from './page.module.css';
import Image from 'next/image';
import Presentation from '../components/Presentation';
import AboutMe from '../components/AboutMe';
import SkillsLayout from '../components/SkillsLayout';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className={styles.page__container}>
        <Presentation />
        <AboutMe />
        <SkillsLayout />
      </section>
    </main>
  )
}
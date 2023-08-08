import styles from './portfolio.module.css';
import ProyectLayout from '../../components/ProyectsLayout';

const Portfolio = () => {
  return (
    <main className={styles.portfolio__container}>
      <ProyectLayout />
    </main>
  )
}

export default Portfolio;

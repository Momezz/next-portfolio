import styles from './proyectsLayout.module.css';
import ProyectCard from './ProyectCard';

const ProyectsLayout = async () => {
  const fetchProyects = () => {
    return fetch('http://localhost:8080/api/proyects', { cache: 'no-store' })
      .then(res => res.json())
  }
  const posts = await fetchProyects();

  return (
    <section className={styles.proyects_layout__container}>
      <h1 className={styles.proyects_layout__title}>Mis proyectos</h1>
      <ul className={styles.proyects_layout__list}>
        {
          posts.map((value) => (
            <li className={styles.proyects_layout__link} key={value._id}>
              <ProyectCard element={value} />
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default ProyectsLayout;
import styles from './proyectsLayout.module.css';
import ProyectCard from './ProyectCard';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const ProyectsLayout = async () => {
  const fetchProyects = () => {
    return fetch(`${BASE_URL}api/proyects`, {
      cache: "no-store",
    }).then((res) => res.json());
  };
  const posts = await fetchProyects();

  return (
    <section className={styles.proyects_layout__container}>
      <h2 className={styles.proyects_layout__title}>Mis proyectos</h2>
      <ul className={styles.proyects_layout__list}>
        {posts.map((value, index) => (
          <li className={styles.proyects_layout__link} key={value._id}>
            <ProyectCard element={value} index={index} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProyectsLayout;

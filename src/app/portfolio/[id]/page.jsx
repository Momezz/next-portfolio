import styles from '../id.module.css';

const SingleProyect = async ({ params }) => {
  const { id } = params;
  const fetchProyect = () => {
    return fetch(`http://localhost:8080/api/proyects/${id}`)
      .then(res => res.json())
  }

  const proyect = await fetchProyect();
  return (
    <section className={styles.single_proyect__container}>
      <h1 className={styles.single_proyect__title}>SingleProyect No {id}</h1>
      <h2 className={styles.single_proyect__title}>Title{proyect.title}</h2>
    </section>
  )
}

export default SingleProyect;
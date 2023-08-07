import styles from './id.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Carousel from '../../../components/Carousel';

const SingleProyect = async ({ params }) => {
  const { id } = params;
  const fetchProyect = () => {
    return fetch(`http://localhost:8080/api/proyects/${id}`).then((res) =>
      res.json()
    );
  };

  const proyect = await fetchProyect();
  return (
    <section className={styles.single_proyect__container}>
      <div className={styles.single_proyect__link_cont}>
        <Link
          className={styles.single_proyect__link}
          href={'/portfolio/'}
        >
          &lt;&lt;
        </Link>
      </div>
      <h2 className={styles.single_proyect__title}>{proyect.title}</h2>
      <div className={styles.single_proyect__sub_container}>
        <div className={styles.single_proyect__carousel}>
          <Carousel images={proyect.images} />
        </div>
        <div>
          <ul className={styles.single_proyect__logos_list}>
            {proyect.technologies.map((logo, index) => (
              <li key={index}>
                <Image
                  className={styles.single_proyect__logo}
                  src={logo}
                  alt="image"
                  width={110}
                  height={120}
                  priority
                />
              </li>
            ))}
          </ul>
        </div>
        <ul className={styles.single_proyect__description}>
          {proyect.description.map((item) => (
            <li className={styles.single_proyect__item} key={item._id}>{item}</li>
          ))}
        </ul>
        <div className={styles.single_proyec__cont_btns}>
          <div className={styles.single_proyec__btn}>
            <a
              className={styles.single_proyec__a}
              href={proyect.repositoryLink}
              target="_blank"
            >
              Repositorio
            </a>
          </div>
          <div className={styles.single_proyec__btn}>
            <a
              className={styles.single_proyec__a}
              href={proyect.pageLink}
              target="_blank"
            >
              Ver demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProyect;

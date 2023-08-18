import styles from './resume.module.css';
import Image from 'next/image';

const Resume = () => {
  
  return (
    <article className={styles.resume__container}>
      <div className={styles.resume__image_cont}>
        <div className={styles.resume__pdf_cont}>
          <a
            className={styles.resume__pdf_btn}
            target="_blank"
            href="https://drive.google.com/file/d/1kDdIoTDSXGJV49T8tQuvqq-wGdV8b72y/view?usp=drive_link"
          >
            {" "}
            Ver en PDF
          </a>
        </div>
        <div className={styles.resume__image_container}>
          <Image
            className={styles.resume__image}
            src="https://tse4.explicit.bing.net/th?id=OIP.lxGrRREqByKPrMOc5TiNKwHaGK&pid=Api&P=0&h=180"
            alt="image"
            width={110}
            height={120}
            priority
          />
        </div>
        <h2 className={styles.resume__contact_title}>Contáctame</h2>
        <ul className={styles.resume__contac_list}>
          <li className={styles.resume__contac_item}>
            <h3>Celular</h3>
            <p>+57 3007787096</p>
          </li>
          <li className={styles.resume__contac_item}>
            <h3>Email</h3>
            <a
              className={styles.resume__link}
              href="mailto:juliangomezmejia@icloud.com"
            >
              juliangomezmejia@icloud.com
            </a>
            <br></br>
            <a
              className={styles.resume__link}
              href="mailto:julgomez14@gmail.com"
            >
              julgomez14@gmail.com
            </a>
          </li>
          <li className={styles.resume__contac_item}>
            <h3>Ubicación</h3>
            <p>Medellín, Colombia</p>
          </li>
        </ul>
        <h2 className={styles.resume__contact_title}>Links</h2>
        <ul className={styles.resume__contac_list}>
          <li className={styles.resume__contac_item}>
            <a
              className={styles.resume__link}
              target="_blank"
              href="https://www.linkedin.com/in/juliangomezmejiamedellin/"
            >
              LinkedIn
            </a>
          </li>
          <li className={styles.resume__contac_item}>
            <a
              className={styles.resume__link}
              target="_blank"
              href="https://github.com/Momezz"
            >
              Git
            </a>
          </li>
        </ul>
        <h2 className={styles.resume__contact_title}>Competencias</h2>
        <ul className={styles.resume__skills}>
          <li className={styles.resume__contac_item}>
            <label className={styles.resume__label_skill} for="progress">
              SCRUM:
            </label>
            <progress
              className={styles.resume__progress_skill}
              id="progress"
              max="100"
              value="75"
            ></progress>
          </li>
          <li className={styles.resume__contac_item}>
            <label className={styles.resume__label_skill} for="progress">
              JavaScript:
            </label>
            <progress
              className={styles.resume__progress_skill}
              id="progress"
              max="100"
              value="70"
            ></progress>
          </li>
          <li className={styles.resume__contac_item}>
            <label className={styles.resume__label_skill} for="progress">
              Node.js:
            </label>
            <progress
              className={styles.resume__progress_skill}
              id="progress"
              max="100"
              value="60"
            ></progress>
          </li>
          <li className={styles.resume__contac_item}>
            <label className={styles.resume__label_skill} for="progress">
              MongoDB:
            </label>
            <progress
              className={styles.resume__progress_skill}
              id="progress"
              max="100"
              value="65"
            ></progress>
          </li>
          <li className={styles.resume__contac_item}>
            <label className={styles.resume__label_skill} for="progress">
              Express:
            </label>
            <progress
              className={styles.resume__progress_skill}
              id="progress"
              max="100"
              value="75"
            ></progress>
          </li>
          <li className={styles.resume__contac_item}>
            <label className={styles.resume__label_skill} for="progress">
              git / github:
            </label>
            <progress
              className={styles.resume__progress_skill}
              id="progress"
              max="100"
              value="80"
            ></progress>
          </li>
          <li className={styles.resume__contac_item}>
            <label className={styles.resume__label_skill} for="progress">
              React:
            </label>
            <progress
              className={styles.resume__progress_skill}
              id="progress"
              max="100"
              value="75"
            ></progress>
          </li>
          <li className={styles.resume__contac_item}>
            <label className={styles.resume__label_skill} for="progress">
              CSS:
            </label>
            <progress
              className={styles.resume__progress_skill}
              id="progress"
              max="100"
              value="70"
            ></progress>
          </li>
          <li className={styles.resume__contac_item}>
            <label className={styles.resume__label_skill} for="progress">
              HTML:
            </label>
            <progress
              className={styles.resume__progress_skill}
              id="progress"
              max="100"
              value="85"
            ></progress>
          </li>
        </ul>
      </div>
      <div className={styles.resume__text_cont}>
        <h1 className={styles.resume__title}>JULIAN GOMEZ MEJIA</h1>
        <h2 className={styles.resume__subtitle}>
          D E S A R R O L L A D O R W E B F U L L S T A C K
        </h2>
        <br />
        <h2 className={styles.resume__subtitle_blue}>Perfil profesional</h2>
        <p>
          Desarrollador Full Stack con experiencia desarrollando Single-Page
          Applications. Tengo comprensión de las tecnologías front-end, como
          HTML, CSS, JavaScript, y framework como React, y en el lado del
          back-end con Express, TypeScript, Node.js, MongoDb con la librería
          Mongoose, Soy un profesional creativo, eficiente, me gusta trabajar en
          equipo y tengo una actitud proactiva en la realización de mi trabajo.
        </p>
        <br />
        <h2 className={styles.resume__subtitle_blue}>Experiencia laboral</h2>
        <h3>Desarrollador Web Full Stack , Make It Real</h3>
        <span>Oct 2022 — Feb 2023 Medellín</span>
        <p>
          Adquirí experiencia en el desarrollo de Single-page applications,
          trabajo colaborativo y remoto. Me enfoqué en el diseño y la usabilidad
          de las páginas, usando principalmente React, JavaScript, TypeScript,
          MongoDB, Express, Node.js. A lo largo de mi experiencia tuve que
          solucionar problemas técnicos en el desarrollo de las páginas web,
          como problemas en despliegue y errores de código. Aprendí a ser
          metódico y minucioso para encontrar y solucionar problemas de manera
          eficiente.
        </p>
        <p>
          <a
            className={styles.resume__link_proyect}
            target="_blank"
            href="https://frontend-hotel-booking-ashy.vercel.app/"
          >
            Hotel-booking
          </a>
          <span>App para buscar, y reservar hoteles</span>
        </p>
        <p>
          <a
            className={styles.resume__link_proyect}
            target="_blank"
            href="https://restaurant-page-delta.vercel.app/"
          >
            Restaurant-page
          </a>
          <span>MVP Para solicitar servicios de restaurante</span>
        </p>
        <br />
        <h2 className={styles.resume__subtitle_blue}>Formación</h2>
        <h3>Full stack developer, Make It Real</h3>
        <span>Oct 2022 — Feb 2023 Medellín</span>
        <p>
          Trabajamos de manera remota desarrollando proyectos con metodología
          SCRUM además de recibir formación en temas cómo habilidades blandas e
          Idiomas
        </p>
        <h3 className={styles.resume__}>
          Software developer, Universidad Pontificia Bolivariana
        </h3>
        <span>Mar 2021 — Dic 2021 Medellín</span>
        <p>
          Fue un curso patrocinado por el programa MISION-TIC 2021 donde aprendí
          fundamentos de Python, Java, JavaScript, desarrollo web, MongoDB,
          Node.js, express, git y SCRUM
        </p>
      </div>
    </article>
  );
};

export default Resume;

import styles from './aboutMe.module.css';

const AboutMe = () => {
  return (
    <article className={styles.about_me__container}>
      <p className={styles.about_me__paragraph}>
        Soy un desarrollador web con conocimientos y experiencia en HTML, CSS,
        JavaScript, MongoDB, TypeScript, NodeJS, Git / GitHub, y frameworks como
        React, Next.js y Express. Estoy constantemente actualizando mis habilidades para
        mantenerme al día con las últimas tendencias y herramientas en el
        desarrollo web. Me caracterizo por ser una persona responsable, y con
        alta disposición en la realización de mi trabajo. Disfruto las labores
        que representan un reto para mí y que me ofrecen la posibilidad de
        desarrollarme a nivel personal y laboral
      </p>
    </article>
  )
}

export default AboutMe;

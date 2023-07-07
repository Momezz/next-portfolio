import styles from './aboutMe.module.css';

const AboutMe = () => {
    return (
        <article className={styles.about_me__container}>
            <h2 className={styles.about_me__title}>About me</h2>
            <p className={styles.about_me__paragraph}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eligendi error voluptates, reiciendis animi explicabo placeat at numquam accusantium vel veritatis quo iste ipsa, dolore doloremque dolorem voluptatum nobis deleniti.
            </p>
        </article>
    )
}

export default AboutMe;
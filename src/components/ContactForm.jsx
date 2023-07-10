import styles from "../components/contactactForm.module.css";

const ContactForm = () => {
    return(
        <article className={styles.contact_form__container}>
            <h2>Contactame</h2>
            <p>
                ¿Quieres contactarme?<br/>
                Completa el siguiente formulario y me pondré en contacto con tigo lo antes posible
            </p>
            <form className={styles.contact_form__form}>
               <input className={styles.contact_form__input} placeholder="Nombre" />
                <input className={styles.contact_form__input} placeholder="E-mail" />
                <input className={styles.contact_form__input} placeholder="Asunto" />
                <textarea maxlength="500" className={styles.contact_form__input} placeholder="Mensaje" />
            </form>
            <button className={styles.contact_form__btn}>Enviar mensaje</button>
        </article>
    )
}

export default ContactForm;
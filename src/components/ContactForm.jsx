"use client";

import styles from "../components/contactactForm.module.css";
import { useDispatch } from 'react-redux';
import useForm from '../redux/hooks'
import { createMessage } from "../redux/features/message/messageSlice";

const ContactForm = () => {
  const { form, handleChange } = useForm({});
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(createMessage(form));      
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <article className={styles.contact_form__container}>
      <h2>Contactame</h2>
      <p>
        ¿Quieres contactarme?
        <br />
        Completa el siguiente formulario y me pondré en contacto con tigo lo
        antes posible
      </p>
      message
      <form onSubmit={handleSubmit} className={styles.contact_form__form} id="form-menu">
        <input
          type="text"
          className={styles.contact_form__input}
          onChange={handleChange}
          id="name"
          name="name"
          placeholder="Nombre"
          required
        />
        <input
          type="email"
          className={styles.contact_form__input}
          onChange={handleChange}
          id="email"
          name="email"
          placeholder="E-mail"
          required
        />
        <input
          type="text"
          className={styles.contact_form__input}
          onChange={handleChange}
          id="subject"
          name="subject"
          placeholder="Asunto"
          required
        />
        <textarea
          type="text"
          maxlength="500"
          className={styles.contact_form__input}
          onChange={handleChange}
          id="message"
          name="message"
          placeholder="Mensaje"
          required
        />
        <button type="submit" className={styles.contact_form__btn}>
          Enviar mensaje
        </button>
      </form>
    </article>
  );
};

export default ContactForm;

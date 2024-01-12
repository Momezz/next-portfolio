"use client";

import styles from '../components/contactactForm.module.css';
import { useState } from 'react';
import SuccesForm from './SuccessForm';
import SendingForm from './SendingForm';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { sendMail } from '../services/messages'

const ContactForm = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState('');
  const [loading, setLoading] = useState(false);
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "El nombre es muy corto")
      .max(35, "El nombre es muy largo")
      .required("El campo nombre es obligatorio"),
    email: Yup.string().email("Correo electronico invalido").required(),
    subject: Yup.string()
      .max(55, "El asunto es muy largo")
      .required("El campo asunto es obligatorio"),
    message: Yup.string()
      .max(1000, "El mensaje es muy largo")
      .required("El campo mensaje es obligatorio"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      if (values) {
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
          setIsFormSubmitted(true);
        }, 2000);
      }
      try {
        const res = await sendMail(values);
      } catch (error) {
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
          setIsFormSubmitted(false);
        }, 2000);
      }
    },
  });

  return (
    <article className={styles.contact_form__container}>
      {
        loading ?
          <div className={styles.contact_form__success}>
            <SendingForm />
          </div>
          :
          <div
            className={
              typeof isFormSubmitted === "boolean"
                ? styles.contact_form__success
                : styles.contact_form__success_none
            }
          >
            <SuccesForm value={isFormSubmitted} />
          </div>
      }
      <h2 className={styles.contact_form__title}>Contactame</h2>
      <p className={styles.contact_form__paragraph}>
        ¿Quieres contactarme?
        <br />
        Completa el siguiente formulario y me pondré en contacto con tigo lo
        antes posible
      </p>
      <form
        onSubmit={formik.handleSubmit}
        className={styles.contact_form__form}
        id="form-menu"
      >
        <input
          type="text"
          className={styles.contact_form__input}
          onChange={formik.handleChange}
          id="name"
          name="name"
          placeholder="Nombre"
          required
        />
        <div className={styles.contact_form__error}>
          {formik.errors.name && formik.touched.name ? formik.errors.name : ""}
        </div>
        <input
          type="email"
          className={styles.contact_form__input}
          onChange={formik.handleChange}
          id="email"
          name="email"
          placeholder="E-mail"
          required
        />
        <div className={styles.contact_form__error}>
          {formik.errors.email && formik.touched.email
            ? formik.errors.email
            : ""}
        </div>
        <input
          type="text"
          className={styles.contact_form__input}
          onChange={formik.handleChange}
          id="subject"
          name="subject"
          placeholder="Asunto"
          required
        />
        <div className={styles.contact_form__error}>
          {formik.errors.subject && formik.touched.subject
            ? formik.errors.subject
            : ""}
        </div>
        <textarea
          type="text"
          maxLength="500"
          className={`${styles.contact_form__textarea} ${styles.contact_form__input}`}
          onChange={formik.handleChange}
          id="message"
          name="message"
          placeholder="Mensaje"
          required
        />
        <div className={styles.contact_form__error}>
          {formik.errors.message && formik.touched.message
            ? formik.errors.message
            : ""}
        </div>
        <div className={styles.contact_form__cont_btn}>
          <button type="submit" className={styles.contact_form__btn}>
            Enviar mensaje
          </button>
        </div>
      </form>
    </article>
  );
};

export default ContactForm;

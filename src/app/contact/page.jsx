import ContactForm from '../../components/ContactForm';
import styles from './cotact.module.css';
import { Suspense } from 'react';

const Contact = () => {
  return (
    <section className={styles.contac__container}>
      <Suspense fallback={<p>Enviando...</p>}>
        <ContactForm />
      </Suspense>
    </section>
  )
}

export default Contact;

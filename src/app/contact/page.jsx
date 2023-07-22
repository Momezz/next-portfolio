import ContactForm from '../../components/ContactForm';
import styles from './cotact.module.css';

const Contact = () => {
    return (
        <section className={styles.contac__container}>
            <ContactForm />
        </section>
    )
}

export default Contact;
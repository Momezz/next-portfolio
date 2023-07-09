import styles from "../components/proyectCard.module.css";
import Image from "next/image";

const ProyectCard = () => {
    return (
        <article className={styles.proyect_card__container}>
            <h2>Experiencia profesional</h2>
            <div>
                <Image className={styles.proyect_card__img} src='https://tse1.mm.bing.net/th?id=OIP.hxVdqWW-fYoBZbRDI6cZzwHaEQ&pid=Api&P=0&h=180' alt="image" width={110} height={120} priority />
            </div>
            <div className={styles.proyect_card__text}>
                <h2 className={styles.proyect_card__title}>Encriptador de texto</h2>
                <p className={styles.proyect_card__paragraph}>Challenge Oracol</p>
                <div className={styles.proyect_card__cont_btns}>
                    <button className={styles.proyect_card__btn_left + ' ' + styles.proyect_card__btn}>Repositorio</button>
                    <button className={styles.proyect_card__cont_right + ' ' + styles.proyect_card__btn}>Ver demo</button>
                </div>
            </div>
        </article>
    )
}

export default ProyectCard;
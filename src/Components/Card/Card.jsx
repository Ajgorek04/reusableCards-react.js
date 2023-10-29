import styles from "./Card.module.css";

export function Card({ name, img, text, link }) {
    return (
        <div className={styles.card}>
            <header>
                <img src={img} alt="image" />
                <p>September 10.2023</p>
            </header>
            <div className={styles.textContent}>
                <h1>{name}</h1>
                <p>{text}</p>
            </div>
            <div className={styles.learnMore}>
                <h2>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        Learn More
                    </a>
                </h2>
            </div>
        </div>
    );
}

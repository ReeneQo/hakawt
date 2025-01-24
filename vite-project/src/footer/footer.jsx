import styles from "../footer/footer.module.css";


export function Footer() {
    return (
    <footer className={styles.footer_main}>
    <div className={styles.footer_flexbox}>
        <div className={styles.form_text}>
            <h3 className={styles.footer_h3}>Contact us:</h3>
            <p>Email: garagegenius@gmail.com</p>
            <p>phone: +7 901 588 1244</p>
            <p>Address: Moscow City</p>
        </div>
    </div>
    <hr></hr>
    <p className={styles.form_copyright}>&copy; 2024 Garage Genius. All Rights Reserved</p>
    </footer>
    )
}
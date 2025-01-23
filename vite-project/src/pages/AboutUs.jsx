import styles from './AboutUs.module.css'
import { Github } from 'lucide-react';

export function AboutUs(){
    return <div>
        <header>
            <div className={styles.head}>
            <img className={styles.posimg} src='/Logo.svg' alt="" />
            <nav className={styles.nav}>
                <ul className={styles.spisok}>
                    <li className={styles.li}>About us</li>
                    <li className={styles.li}>Developers</li>
                </ul>
                <button className={styles.button}> <Github/> GitHub </button> 
            </nav>
            </div>
        </header>
        <section className={styles.main}>
                <div className={styles.main_conteiner}>
                    <h1 className={styles.h1}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing.
                    </h1>
                    <p className={styles.main_text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nisi veritatis aliquid. Obcaecati, veniam, error quasi molestias repellat voluptates numquam totam libero sint nostrum, hic quam vitae excepturi architecto provident!
                    </p>
                </div>
                <div>
                    <img className={styles.image_main} src="Illustration.svg" alt="" />
                </div>
        </section>
    </div>
}
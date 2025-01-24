import { Github } from 'lucide-react';
import styles from './home.module.css'
import { Link } from 'react-router-dom';
import {ButtonCourse} from '../components/ButtonCourse/ButtonCourse.jsx'
import {Footer} from "../footer/footer.jsx"


export function Home(){
    return <div>
        <header>
            <div className={styles.head}>
            <img className={styles.posimg} src='/Logo.svg' alt="" />
            <nav className={styles.nav}>
                <ul className={styles.spisok}>
                    <li className={styles.li}><Link to='/'>Home</Link></li>
                    <li className={styles.li}><Link to='/About'>About us</Link></li>
                    <li className={styles.li}><Link to='/Developers'>Developers</Link></li>
                    <li className={styles.li}><Link to='/CardsTemp'>fggfgf</Link></li>
                </ul>
                <button className={styles.button} onClick={() => {window.open('https://github.com/ReeneQo/hakawt', '_blank')}}> <Github/> GitHub </button> 
            </nav>
            </div>
        </header>

        <section className={styles.main}>
                <div className={styles.main_conteiner}>
                    <h1 className={styles.h1}>
                        На нашем сайте вы можете выбрать курс обучения и получить материалы по предметам.
                    </h1>
                    <p className={styles.main_text}>
                    Каждый курс включает в себя разнообразные предметы, которые помогут вам глубже понять предмет и подготовят вас к реальным вызовам в профессиональной среде. Выбирайте предметы, которые соответствуют вашим интересам и целям!
                    </p>
                    <ButtonCourse/>
                </div>
                <div className={styles.main__image}>
                    <img className={styles.image_main} src="Illustration.svg" alt="" />
                </div>
        </section>
        <Footer/>
    </div>
}


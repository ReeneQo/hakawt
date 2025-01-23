import { Github, Link } from 'lucide-react';
import styles from './home.module.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
    


export function Home(){
    const handleButtonClick = () => {
        window.location.href = 'https://github.com/ReeneQo/hakawt'; 
      };
    return <div>
        <header>
            <div className={styles.head}>
            <img className={styles.posimg} src='/Logo.svg' alt="" />
            <nav className={styles.nav}>
                <ul className={styles.spisok}>
                    <li className={styles.li}>Home</li>
                    <li className={styles.li}>About us</li>
                    <li className={styles.li}>Developers</li>
                </ul>
                <button className={styles.button} onClick={handleButtonClick}> <Github/> GitHub </button> 
            </nav>
            </div>
        </header>
        
        <section className={styles.main}>
                <div className={styles.main_conteiner}>
                    <h1 className={styles.h1}>
                        На нашем сайте вы можете выбрать курс обучения и получить материалы по предметам.
                    {/* В нашем колледже мы предлагаем широкий выбор курсов, которые помогут вам развить необходимые навыки и знания для успешной карьеры в выбранной вами области */}
                    </h1>
                    <p className={styles.main_text}>
                    Каждый курс включает в себя разнообразные предметы, которые помогут вам глубже понять предмет и подготовят вас к реальным вызовам в профессиональной среде. Выбирайте предметы, которые соответствуют вашим интересам и целям!
                    </p>
                    <button className={styles.button_course}>Выбери курс</button>
                </div>
                <div className={styles.main__image}>
                    <img className={styles.image_main} src="Illustration.svg" alt="" />
                </div>
        </section>
    </div>
}
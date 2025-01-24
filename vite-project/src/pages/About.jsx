import { Github } from 'lucide-react';
import styles from '../header/home.module.css'
import style from "../pages/AboutUs.module.css"
import { Link } from 'react-router-dom';
import {Footer} from "../footer/footer.jsx"

export function About() {
    const handleButtonClick = () => {
        window.location.href = 'https://github.com/ReeneQo/hakawt'; 
      };
    return <div className={style.head_general}>
        <header>
            <div className={styles.head}>
            <img className={styles.posimg} src='/Logo.svg' alt="" />
            <nav className={styles.nav}>
            <ul className={styles.spisok}>
                <li className={styles.li}><Link to='/'>Home</Link></li>
                <li className={styles.li}><Link to='/About'>About us</Link></li>
                <li className={styles.li}><Link to='/Developers'>Developers</Link></li>
                
            </ul>
                <button className={styles.button} onClick={handleButtonClick}> <Github/> GitHub </button> 
            </nav>
            </div>
        </header>
        <section className={style.about_main}>
            <div className={style.about_flex}>
            <div className={style.about_text}>
            <h1 className={style.about_h1}>About us</h1>
            <p>Привет! Мы — команда из пяти студентов второго курса Хекслет колледжа, и мы рады представить вам наш проект. Наша история началась всего несколько месяцев назад, когда некоторые из нас впервые познакомились с версткой в сентябре 2024 года. С тех пор мы прошли удивительный путь, полный открытий, трудностей и, конечно же, вдохновения.</p>
            <p>Каждый из нас пришел в мир веб-разработки с разными интересами и опытом, но нас объединяет одно — стремление учиться и развиваться. Мы погрузились в изучение технологий, и вот уже на протяжении недели мы работаем над нашим проектом на React. Это для нас не просто задание, а настоящая возможность применить все знания, которые мы получили за это время.</p>
            <p>Мы верим, что работа в команде — это ключ к успеху. Каждый из нас вносит свой уникальный вклад, и вместе мы создаем что-то большее, чем просто код. Мы учимся друг у друга, делимся идеями и поддерживаем друг друга на каждом этапе нашего пути. Этот проект стал для нас не только практическим заданием, но и настоящим испытанием, которое помогает нам расти как разработчикам и как команде.</p>
            <p>Мы надеемся, что наш проект вдохновит вас так же, как он вдохновил нас. Спасибо, что вы с нами на этом увлекательном пути!</p>
        </div>
        <img className={style.about_image} src="../public/aboutiilustration.svg" alt="" />
        </div>
        </section>
        <Footer/>
</div>      
};

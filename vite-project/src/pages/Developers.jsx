import React from 'react';
import styles from "./Developers.module.css"
import { Github } from 'lucide-react';
import style from '../header/home.module.css';
import { Link } from 'react-router-dom';
import {Footer} from "../footer/footer.jsx"

const Developers = () => {
    return (
    <div className={styles.card_general}>
        <header>
            <div className={style.head}>
            <img className={style.posimg} src='/Logo.svg' alt="" />
            <nav className={style.nav}>
                <ul className={style.spisok}>
                    <li className={style.li}><Link to='/'>Home</Link></li>
                    <li className={style.li}><Link to='/About'>About us</Link></li>
                    <li className={style.li}><Link to='/Developers'>Developers</Link></li>
                </ul>
                <button className={style.button} onClick={() => window.open('https://github.com/ReeneQo/hakawt', '_blank')}> <Github/> GitHub </button> 
            </nav>
            </div>
        </header>

        {/* <h1 className={styles.h1_dev}>Our Team</h1> */}

        <div className={styles.card_container}>
       <div className={styles.card_main}>
       <img className={styles.card_image} src="./public/inkognito.svg" alt="" />
        <h4>Artem (clevergg) Gorbunov</h4>
        <p className={styles.card_text}>Developer</p>
        <hr></hr>
        <button className={styles.git_button} onClick={() => window.open('https://github.com/clevergg', '_blank')}><Github/></button>
        <p>About you</p>
       </div>

       
       <div className={styles.card_main}>
       <img className={styles.card_image} src="./public/inkognito.svg" alt="" />
        <h4>Dmitriy (rennee) Zelenin</h4>
        <p className={styles.card_text}>Developer</p>
        <hr></hr>
        <button className={styles.git_button} onClick={() => window.open('https://github.com/ReeneQo', '_blank')}><Github/></button>
        <p>About you</p>
       </div>
       
       <div className={styles.card_main}>
       <img className={styles.card_image} src="./public/inkognito.svg" alt="" />
        <h4>Stepan (ierumi) Starostin</h4>
        <p className={styles.card_text}>Developer</p>
        <hr></hr>
        <button className={styles.git_button} onClick={() => window.open('https://github.com/ierumi', '_blank')}><Github/></button>
        <p>About you</p>
       </div>
       </div>

       <div className={styles.card_container2}>

       <div className={styles.card_main}>
       <img className={styles.card_image} src="./public/inkognito.svg" alt="" />
        <h4>Valeriy (valeron) Erushev</h4>
        <p className={styles.card_text}>Captian, CEO</p>
        <hr></hr>
        <button className={styles.git_button} onClick={() => window.open('https://github.com/valeron1380', '_blank')}><Github/></button>
        <p>0% code writing</p>
       </div>

       <div className={styles.card_main}>
       <img className={styles.card_image} src="./public/inkognito.svg" alt="" />
        <h4>Kirill (SAGZZad) Litavrin</h4>
        <p className={styles.card_text}>Developer</p>
        <hr></hr>
        <button className={styles.git_button} onClick={() => window.open('https://github.com/SAGZZad', '_blank')}><Github/></button>
        <p>About you</p>
       </div>
       </div>
       <h1 className={styles.h1_dev}>Developers</h1>
    </div>
    )
};

export default Developers;

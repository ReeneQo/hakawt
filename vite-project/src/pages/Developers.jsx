import React from 'react';
import styles from "./Developers.module.css"
import { Github } from 'lucide-react';
import { Header } from '../header/Header';

const Developers = () => {
    return (
    <div className={styles.body}>
        <main>
        <Header/>
    <div className={styles.card_general}>

        <div className={styles.card_container}>

            <div className={styles.card_main}>
                <div className={styles.names}>
                    <img className={styles.card_image} src="/inkognito.svg" alt="" />
                    <span className={styles.card_text}>Artem (clevergg) Gorbunov Developer</span>
                    <button className={styles.git_button} onClick={() => window.open('https://github.com/clevergg', '_blank')}><Github/></button>
                </div>
                <hr></hr>
                <span>About you</span>
            </div>

       
       <div className={styles.card_main}>
                <div className={styles.names}>
                    <img className={styles.card_image} src="/inkognito.svg" alt="" />
                    <span className={styles.card_text}>Dmitriy (RENEE) Zelenin Developer</span>
                    <button className={styles.git_button} onClick={() => window.open('https://github.com/ReeneQo', '_blank')}><Github/></button>
                </div>
            <hr></hr>
            <span>About you</span>
       </div>
       
       <div className={styles.card_main}>
                <div className={styles.names}>
                    <img className={styles.card_image} src="/inkognito.svg" alt="" />
                    <span className={styles.card_text}>Stepan (ierumi) Starostin Developer</span>
                    <button className={styles.git_button} onClick={() => window.open('https://github.com/ierumi', '_blank')}><Github/></button>
                </div>
            <hr></hr>
            <span>-20% code writing</span>
        </div>

       </div>

       <div className={styles.card_container2}>

       <div className={styles.card_main}>
                <div className={styles.names}>
                    <img className={styles.card_image} src="/inkognito.svg" alt="" />
                    <span className={styles.card_text}> Valeriy (valeron) Erushev Captain CEO </span>
                    <button className={styles.git_button} onClick={() => window.open('https://github.com/valeron1380', '_blank')}><Github/></button>
                </div>
            <hr></hr>
            <span>0% code writing</span>
       </div>

       <div className={styles.card_main}>
                <div className={styles.names}>
                    <img className={styles.card_image} src="/inkognito.svg" alt="" />
                    <span className={styles.card_text}> Kirill (SAGZZad) Litavrin Developer </span>
                    <button className={styles.git_button} onClick={() => window.open('https://github.com/SAGZZad', '_blank')}><Github/></button>
                </div>
            <hr></hr>
            <span>About you</span>
       </div>

       </div>

    </div>
        </main>

       <div>
        <h1 className={styles.h1_dev}>Developers</h1>
       </div>
    
    </div>
    )
};

export default Developers;

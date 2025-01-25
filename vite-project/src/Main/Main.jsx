import styles from './Main.module.css'
import {CourseDropdown} from '../components/CourseDropdown/CourseDropdown'


export function Main(){
    return <div> 
        <section className={styles.main}>
                <div className={styles.main_conteiner}>
                    <h1 className={styles.h1}>
                        На нашем сайте вы можете выбрать курс обучения и получить материалы по предметам.
                    </h1>
                    <p className={styles.main_text}>
                    Каждый курс включает в себя разнообразные предметы, которые помогут вам глубже понять предмет и подготовят вас к реальным вызовам в профессиональной среде. Выбирайте предметы, которые соответствуют вашим интересам и целям!
                    </p>
                    <CourseDropdown/>
                </div>
                <div className={styles.main__image}>
                    <img className={styles.image_main} src="Illustration.svg" alt="" />
                </div>
        </section>
    </div>
}

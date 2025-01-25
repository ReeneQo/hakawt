import styles from './Main.module.css'
import {CourseDropdown} from '../components/CourseDropdown/CourseDropdown'
import { BackButton } from '../components/BackButton/BackButton.jsx';
import { SubjectCard } from '../components/SubjectCard/SubjectCard.jsx';
import { TopicsList } from '../components/TopicsList/TopicsList.jsx';
import { TopicContent } from '../components/TopicContent/TopicContent.jsx';
import { courses } from '../data/courses';


export function Main(){

    const [isOpen, setIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleBack = () => {
    if (selectedTopic) {
      setSelectedTopic(null);
      setSearchQuery('');
    } else if (selectedSubject) {
      setSelectedSubject(null);
    }
  };

  const headings = useMemo(() => {
    if (!selectedTopic) return [];
    return extractHeadings(selectedTopic.content);
  }, [selectedTopic]);

  const filteredHeadings = useMemo(() => {
    if (!searchQuery) return headings;
    return headings.filter(heading => 
      heading.text.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [headings, searchQuery]);

  const scrollToHeading = (headingText) => {
    const element = document.getElementById(headingText.replace(/\s+/g, '-').toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

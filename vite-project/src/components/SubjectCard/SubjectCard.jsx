import React from 'react';
import { CircleArrowRight } from 'lucide-react';
import styles from './Card.module.css'


export const SubjectCard = ({ subject, onSelect }) => {
const subjId = subject.id
  if (subjId % 6 === 1) {
    return (
      <div className={styles.card1} onClick={() => onSelect(subject)}>
        <div className={styles.card__white__content}>
            <span className={styles.text}>{subject.name}</span>
            <span className={styles.p}>{subject.description}</span>
            <span className={styles.span__white}> <CircleArrowRight className={styles.white_target} /> Learn more</span>
        </div>
        <img className={styles.white__image} src='/first.svg' width={150}></img>
      </div>
    )
  } else if (subjId % 6 === 2) {
    return (
      <div className={styles.card__green}>
        <div className={styles.card__green__content}>
          <span className={styles.text__green}>{subject.name}</span>
          <span className={styles.p__green}>{subject.description}</span>
          <span className={styles.span__green}> <CircleArrowRight className={styles.white_target} /> Learn more</span>
        </div>
        <img className={styles.green__image} src='/second.svg' width={150}></img>
      </div>
    )
  } else if (subjId % 6 === 3) {
    return (
      <div className={styles.card__black}>
        <div className={styles.card__black__content}>
          <span className={styles.text__black}>{subject.name}</span>
          <span className={styles.p__black}>{subject.description}</span>
          <span className={styles.span__black}> <CircleArrowRight className={styles.white_target}/>Learn more</span>
        </div>
        <img className={styles.black__image} src='/third.svg' width={150}></img>
      </div> 
      )
  } else if (subjId % 6 === 4) {
    return (
      <div className={styles.card__green}>
        <div className={styles.card__green__content}>
          <span className={styles.text__green}>{subject.name}</span>
          <span className={styles.p__green}>{subject.description}</span>
          <span className={styles.span__green}> <CircleArrowRight className={styles.white_target} /> Learn more</span>
        </div>
        <img className={styles.green__image} src='/second.svg' width={150}></img>
      </div>
    )
  } else if (subjId % 6 === 5) {
    return (
      <div className={styles.card__black}>
        <div className={styles.card__black__content}>
          <span className={styles.text__black}>{subject.name}</span>
          <span className={styles.p__black}>{subject.description}</span>
          <span className={styles.span__black}> <CircleArrowRight className={styles.white_target}/>Learn more</span>
        </div>
        <img className={styles.black__image} src='/third.svg' width={150}></img>
      </div> 
      )
  } else if (subjId % 6 === 0) {
    return (
      <div className={styles.card} onClick={() => onSelect(subject)}>
        <div className={styles.card__white__content}>
          <span className={styles.text}>{subject.name}</span>
          <span className={styles.p}>{subject.description}</span>
          <span className={styles.span__white}> <CircleArrowRight className={styles.white_target}/>Learn more</span>
        </div>
        <img className={styles.white__image} src='/first.svg' width={150}></img>
      </div>
    )
  }

};
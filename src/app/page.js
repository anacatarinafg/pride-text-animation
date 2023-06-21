'use client';
import { gsap } from 'gsap';
import styles from './page.module.css';

const pride = [
  {
    title: "Lesbian Pride",
    color: "#D62900",
    meaning: "Healing"
  },
  {
    title: "Gay Pride",
    color: "#FF8C00",
    meaning: "Sunlight"
  },
  {
    title: "Bisexual Pride",
    color: "#D60082",
    meaning: "Nature"
  },
  {
    title: "Transgender Pride",
    color: "#55CDFC",
    meaning: "Serenity"
  },
  {
    title: "Queer Pride",
    color: "#FFD300",
    meaning: "Spirit"
  },
  {
    title: "Pansexual Pride",
    color: "#FF6BBD",
    meaning: "Life"
  },
  {
    title: "Asexual Pride",
    color: "#A4A4A4",
    meaning: "Healing"
  },
  {
    title: "Non-binary Pride",
    color: "#FFFF00",
    meaning: "Sunlight"
  },
  {
    title: "Black Lives Matter",
    color: "#000000",
    meaning: "People of Color"
  },
  {
    title: "Progress Pride",
    color: "#5E2CA5",
    meaning: "People of Color, Transgender, Intersex, Non-binary"
  }
];

export default function Home() {

  const manageMouseEnter = (e, color) => {
    gsap.to(e.target, {
      backgroundColor: color,
      y: "-2vw",
      duration: 0.3
    })

  }

  const manageMouseLeave = (e, color) => {
    gsap.to(e.target, {
      backgroundColor: "white",
      y: "0vw",
      duration: 0.3,
      delay: 0.1
    })

  }
  return (
    <main className={styles.pride}>
      {
        pride.map((pride, index) => {
          return (
            <div key={index} className={styles.pride__box} onMouseEnter={(e) => { manageMouseEnter(e, pride.color) }} onMouseLeave={(e) => { manageMouseLeave(e, pride.color) }}>
              <p className={styles.pride__text}>{pride.title}</p>
            </div>
          )

        })
      }
    </main>
  )
}

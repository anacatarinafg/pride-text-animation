'use client';
import { gsap } from 'gsap';
import styles from './page.module.css';

const pride = [
  {
    title: "Lesbian",
    color: "#880085",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Orange_and_Pink_Lesbian_flag.svg/2560px-Orange_and_Pink_Lesbian_flag.svg.png'
  },
  {
    title: "Gay",
    color: "#0000F9",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Gay_Pride_Flag.svg/1200px-Gay_Pride_Flag.svg.png'
  },
  {
    title: "Bisexual",
    color: "#D60082",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Bisexual_Pride_Flag.svg/1200px-Bisexual_Pride_Flag.svg.png'
  },
  {
    title: "Transgender",
    color: "#55CDFC",
    image: 'https://images.squarespace-cdn.com/content/v1/5ea357b307a4a2064470426b/1653657761369-T60GXHPNJ867FDATTJWF/Transgenderpridesticker.png?format=1500w'
  },
  {
    title: "Queer",
    color: "#FFD300",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Orange_and_Pink_Lesbian_flag.svg/2560px-Orange_and_Pink_Lesbian_flag.svg.png'
  },
  {
    title: "Pansexual",
    color: "#FF1B8D",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Pansexuality_Pride_Flag.svg/255px-Pansexuality_Pride_Flag.svg.png'
  },
  {
    title: "Asexual",
    color: "#808080",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Asexual_Pride_Flag.svg/512px-Asexual_Pride_Flag.svg.png'
  },
  {
    title: "Non-binary",
    color: "#FFF433",
    image: 'https://www.stonewall.org.uk/sites/default/files/1280px-nonbinary_flag.svg_.png'
  },
  {
    title: "Intersex",
    color: "#750787",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Intersex_Pride_Flag.svg/800px-Intersex_Pride_Flag.svg.png'
  },
  {
    title: "People of color",
    color: "#523A28",
    image: 'https://www.sexualdiversity.org/images/1/queer-people-of-color-flag.jpg'
  }
];

export default function Home() {
  const manageMouseEnter = (e, color) => {
    gsap.to(e.target, {
      backgroundColor: color,
      y: "-2vw",
      duration: 0.3
    });
    gsap.to(e.target.querySelector(`.${styles.pride__image}`), { opacity: 1, duration: 0.3 });
  };

  const manageMouseLeave = (e, color) => {
    gsap.to(e.target, {
      backgroundColor: "white",
      y: "0vw",
      duration: 0.3,
      delay: 0.1
    });
    gsap.to(e.target.querySelector(`.${styles.pride__image}`), { opacity: 0, duration: 0.3 });
  };

  return (
    <>
      <header>
        <nav>

        </nav>
      </header>
      <main className={styles.pride}>
        {pride.map((pride, index) => {
          return (
            <div
              key={index}
              className={styles['pride__box']}
              onMouseEnter={(e) => { manageMouseEnter(e, pride.color) }}
              onMouseLeave={(e) => { manageMouseLeave(e, pride.color) }}
            >
              <p className={styles['pride__text']}>{pride.title}</p>
              <img
                src={pride.image}
                alt={pride.title}
                className={`${styles['pride__image']} ${styles.hidden}`}
              ></img>
            </div>
          );
        })}
      </main>
    </>
  );
}
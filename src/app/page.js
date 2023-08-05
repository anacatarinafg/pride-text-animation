'use client';
import { gsap } from 'gsap';
import styles from './page.module.css';

const pride = [
  {
    title: "Lesbian",
    color: "#f779c4",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Orange_and_Pink_Lesbian_flag.svg/2560px-Orange_and_Pink_Lesbian_flag.svg.png'
  },
  {
    title: "Gay",
    color: "#30D5C8",
    image: 'https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/image14?qlt=82&wid=768&ts=1670911241536&dpr=off&fit=constrain&fmt=png-alpha'
  },
  {
    title: "Bisexual",
    color: "#D60090",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Bisexual_Pride_Flag.svg/1200px-Bisexual_Pride_Flag.svg.png'
  },
  {
    title: "Transgender",
    color: "#31c0f7",
    image: 'https://images.squarespace-cdn.com/content/v1/5ea357b307a4a2064470426b/1653657761369-T60GXHPNJ867FDATTJWF/Transgenderpridesticker.png?format=1500w'
  },
  {
    title: "Queer",
    color: "#FFD300",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Queer_Flag.png/800px-Queer_Flag.png?20220505172817'
  },
  {
    title: "Pansexual",
    color: "#ff3098",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Pansexuality_Pride_Flag.svg/255px-Pansexuality_Pride_Flag.svg.png'
  },
  {
    title: "Asexual",
    color: "#808080",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Asexual_Pride_Flag.svg/512px-Asexual_Pride_Flag.svg.png'
  },
  {
    title: "Non-binary",
    color: "#fff657",
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
    image: 'https://news.lafayette.edu/wp-content/blogs.dir/2/files/2020/10/QPOC-logo.jpg'
  }
];

export default function Home() {
  const manageMouseEnter = (e, color) => {
    gsap.to(e.target, {
      backgroundColor: color,
      y: "-2vw",
      duration: 0.3
    });
    gsap.to(e.target.querySelector(`.${styles.pride__image}`), { opacity: 1, duration: 0.4 });
  };

  const manageMouseLeave = (e) => {
    gsap.to(e.target, {
      backgroundColor: "white",
      y: "0vw",
      duration: 0.3,
      delay: 0.1
    });
    gsap.to(e.target.querySelector(`.${styles.pride__image}`), { opacity: 0, duration: 0.4 });
  };

  return (
    <>
      <header>
        <nav className={styles.navbar}>
          <h2 className={styles.navbar__headline}>lgbtqia+</h2>
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
              <p className={styles['pride__text']}>{pride.title}<span>pride</span></p>
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
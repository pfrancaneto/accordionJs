import LogoFaq from "../../assets/icon-star.svg";
import IconPlus from '../../assets/icon-plus.svg';

import styles from "./styles.module.css";

// const dados = [
//   {
//     id: 0,
//     pergunta: 'What is Frontend Mentor, and how will it help me?',
//     resposta: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building,",
//   },
//   {
//     id: 1,
//     pergunta: "Is Frontend Mentor free?",
//     resposta: "Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
//   },
//   {
//     id: 2,
//     pergunta: "Can I use Frontend Mentor projects in my portfolio?",
//     resposta: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
//   },
//   {
//     id: 3,
//     pergunta: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
//     resposta: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
//   }
// ]

const Faq = () => {
  return (
    <section className={styles.sectionFaq}>
      <div className={styles.faq}>
        <div className={styles.title}>
          <img src={LogoFaq} alt="Icon Star" />
          <h1>FAQs</h1>
        </div>
        <div className={styles.faqDetalhes}>
          <ul>
            What is Frontend Mentor, and how will it help me?
            <img src={IconPlus} alt="Icon Plus" />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Faq;

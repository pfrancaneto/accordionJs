import { useState } from "react";

import LogoFaq from "../../assets/icon-star.svg";
import IconPlus from "../../assets/icon-plus.svg";
import IconMinus from "../../assets/icon-minus.svg";


import styles from "./styles.module.css";

const dados = [
  {
    id: 0,
    pergunta: "What is Frontend Mentor, and how will it help me?",
    resposta:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    id: 1,
    pergunta: "Is Frontend Mentor free?",
    resposta:
      "Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    id: 2,
    pergunta: "Can I use Frontend Mentor projects in my portfolio?",
    resposta:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    id: 3,
    pergunta: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    resposta:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

const Faq = () => {
  const [selected, setSelected] = useState(null);

  const handleClick = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <section className={styles.containerFaq}>
      <div className={styles.title}>
        <img src={LogoFaq} alt="Icon Star" />
        <h1>FAQs</h1>
      </div>
      {dados.map((dado, i) => (
        <div key={dado.id} className={styles.accordionItem}>
          <div className={styles.accordionHeader}>
            <span>{dado.pergunta}</span>
            <div onClick={() => handleClick(i)}>
              {selected === i ? (
                <img src={IconMinus} alt="fechar" />
              ) : (
                <img src={IconPlus} alt="abrir" />
              )}
            </div>
          </div>
          <div
            className={
              selected === i
                ? styles.accordionContentShow
                : styles.accordionContent
            }
          >
            <p className={styles.texto}>{dado.resposta}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Faq;

import React from "react";
import { motion } from "framer-motion";
import styles from "./BoostCards.module.css";

const BoostCards = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
        ease: "easeInOut",
        duration: 0.8
      }
    }
  };
const cards = [
  {
    title: "Emergency Contacts",
    description: "Reach out quickly with one-tap emergency helplines.",
    img: "/assets/alert.svg"
  },
  {
    title: "Emergency Contacts",
    description: "Reach out quickly with one-tap emergency helplines.",
    img: "/assets/tips.svg"
  },
  {
    title: "Emergency Contacts",
    description: "Reach out quickly with one-tap emergency helplines.",
    img: "/assets/emergency.svg"
  },
  {
    title: "Emergency Contacts",
    description: "Reach out quickly with one-tap emergency helplines.",
    img: "/assets/updates.svg"
  }
];



 const cardVariant = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };
  return (
    <motion.section
      className={styles.boostSection}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <motion.h2 className={styles.heading}>
        <span className={styles.gradientText}>Empowering</span> Safety Experiences
      </motion.h2>

      <div className={styles.grid}>
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            className={styles.card}
            variants={cardVariant}
            whileHover={{
              scale: 1.05,
              rotateZ: 1,
              boxShadow: "0 0 40px rgba(249, 248, 113, 0.3)"
            }}
          >
            <img src={card.img} alt={card.title} className={styles.cardImg} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={styles.button}
            >
              See More →
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
 export default BoostCards;
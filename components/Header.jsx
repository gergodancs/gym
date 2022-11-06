import styles from "../styles/Header.module.css";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className={styles.header_container}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
      >
        <h1 className={styles.title}>Gy:M O'CLOCK</h1>
        <h2 className={styles.sub_title}>A MINŐSÉG A VÉDJEGYÜNK!</h2>
      </motion.div>
      <div className={styles.description_container}>
        <p className={styles.description}>
          EDZŐTERMI FELSZERELÉSEK SZÉLES VÁLASZTÉKA, AKÁR OTTHONI
          FELHASZNÁLÁSRA! <br /> MULTIFUNKCIONÁLIS ERŐKERETEK A GYÁRTÓTÓL.
        </p>
      </div>
    </div>
  );
};

export default Header;

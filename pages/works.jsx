import { useState } from "react";
import styles from "../styles/carousel/Carousel.module.css";
import Image from "next/image";
import bordas from "../public/carousel/bordasfal.jpg";
import egyedi from "../public/carousel/egyedi_erokeret.jpg";
import revolver from "../public/carousel/revolver.jpg";

import { motion } from "framer-motion";

const works = () => {
  const pics = [bordas, egyedi, revolver];
  const [position, setPosition] = useState(0);
  const onRight = () => {
    if (position <= pics.length - 2) {
      setPosition(position + 1);
    }
  };
  const onLeft = () => {
    if (position > 0) {
      setPosition(position - 1);
    }
  };
  return (
    <div className={styles.carousel_container}>
      <div className={styles.row}>
        {pics.map((img, i) => {
          return (
            <motion.div
              initial={{
                scale: 0,
              }}
              animate={{
                scale: i === position ? 1 : 0.8,
                left: `${(i - position) * 60 - 30}vw`,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className={styles.pics}
            >
              <button className={styles.left} onClick={onLeft}></button>
              <Image src={img} width={800} height={600} alt="pics" />
              <button className={styles.right} onClick={onRight}></button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default works;

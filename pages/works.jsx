import { useState } from "react";
import styles from "../styles/carousel/Carousel.module.css";
import Image from "next/image";
import bordas from "../public/carousel/bordasfal.jpg";
import egyedi from "../public/carousel/egyedi_erokeret.jpg";
import revolver from "../public/carousel/revolver.jpg";
import { useSwipeable } from "react-swipeable";
import { HiArrowLeftCircle, HiArrowRightCircle } from "react-icons/hi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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
      <FaArrowLeft />
      <div className={styles.row}>
        {pics.map((img, i) => {
          return (
            <motion.div
              key={i}
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
              <button
                className={i === 0 ? styles.hidden : styles.left}
                onClick={onLeft}
              >
                <FaArrowLeft size={30} />
              </button>
              <Image src={img} width={800} height={600} alt="pics" />
              <button
                className={i === pics.length - 1 ? styles.hidden : styles.right}
                onClick={onRight}
              >
                <FaArrowRight size={30} />
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default works;

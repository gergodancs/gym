import { useState } from "react";
import styles from "../styles/carousel/Carousel.module.css";
import Image from "next/image";
import bordas from "../public/carousel/bordasfal.jpg";
import egyedi from "../public/carousel/egyedi_erokeret.jpg";
import revolver from "../public/carousel/revolver.jpg";
import majomletra from "../public/carousel/majomletra.jpg";
import csigas from "../public/carousel/csigas_erokeret.jpg";
import hex from "../public/carousel/Hexbar.jpg";
import nagykeret from "../public/carousel/nagykeret.jpg";
import pad from "../public/carousel/pad.jpg";

import sled from "../public/carousel/szan.jpg";

import { motion } from "framer-motion";

const works = () => {
  const pics = [
    egyedi,
    csigas,
    nagykeret,
    bordas,
    majomletra,
    revolver,
    hex,

    sled,
    pad,
  ];
  const [small, setSmall] = useState(true);

  return (
    <div className={styles.page_container}>
      <div className={styles.content}>
        {pics.map((img, i) => (
          <Image
            onClick={() => setSmall((prevState) => !prevState)}
            className={styles.img}
            src={img}
            key={i}
            width={small ? 600 : 400}
            height={small ? 600 : 400}
          />
        ))}
      </div>
    </div>
  );
};

export default works;

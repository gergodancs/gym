import styles from "../styles/ProductsBtn.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsFillForwardFill } from "react-icons/bs";
const ProductsBtn = () => {
  return (
    <motion.div
      className={styles.products_btn}
      initial={{
        opacity: 0,
        translateX: -250,
        scale: 0,
      }}
      animate={{ opacity: 1, translateX: 0, scale: [0, 1, 1.1, 1] }}
      transition={{ duration: 0.4, delay: 2.5 }}
    >
      <Link href="/products">ERŐKERETEINK</Link>
      <Link href="/products">
        <BsFillForwardFill size={40} />
      </Link>
    </motion.div>
  );
};

export default ProductsBtn;

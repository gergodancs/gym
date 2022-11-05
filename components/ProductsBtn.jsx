import styles from "../styles/ProductsBtn.module.css";
import Link from "next/link";
const ProductsBtn = () => {
  return (
    <div className={styles.products_btn}>
      <Link href="/products">ERŐKERETEINK >></Link>
    </div>
  );
};

export default ProductsBtn;

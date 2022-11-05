import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.header_container}>
      <div>
        <h1 className={styles.title}>Gy:M O'CLOCK</h1>
        <h2 className={styles.sub_title}>A MINŐSÉG A VÉDJEGYÜNK!</h2>
      </div>
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

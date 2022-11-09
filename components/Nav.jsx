import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Nav.module.css";
import icon from "../public/pics/logo_v5_hex_efefef.png";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Image className={styles.icon} src={icon} alt="icon" />
      <ul className={styles.link_container}>
        <li>
          <Link href="/">Főoldal</Link>
        </li>
        <li>
          <Link href="/works">Munkáink</Link>
        </li>
        <li>
          <Link href="/contact">Kapcsolat</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

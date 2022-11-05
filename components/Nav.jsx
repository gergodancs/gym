import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Nav.module.css";
import icon from "../public/pics/logo_v5_hex_efefef.png";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.link_container}>
        <li>
          <Link href="/">Főoldal</Link>
        </li>
        <li>
          <Link href="/my-works">Munkáink</Link>
        </li>
        <li>
          <Link href="/contact">Kapcsolat</Link>
        </li>
      </ul>
      <Image className={styles.icon} src={icon} alt="icon" />
    </nav>
  );
};

export default Nav;

import styles from "./navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand_container}>
        <div className={styles.brand_initial}>GcF</div>
        <span className={styles.brand_title}> Garcon Food </span>
      </div>
    </nav>
  );
}

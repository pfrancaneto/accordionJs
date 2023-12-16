import Logo from "../../assets/background-pattern-desktop.svg";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Header" />
    </header>
  );
};

export default Header;

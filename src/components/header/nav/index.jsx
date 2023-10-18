import styles from "./style.module.scss";
import Link from "./Link";
import { motion } from "framer-motion";
import { menuSlide } from "../anim";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
export default function index() {
  return (
    <motion.div
      variants={menuSlide}
      animate="enter"
      exit="exit"
      initial="initial"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div className={styles.nav}>
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((item, index) => {
            return <Link data={{ ...item, index }} />;
          })}
        </div>
      </div>
    </motion.div>
  );
}

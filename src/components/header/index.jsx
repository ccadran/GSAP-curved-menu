"use client";

import React, { useState } from "react";
import styles from "./style.module.scss";
import Nav from "./nav";
import { AnimatePresence } from "framer-motion";

export default function index() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className={styles.button}
      >
        <div
          className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
        ></div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}

import styles from "./page.module.css";
import Nav from "./components/nav.js"
import React from "react";
import Default from "./components/home.js"
//import { useVisualMode } from "../../hooks/useVisualMode";

export default function Home() {
  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.body}>
        <Default />
      </div>
    </div>
  );
}

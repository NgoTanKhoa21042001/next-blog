import Image from "next/image";
import Link from "next/link";
import React from "react";
import ThemeToggle from "../themeToggle/ThemeToggle";
import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="" width={24} height={24} />
        <Image src="/instagram.png" alt="" width={24} height={24} />
        <Image src="/tiktok.png" alt="" width={24} height={24} />
        <Image src="/youtube.png" alt="" width={24} height={24} />
      </div>
      <div className={styles.logo}>KhoaBlog</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Homepage
        </Link>
        <Link href="/" className={styles.link}>
          Contact
        </Link>
        <Link href="/" className={styles.link}>
          About
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

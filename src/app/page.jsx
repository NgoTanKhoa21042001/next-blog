import CardList from "@/components/cardList/CardList";
import CategoryList from "@/components/categoryList/CategoyList";
import Featured from "@/components/featured/Featured";
import Footer from "@/components/footer/Footer";
import Menu from "@/components/Menu/Menu";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";
import styles from "./homepage.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />

        <Menu />
      </div>
    </div>
  );
}

import Head from "next/head";
import styles from "../styles/Home.module.css";
import Board from "../components/Board";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tic Tac Toe</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/566/566294.png" />
      </Head>

      <main className={styles.main}>
        <Board />
      </main>
    </div>
  );
}

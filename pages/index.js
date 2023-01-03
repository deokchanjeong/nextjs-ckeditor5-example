import styles from "../styles/Home.module.css";
import { MyEditor } from "../components";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>CKEditor5 Example App in Next.js</h1>
      <MyEditor />
    </main>
  );
}

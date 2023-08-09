
import styles from "./page.module.css";
import Slider from "./components/Slider";
import About from "./components/About";
import Divider from "./components/Divider";
import Servicii from "./components/Servicii";
import ListaPreturi from "./components/ListaPreturi";
import Rules from "./components/Rules";
import LastPosts from "./components/LastPosts";
import 'dotenv/config'


export default function Home() {
  return (
    <main>
      <Slider />
      <About />
      <Divider text="SERVICII" />
      <Servicii />
      <Divider text="LISTA PRETURI" />
      <ListaPreturi />
      <Divider text="REGULI SI INFORMATII" />
      <Rules />
      <Divider text="POSTARI RECENTE" />
      <LastPosts />
    </main>
  );
}
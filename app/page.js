import Image from "next/image";
import styles from "./page.module.css";
import {Banner} from './components/Banner/Banner'
import { Promo } from "./components/Promo/Promo";
import {  NewCardsList } from "./components/CardsList/NewCardsList";
import { CardsList  } from "./components/CardsList/CardsList";

export default function Home() {
  return (<main class="main">
<Banner />
<CardsList id="popular" />
<CardsList id="new" />

<Promo />
</main>
  );
}

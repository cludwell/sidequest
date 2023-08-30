import { wrapper } from "@/store";
import { Inter } from "next/font/google";
import Head from "next/head";
import Dungeon from "./Dungeon";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-16 ${inter.className}`}
    >
      <Head>
        <title>Side🎲Quest</title>
      </Head>
      <h1>Hello SideQuest</h1>
    </main>
  );
}

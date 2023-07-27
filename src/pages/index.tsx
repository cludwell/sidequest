import { Inter } from "next/font/google";
import LogInModal from "./LogInModal";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Head>
        <title>Side🎲Quest</title>
      </Head>
      <h1>Hello SideQuest</h1>
      <LogInModal />
    </main>
  );
}

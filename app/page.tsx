import Link from "next/link";
import {
  page,
  container,
  title,
  text,
  buttonPrimary,
  buttonSecondary,
} from "./ui";

export default function Home() {
  return (
    <main className={page}>
      <div className={container}>

        <h1 className={title}>
          Willkommen 👋
        </h1>

        <p className={text}>
          Schön, dass du da bist. Das ist meine persönliche Webplattform.
        </p>

        <p className={text}>
          Hier findest du Informationen über mich und meine Projekte 🚀
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-4">
          <Link href="/ueber-mich" className={buttonPrimary}>
            Über mich
          </Link>

          <Link href="/kontakt" className={buttonSecondary}>
            Kontakt
          </Link>
        </div>

      </div>
    </main>
  );
}
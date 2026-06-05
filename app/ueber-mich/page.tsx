import Link from "next/link";
import {
  layout,
  container2,
  title2,
  subtitle,
  card,
  button,
} from "../ui";

export default function UeberMich() {
  return (
    <main className={layout}>
      <div className={container2}>

        <h1 className={title2}>
          Über mich
        </h1>

        <div className={card}>
          <p className={subtitle}>
            Hallo 👋 ich bin Peter, Softwareentwickler mit Fokus auf moderne Web-Apps.
          </p>
        </div>

        <div className={card}>
          <p className={subtitle}>
            Ich arbeite mit Next.js, React und liebe cleanes UI-Design.
          </p>
        </div>

        <div className={card}>
          <p className={subtitle}>
            Mein Ziel ist es, Interfaces zu bauen, die sich „premium“ anfühlen.
          </p>
        </div>

        <Link href="/" className={button}>
          Zurück
        </Link>

      </div>
    </main>
  );
}
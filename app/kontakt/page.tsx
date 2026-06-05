import Link from "next/link";
import {
  contactPage,
  contactWrapper,
  contactHeadline,
  contactLead,
  contactCard,
  contactEmail,
  buttonPrimary3,
  buttonSecondary3 ,
} from "../ui";

export default function Kontakt() {
  return (
    <main className={contactPage}>
      <div className={contactWrapper}>

        <h1 className={contactHeadline}>
          Kontakt 📩
        </h1>

        <p className={contactLead}>
          Du kannst mich jederzeit erreichen:
        </p>

        <div className={contactCard}>
          <p className="text-white/80 mb-3">E-Mail</p>

          <a
            href="mailto:deine-email@email.de"
            className={contactEmail}
          >
            deine-email@email.de
          </a>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">

          <Link href="/" className={buttonPrimary3}>
            Zurück
          </Link>

          <a
            href="mailto:deine-email@email.de"
            className={buttonSecondary3}
          >
            E-Mail schreiben
          </a>

        </div>

      </div>
    </main>
  );
}
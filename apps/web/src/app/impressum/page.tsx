import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Angaben gemäß § 5 DDG.',
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <div className="mx-auto max-w-2xl pt-10">
      <h1 className="text-2xl font-extrabold tracking-tight">Impressum</h1>

      <section className="mt-6">
        <h2 className="text-sm font-bold uppercase tracking-wide text-[var(--ink-3)]">
          Angaben gemäß § 5 DDG
        </h2>
        <p className="mt-2 leading-relaxed text-[var(--ink)]">
          Kreshnik Gashi
          <br />
          Obereisenheimer Str. 33
          <br />
          74078 Heilbronn
          <br />
          Deutschland
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-sm font-bold uppercase tracking-wide text-[var(--ink-3)]">
          Kontakt
        </h2>
        <p className="mt-2 leading-relaxed">
          E-Mail:{' '}
          <a href="mailto:kreshnik_gashi@gmx.de" className="underline">
            kreshnik_gashi@gmx.de
          </a>
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-sm font-bold uppercase tracking-wide text-[var(--ink-3)]">
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
        </h2>
        <p className="mt-2 leading-relaxed text-[var(--ink)]">
          Kreshnik Gashi
          <br />
          Obereisenheimer Str. 33
          <br />
          74078 Heilbronn
          <br />
          Deutschland
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-sm font-bold uppercase tracking-wide text-[var(--ink-3)]">
          Hinweis zum Betrieb
        </h2>
        <p className="mt-2 leading-relaxed text-[var(--ink-2)]">
          Voteverse wird derzeit als privates, nicht-gewerbliches Projekt
          betrieben. Es werden aktuell keine Zahlungen entgegengenommen und
          keine kostenpflichtigen Leistungen angeboten. Eine Umstellung auf
          einen gewerblichen Betrieb ist geplant; dieses Impressum wird zu
          diesem Zeitpunkt entsprechend aktualisiert.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-sm font-bold uppercase tracking-wide text-[var(--ink-3)]">
          Haftung für Inhalte
        </h2>
        <p className="mt-2 leading-relaxed text-[var(--ink-2)]">
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene
          Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
          verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter
          jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
          Informationen zu überwachen oder nach Umständen zu forschen, die
          auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
        <p className="mt-2 leading-relaxed text-[var(--ink-2)]">
          Voteverse zeigt Meinungsbeiträge und Abstimmungsergebnisse der
          Community. Diese stellen die Meinung der jeweils abstimmenden
          Nutzer dar, nicht die Meinung des Betreibers und keine objektive
          Tatsachenfeststellung. Bei bekanntwerden entsprechender
          Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-sm font-bold uppercase tracking-wide text-[var(--ink-3)]">
          Haftung für Links
        </h2>
        <p className="mt-2 leading-relaxed text-[var(--ink-2)]">
          Unser Angebot enthält gegebenenfalls Links zu externen Websites
          Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese
          fremden Inhalte können wir daher keine Gewähr übernehmen. Für die
          Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
          verantwortlich.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-sm font-bold uppercase tracking-wide text-[var(--ink-3)]">
          Urheberrecht
        </h2>
        <p className="mt-2 leading-relaxed text-[var(--ink-2)]">
          Die durch den Betreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter
          sind als solche gekennzeichnet. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung
          des jeweiligen Autors bzw. Erstellers.
        </p>
      </section>

      <p className="mt-8 text-xs text-[var(--ink-3)]">
        Stand: September 2026
      </p>
    </div>
  );
}

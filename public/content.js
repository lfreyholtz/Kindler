// Inhalt der Checkliste.
//
// Alles in {{doppelten Klammern}} wird aus „Unsere Daten“ ersetzt.
// Fehlt ein Wert, erscheint ein gelber Platzhalter.
//
// Schreibregeln für diese Datei:
// - Kurze Sätze. Ein Gedanke pro Satz.
// - Englische Fachwörter nur, wenn sie auf Formularen stehen. Dann einmal erklären
//   und in die Wortliste (glossary) aufnehmen.
// - Englische Sätze zum Vorlesen: einfach, kurz, ohne Redewendungen.
// - Die "id" eines Schritts nach dem Start nicht mehr ändern, sonst geht der Haken verloren.

window.KINDLER = {
  lastReviewed: "14.10.2026",

  intro: [
    "Diese Seite führt euch Schritt für Schritt durch alles, was ihr für das Visum, das Leben in Georgia und den Food Truck braucht.",
    "Fangt einfach oben beim „Nächsten Schritt“ an. Jeder Schritt erklärt, worum es geht, was ihr tun müsst und was ihr sagen könnt.",
    "Gelb markierte Stellen fehlen noch. Tragt sie einmal unter „Unsere Daten“ ein, dann stehen sie überall richtig drin.",
    "Englische Sätze könnt ihr vorlesen oder kopieren. Darunter steht immer, was sie auf Deutsch bedeuten.",
    "Wenn ihr einen Schritt erledigt habt, setzt den Haken. Alle sehen dann, dass er fertig ist.",
  ],

  // ------------------------------------------------------------------
  // Unsere Daten (einmal eintragen, wird überall eingesetzt)
  // ------------------------------------------------------------------
  profileGroups: [
    {
      title: "Die Firma",
      fields: [
        { key: "businessName", label: "Name der Firma", default: "Kindler German Cuisine" },
        { key: "legalForm", label: "Art der Firma (steht in den Gründungspapieren, meist „LLC“)", placeholder: "LLC" },
        { key: "ein", label: "Steuernummer der Firma (EIN, steht im Brief vom IRS)", placeholder: "12-3456789" },
        { key: "street", label: "Jetzige Adresse in Pike County (bis zum Umzug): Straße und Hausnummer", default: "1957 Williams Mill Rd" },
        { key: "city", label: "Jetzige Firmenadresse: Ort", default: "Zebulon" },
        { key: "state", label: "Bundesstaat", default: "GA" },
        { key: "zip", label: "Jetzige Firmenadresse: Postleitzahl", default: "30295" },
        { key: "county", label: "Landkreis (County) der jetzigen Adresse", default: "Pike County" },
        { key: "menuSummary", label: "Was ihr verkauft, in einem Satz auf Englisch", placeholder: "German food: bratwurst, schnitzel, soft pretzels, potato salad" },
      ],
    },
    {
      title: "Ihr",
      fields: [
        { key: "owner1", label: "Person 1: voller Name, genau wie im Pass" },
        { key: "owner1Title", label: "Person 1: Rolle in der Firma (auf Englisch)", placeholder: "Owner" },
        { key: "owner2", label: "Person 2: voller Name, genau wie im Pass" },
        { key: "owner2Title", label: "Person 2: Rolle in der Firma (auf Englisch)", placeholder: "Co-Owner" },
        { key: "phone", label: "Eure amerikanische Telefonnummer", placeholder: "(770) 555-0123" },
        { key: "email", label: "Eure E-Mail-Adresse" },
        { key: "cfsmName", label: "Wer von euch macht die Hygiene-Prüfung?" },
        { key: "attorneyName", label: "Name eures Anwalts oder eurer Anwältin" },
        { key: "attorneyEmail", label: "E-Mail des Anwalts" },
      ],
    },
    {
      title: "Euer Grundstück an der Tom Bell Road (neues Zuhause, Küche und Firmensitz)",
      fields: [
        { key: "baseName", label: "Name für den Stützpunkt (auf Englisch, darf einfach sein)", placeholder: "Kindler German Cuisine Kitchen" },
        { key: "baseStreet", label: "Straße und Hausnummer", placeholder: "1234 Tom Bell Rd" },
        { key: "baseCity", label: "Ort (wie in der Postadresse)", placeholder: "Barnesville oder Milner" },
        { key: "baseZip", label: "Postleitzahl" },
        { key: "baseJurisdiction", label: "Gehört das Grundstück zu einer Stadt oder nur zum County? (auf Englisch)", placeholder: "unincorporated Lamar County" },
        { key: "baseParcel", label: "Flurstücknummer (Parcel ID, steht auf dem Grundsteuerbescheid)" },
        { key: "baseOwner", label: "Wer steht als Eigentümer im Kaufvertrag? (eure Namen oder die Firma)" },
        { key: "baseWater", label: "Woher kommt das Wasser? (auf Englisch)", placeholder: "public water oder private well" },
      ],
    },
    {
      title: "Der Food Truck",
      fields: [
        { key: "unitName", label: "Name des Trucks", default: "Kindler German Cuisine" },
        { key: "unitType", label: "Truck oder Anhänger? (auf Englisch)", placeholder: "food truck oder food trailer" },
        { key: "unitVin", label: "Fahrgestellnummer (VIN, steht im Fahrzeugbrief)" },
        { key: "unitPlate", label: "Kennzeichen" },
        { key: "freshTank", label: "Größe Frischwassertank (in Gallonen)" },
        { key: "wasteTank", label: "Größe Abwassertank (in Gallonen)" },
      ],
    },
  ],

  // ------------------------------------------------------------------
  // Wortliste: englische Begriffe, die euch begegnen
  // ------------------------------------------------------------------
  glossary: [
    { en: "Base of Operation", de: "Stützpunkt", text: "Der feste Ort, zu dem der Food Truck jeden Tag zurückkommt. Dort wird vorbereitet, Wasser aufgefüllt, Abwasser abgelassen und geputzt. Bei euch: die Küche auf eurem Grundstück." },
    { en: "Environmental Health", de: "Gesundheitsamt (Lebensmittelaufsicht)", text: "Die Abteilung des Gesundheitsamts, die Restaurants und Food Trucks genehmigt und kontrolliert. Lamar und Upson County teilen sich eins." },
    { en: "Permit", de: "Genehmigung", text: "Die Erlaubnis vom Amt. Ohne sie dürft ihr kein Essen verkaufen." },
    { en: "Pre-Application", de: "Vorab-Formular", text: "Das Formular, das ihr schon habt. Es muss komplett fertig sein, bevor ihr den Hauptantrag abgeben dürft." },
    { en: "Plan Review", de: "Prüfung der Unterlagen", text: "Das Gesundheitsamt prüft eure Pläne, Fotos und Datenblätter, bevor es den Truck ansieht. Das kostet eine Gebühr." },
    { en: "Inspection", de: "Kontrolle", text: "Jemand vom Amt kommt vorbei und schaut sich Truck und Küche an." },
    { en: "Zoning", de: "Bauamt-Regeln für ein Grundstück", text: "Legt fest, was auf einem Grundstück erlaubt ist, zum Beispiel nur Wohnen oder auch Gewerbe. Das Bauamt muss bestätigen, dass eure Küche dort erlaubt ist." },
    { en: "Unincorporated", de: "gehört zu keiner Stadt", text: "Das Grundstück liegt außerhalb einer Stadt. Dann ist das County zuständig, nicht die Stadt." },
    { en: "Occupation Tax Certificate / Business License", de: "Gewerbeschein", text: "Die Anmeldung eures Gewerbes beim County. Muss jedes Jahr bis 31. März erneuert werden." },
    { en: "Notary / Notarized", de: "Notar / beglaubigt", text: "In den USA ist ein Notar meist ein Bankmitarbeiter oder jemand im UPS-Laden. Er prüft euren Ausweis und bestätigt eure Unterschrift. Das kostet wenig oder nichts. Erst vor ihm unterschreiben, nicht vorher." },
    { en: "Affidavit", de: "schriftliche Erklärung", text: "Ein Formular, auf dem ihr etwas erklärt und vor dem Notar unterschreibt." },
    { en: "Verification of Lawful Presence", de: "Erklärung zum Aufenthalt", text: "Eine Erklärung, dass ihr legal im Land seid. Georgia verlangt sie für Genehmigung und Gewerbeschein. Sie wird vor dem Notar unterschrieben. Dazu kommt eine Kopie von Pass und I-94." },
    { en: "I-94", de: "elektronischer Einreisestempel", text: "Der Nachweis, wann ihr eingereist seid und bis wann ihr bleiben dürft. Ihr druckt ihn auf i94.cbp.dhs.gov aus." },
    { en: "E-2 / E-2S", de: "Investorenvisum / Visum für Ehepartner", text: "E-2 ist das Visum für Leute, die in eine eigene Firma in den USA investieren. E-2S steht im Einreisestempel des Ehepartners und erlaubt ihm ebenfalls zu arbeiten." },
    { en: "SSN (Social Security Number)", de: "Sozialversicherungsnummer", text: "Eine persönliche Nummer, die ihr für Führerschein, Bank und Steuern braucht. Ihr bekommt sie beim Social-Security-Büro." },
    { en: "EIN", de: "Steuernummer der Firma", text: "Die Nummer eurer Firma beim Finanzamt (IRS). Habt ihr schon." },
    { en: "IRS", de: "Finanzamt der USA", text: "Das Bundesfinanzamt." },
    { en: "LLC", de: "Firmenform", text: "Ähnlich wie eine GmbH. Die Firma ist rechtlich eine eigene „Person“." },
    { en: "DDS", de: "Führerscheinstelle", text: "Department of Driver Services. Dort macht ihr den Führerschein für Georgia." },
    { en: "Tax Commissioner / Tag Office", de: "Zulassungsstelle", text: "Dort meldet ihr Autos an und bekommt Kennzeichen." },
    { en: "Title", de: "Fahrzeugbrief", text: "Das Papier, das zeigt, wem ein Fahrzeug gehört." },
    { en: "CFSM / ServSafe Manager", de: "Hygiene-Zertifikat", text: "Ein Kurs mit Prüfung über sauberes Arbeiten mit Lebensmitteln. Eine Person in eurer Firma braucht es." },
    { en: "3-Compartment Sink", de: "Spüle mit drei Becken", text: "Pflicht im Truck: ein Becken zum Spülen, eins zum Abspülen, eins zum Desinfizieren." },
    { en: "Handwash Sink", de: "Handwaschbecken", text: "Ein eigenes Becken nur zum Händewaschen. Pflicht im Truck." },
    { en: "Dump Station / Mop Sink", de: "Abwasser-Stelle / Ausgussbecken", text: "Eine Stelle am Stützpunkt, an der ihr das Abwasser aus dem Truck ablasst." },
    { en: "Private Well", de: "eigener Brunnen", text: "Wenn euer Wasser nicht aus der öffentlichen Leitung kommt. Dann muss es getestet werden." },
    { en: "Sales Tax", de: "Umsatzsteuer", text: "Steuer auf das, was ihr verkauft. Zubereitetes Essen ist in Georgia steuerpflichtig." },
    { en: "Parcel ID", de: "Flurstücknummer", text: "Die Nummer eures Grundstücks. Steht auf dem Grundsteuerbescheid." },
    { en: "Spec Sheet", de: "Datenblatt", text: "Ein Blatt vom Hersteller mit den technischen Daten eines Geräts, zum Beispiel vom Kühlschrank." },
    { en: "Plumber", de: "Klempner", text: "Handwerker für Wasser und Abwasser." },
  ],

  // ------------------------------------------------------------------
  // Phasen
  // ------------------------------------------------------------------
  phases: [
    { id: "jetzt", title: "1. Jetzt: vorbereiten und beantragen", subtitle: "Bis zum Flug nach Frankfurt. Ihr dürft vorbereiten und Anträge stellen, aber noch nichts verkaufen. Was bis dahin nicht fertig wird, macht ihr danach weiter." },
    { id: "visum", title: "2. Der Visumstermin in Frankfurt", subtitle: "Donnerstag, 12. November 2026" },
    { id: "ankunft", title: "3. Zurück in den USA mit dem neuen Visum", subtitle: "Ab jetzt dürft ihr in eurer Firma arbeiten. Diese Dinge erledigt ihr in den ersten Wochen." },
    { id: "genehmigung", title: "4. Kontrolle und Genehmigung für den Truck", subtitle: "Das Gesundheitsamt schaut sich alles an und gibt euch die Erlaubnis." },
    { id: "betrieb", title: "5. Wenn der Truck läuft", subtitle: "Was regelmäßig zu tun ist." },
  ],

  // ------------------------------------------------------------------
  // Wichtige Stellen
  // ------------------------------------------------------------------
  places: {
    lamarEH: {
      name: "Gesundheitsamt Barnesville (Lamar County Environmental Health)",
      address: "100 Academy Drive, Barnesville, GA 30204",
      phone: "770-358-1483",
      ext: "dann die 2 drücken",
      hours: "Mo bis Fr, 8 bis 17 Uhr. Mittagspause 12 bis 13 Uhr.",
      url: "https://www.district4health.org/clinic-sites/lamar-county/",
    },
    upsonEH: {
      name: "Gesundheitsamt Thomaston (Upson County Environmental Health)",
      address: "314 E Lee St, Thomaston, GA 30286",
      note: "Diese Adresse steht auf eurem Vorab-Formular.",
      url: "https://dph.georgia.gov/environmental-health",
    },
    lamarPlanning: {
      name: "Bauamt Lamar County (Planning and Community Development)",
      address: "790 Veterans Parkway, Barnesville, GA 30204",
      phone: "770-358-5364",
      hours: "Mo bis Fr, 8 bis 17 Uhr",
      email: "abuice@lamarcountyga.com",
      contact: "Leiterin: Anita Buice, 678-603-3114",
      url: "https://www.lamarcountyga.com/departments/buildingzoning-department/",
    },
    lamarTax: {
      name: "Zulassungsstelle Lamar County (Tax Commissioner)",
      address: "790 Veterans Parkway, Barnesville, GA 30204",
      phone: "770-358-5162",
      hours: "Mo bis Fr, 8 bis 16:30 Uhr. Keine Mittagspause.",
      note: "Im selben Gebäude wie das Bauamt.",
      url: "https://www.lamarcountyga.com/departments/tax-commissioner/",
    },
    consulate: {
      name: "US-Generalkonsulat Frankfurt",
      address: "Gießener Straße 30, 60435 Frankfurt am Main",
      note: "Das einzige Konsulat in Deutschland, das E-2-Visa bearbeitet.",
      url: "https://de.usembassy.gov/",
    },
    ssa: {
      name: "Social-Security-Büro (für die Sozialversicherungsnummer)",
      phone: "1-800-772-1213",
      note: "Das nächste Büro findet ihr auf der Webseite. Postleitzahl eingeben.",
      url: "https://secure.ssa.gov/ICON/main.jsp",
    },
    dds: {
      name: "Führerscheinstelle (DDS)",
      note: "Die nächste Stelle findet ihr auf der Webseite.",
      url: "https://dds.georgia.gov/locations",
    },
  },

  // ------------------------------------------------------------------
  // Schritte
  // ------------------------------------------------------------------
  steps: [
    // ================= 1. JETZT =================
    {
      id: "anwalt-klaeren",
      phase: "jetzt",
      title: "Den Anwalt fragen, was ihr vor dem Visum schon dürft",
      summary: "Ihr seid gerade als Touristen hier. Da ist nicht alles erlaubt. Euer Anwalt sagt euch genau, was geht.",
      why: "Wenn ihr als Tourist etwas tut, das als Arbeit zählt, kann das euer Visum gefährden. Deshalb lieber vorher fragen und die Antwort schriftlich haben.",
      todo: [
        "Die fertige E-Mail unten an euren Anwalt schicken.",
        "Euren Einreisestempel (I-94) ausdrucken: auf i94.cbp.dhs.gov „Get Most Recent I-94“ wählen.",
        "Auf dem Ausdruck steht „Admit Until Date“. Bis zu diesem Tag müsst ihr ausgereist sein. Das Datum in die Notizen schreiben.",
      ],
      emails: [
        {
          title: "Fragen an den Anwalt",
          to: "{{attorneyEmail}}",
          subject: "{{businessName}}: questions before our visa interview on November 12",
          body:
            "Dear {{attorneyName}},\n\n" +
            "Our E-2 visa interview in Frankfurt is on November 12, 2026. Right now we are in Georgia as visitors. We have some questions:\n\n" +
            "1. Which of these things may we do as visitors?\n" +
            "   - meet with the county zoning office and the health department\n" +
            "   - finish the separate kitchen on our property\n" +
            "   - buy the food truck and equipment\n" +
            "   - take the food safety manager course and exam\n" +
            "2. Is there anything we must NOT do before we have the visa?\n" +
            "3. The health department told us to apply for the food permit and the county business license in Lamar County now. Is that OK before the visa?\n" +
            "4. After the interview, we and our business will move from Pike County to our property on Tom Bell Road in Lamar County. Does this affect the visa?\n" +
            "5. Can we do the interview in German?\n" +
            "6. Which original documents should we bring to the interview?\n" +
            "7. After approval, how long does the consulate keep our passports?\n\n" +
            "Thank you very much,\n{{owner1}}\n{{businessName}}\n{{phone}}",
          de:
            "Auf Deutsch: Wir fragen, (1) was wir als Touristen schon dürfen (Termine bei Bauamt und Gesundheitsamt, Küche fertig machen, Truck kaufen, Hygiene-Kurs), (2) was wir auf keinen Fall tun dürfen, (3) ob wir die Genehmigung und den Gewerbeschein schon jetzt beantragen dürfen, wie das Gesundheitsamt es vorschlägt, (4) ob unser Umzug mit der Firma auf die Tom Bell Road das Visum betrifft, (5) ob das Gespräch auf Deutsch geht, (6) welche Originale wir mitbringen sollen, (7) wie lange das Konsulat die Pässe behält.",
        },
      ],
      sources: [{ title: "Einreisestempel I-94 abrufen", url: "https://i94.cbp.dhs.gov/" }],
    },
    {
      id: "interview-unterlagen",
      phase: "jetzt",
      title: "Die Unterlagen für Frankfurt in eine Mappe packen",
      summary: "Eine Mappe mit allem, was der Beamte sehen will. Originale vorne, Kopien hinten.",
      why: "Im Gespräch will der Beamte drei Dinge wissen: Ist die Firma echt? Habt ihr das Geld schon investiert? Woher kommt das Geld? Die Mappe beantwortet das.",
      todo: [
        "Euren Anwalt fragen, ob er eine eigene Liste hat. Seine Liste ist wichtiger als diese.",
        "Alles in einen Ordner mit Trennblättern sortieren.",
        "Von jedem Dokument eine Kopie machen.",
      ],
      bring: [
        "Reisepässe (müssen noch lange gültig sein)",
        "Die Terminbestätigung für den 12. November",
        "Die Bestätigungsseite vom Online-Antrag (DS-160) für jede Person",
        "Die Quittung der Visumsgebühr",
        "Ein Passfoto 5 × 5 cm als Reserve",
        "Eine Kopie von allem, was euer Anwalt beim Konsulat eingereicht hat (Businessplan und Nachweise)",
        "Die Gründungspapiere der Firma und den Brief mit der Steuernummer (EIN)",
        "Belege, dass ihr investiert habt: Kaufvertrag Truck, Rechnungen für Ausstattung und Küche, Nachweis zum Grundstück, Kontoauszüge der Firma",
        "Belege, woher das Geld kommt: Kontoauszüge, Verkaufsverträge, Steuerbescheide aus Deutschland",
        "Heiratsurkunde, wenn ihr verheiratet seid",
      ],
      sources: [
        { title: "E-2-Visum aus Deutschland (allgemeine Übersicht einer Kanzlei)", url: "https://www.alazlaw.com/blog/e-2-visa-for-german-citizens-2026-how-to-apply-frankfurt/" },
        { title: "US-Botschaft in Deutschland", url: "https://de.usembassy.gov/" },
      ],
    },
    {
      id: "interview-ueben",
      phase: "jetzt",
      title: "Das Gespräch in Frankfurt üben",
      summary: "Hier stehen die Fragen, die oft gestellt werden. Übt die Antworten laut, am besten zu zweit.",
      why: "Das Gespräch dauert oft nur ein paar Minuten. Wer seine Zahlen ohne Nachschauen kennt, wirkt sicher und glaubwürdig.",
      todo: [
        "Jede Frage laut beantworten. Zwei oder drei Sätze reichen.",
        "Diese Zahlen auswendig lernen: wie viel ihr investiert habt, wie viel davon schon ausgegeben ist, wie viel Umsatz ihr erwartet, wie viele Leute ihr einstellen wollt.",
        "Immer bei der Wahrheit und beim Businessplan bleiben. Lieber kurz nachschauen als raten.",
      ],
      scripts: [
        {
          title: "Fragen, die oft kommen",
          kind: "inperson",
          lines: [
            { en: "What does your company do?", de: "Was macht eure Firma? (Food Truck mit deutschem Essen, wo, für wen)" },
            { en: "How much did you invest? What did you buy?", de: "Wie viel habt ihr investiert? Was habt ihr gekauft?" },
            { en: "Where does the money come from?", de: "Woher kommt das Geld? (Ersparnisse, Verkauf, mit Belegen)" },
            { en: "Why Georgia?", de: "Warum Georgia?" },
            { en: "How many people will you hire?", de: "Wie viele Leute wollt ihr einstellen?" },
            { en: "What is your job in the company?", de: "Was ist deine Aufgabe in der Firma?" },
            { en: "Do you have experience with food?", de: "Habt ihr Erfahrung mit Essen und Gastronomie?" },
            { en: "How much money do you expect to make in the first year?", de: "Wie viel Umsatz erwartet ihr im ersten Jahr?" },
          ],
        },
        {
          title: "Wenn ihr etwas nicht versteht",
          kind: "inperson",
          lines: [
            { en: "Sorry, can you repeat that, please?", de: "Entschuldigung, können Sie das bitte wiederholen?" },
            { en: "Can you speak more slowly, please?", de: "Können Sie bitte langsamer sprechen?" },
            { en: "May I answer in German?", de: "Darf ich auf Deutsch antworten?" },
            { en: "One moment, I will check our business plan.", de: "Einen Moment, ich schaue in unserem Businessplan nach." },
          ],
        },
      ],
    },
    {
      id: "frankfurt-reise",
      phase: "jetzt",
      title: "Die Reise nach Frankfurt planen",
      summary: "Flug, Hotel und Rückflug. Plant ein paar Tage Puffer ein.",
      why: "Wenn das Visum genehmigt ist, behält das Konsulat eure Pässe ein paar Tage, um das Visum einzukleben. Ohne Pass könnt ihr nicht zurückfliegen.",
      where: [{ ref: "consulate" }],
      todo: [
        "Flug nach Deutschland buchen. Spätestens am 11. November ankommen.",
        "Hotel in Frankfurt für die Nacht vor dem Termin buchen.",
        "Rückflug erst buchen, wenn der Anwalt sagt, wann die Pässe zurückkommen. Oder ein Ticket nehmen, das man umbuchen kann.",
        "In der Terminbestätigung nachlesen, was ihr mit hineinnehmen dürft (Taschen, Handys).",
        "Am Termintag 30 Minuten vorher da sein.",
      ],
      cautions: [
        "Es gibt eine neue US-Gebühr von mindestens 250 Dollar pro Visum („Visa Integrity Fee“). Nicht jedes Konsulat verlangt sie schon. Fragt euren Anwalt, ob ihr sie in Frankfurt zahlen müsst.",
      ],
      sources: [{ title: "Neue Visumsgebühr: aktueller Stand", url: "https://www.ellis.com/resources/visa-integrity-fee" }],
    },
    {
      id: "cfsm-zertifikat",
      phase: "jetzt",
      title: "Den Hygiene-Kurs mit Prüfung machen",
      summary: "Eine Person in eurer Firma braucht ein Hygiene-Zertifikat. Ohne das gibt es keine Genehmigung.",
      why: "In Georgia muss jeder Betrieb mit Essen, auch ein Food Truck, einen „Certified Food Safety Manager“ haben. Das ist jemand, der einen Kurs gemacht und eine Prüfung bestanden hat.",
      todo: [
        "Entscheiden, wer die Prüfung macht ({{cfsmName}}).",
        "Kurs buchen, zum Beispiel „ServSafe Manager“ auf servsafe.com.",
        "Lernen. Das Lernbuch gibt es auch gedruckt.",
        "Die Prüfung machen, online oder in einem Prüfungszentrum.",
        "Das Zertifikat ausdrucken und zwei Kopien machen.",
      ],
      prepare: [
        "Die Prüfung gibt es leider nicht auf Deutsch. Ihr müsst sie auf Englisch machen.",
        "Fragt vorher, ob ihr ein Wörterbuch benutzen dürft (fertige E-Mail unten).",
        "Fragt das Gesundheitsamt, welche Prüfungen es akzeptiert. Manche Anbieter haben andere Sprachen.",
      ],
      emails: [
        {
          title: "Frage an ServSafe: Wörterbuch und Sprache",
          to: "",
          subject: "ServSafe Manager exam: question from a German speaker",
          body:
            "Hello,\n\nI want to take the ServSafe Manager exam. My first language is German. My English is not very good.\n\n" +
            "1. Is there a German version of the exam?\n" +
            "2. May I use a printed German-English dictionary during the exam?\n" +
            "3. Can I get more time because English is not my first language?\n\n" +
            "Thank you,\n{{cfsmName}}\n{{businessName}}, Georgia\n{{email}}",
          de: "Auf Deutsch: Ich frage, ob es die Prüfung auf Deutsch gibt, ob ich ein Wörterbuch benutzen darf und ob ich mehr Zeit bekommen kann. Am einfachsten über das Kontaktformular auf servsafe.com schicken.",
        },
      ],
      sources: [
        { title: "Georgia: Regel zum Hygiene-Zertifikat", url: "https://www.law.cornell.edu/regulations/georgia/Ga-Comp-R-Regs-R-511-6-1-.01" },
        { title: "ServSafe: in welchen Sprachen es die Prüfung gibt", url: "https://www.servsafe.com/ServSafe-Manager/FAQs/What-languages-is-the-ServSafe-exam-available-in" },
      ],
    },
    {
      id: "gesundheitsamt-erstgespraech",
      phase: "jetzt",
      title: "Offene Fragen beim Gesundheitsamt klären",
      summary: "Ihr habt schon mit dem Amt gesprochen. Jetzt klärt ihr noch ein paar Punkte, damit der Antrag später nicht hängen bleibt.",
      why: "Lamar und Upson County teilen sich ein Gesundheitsamt. Darum gilt das Formular aus Thomaston, das ihr schon habt, auch für euch. Die Dame hat geraten, gleich alles für Lamar County zu beantragen. Das spart Zeit und Geld.",
      where: [{ ref: "lamarEH" }, { ref: "upsonEH" }],
      todo: [
        "Den Namen der Dame, mit der ihr gesprochen habt, in die Notizen schreiben.",
        "Anrufen oder vorbeigehen. Die Sätze unten helfen euch.",
        "Die Antworten in die Notizen schreiben.",
        "Danach die fertige E-Mail schicken, damit ihr die Antworten schriftlich habt.",
        "Die Antwort vom Amt unten hochladen.",
      ],
      upload: "Bitte ladet hier die Antwort vom Gesundheitsamt hoch, sobald sie da ist. Vor allem die Bestätigung, dass die Küche auf eurem Grundstück als Stützpunkt in Ordnung ist. Eine E-Mail als PDF oder ein Bildschirmfoto reicht.",
      scripts: [
        {
          title: "Anruf beim Gesundheitsamt",
          kind: "call",
          to: "770-358-1483, dann die 2",
          lines: [
            { en: "Hello, my name is {{owner1}}. We talked before about our food truck, {{businessName}}.", de: "Hallo, mein Name ist … Wir haben schon über unseren Food Truck gesprochen." },
            { en: "My English is not perfect. Please speak slowly. Thank you.", de: "Mein Englisch ist nicht perfekt. Bitte sprechen Sie langsam. Danke." },
            { en: "Our kitchen is a separate building on our property. We also live on this property. Is that OK?", de: "Unsere Küche ist ein eigenes Gebäude auf unserem Grundstück. Wir wohnen auch auf dem Grundstück. Ist das in Ordnung?" },
            { en: "Where do we bring the papers? Thomaston or Barnesville?", de: "Wo geben wir die Unterlagen ab? Thomaston oder Barnesville?" },
            { en: "Can we apply before our visa interview on November 12?", de: "Dürfen wir vor unserem Visumstermin am 12. November den Antrag stellen?" },
            { en: "Is the fee still 250 dollars? How can we pay?", de: "Ist die Gebühr noch 250 Dollar? Wie können wir bezahlen?" },
            { en: "Which food safety exam do you accept?", de: "Welche Hygiene-Prüfung akzeptieren Sie?" },
            { en: "Can you send us all the forms by email, please? Our email is {{email}}.", de: "Können Sie uns bitte alle Formulare per E-Mail schicken? Unsere E-Mail ist …" },
            { en: "What is your name, please? In case we have more questions.", de: "Wie ist Ihr Name, bitte? Falls wir noch Fragen haben." },
          ],
        },
      ],
      emails: [
        {
          title: "Die Antworten schriftlich bestätigen lassen",
          to: "",
          subject: "{{businessName}}: our food truck permit, thank you",
          body:
            "Hello,\n\nThank you for your help. We want to make sure we understood everything correctly:\n\n" +
            "- Our kitchen is a separate building on our property at {{baseStreet}}, {{baseCity}}, GA {{baseZip}} (Lamar County). It is OK as our base of operation.\n" +
            "- We bring all papers to [OFFICE].\n" +
            "- We can apply before our visa interview on November 12.\n" +
            "- The fee is [AMOUNT].\n\n" +
            "Please tell us if something is not correct. Can you also send us the application form and the other forms?\n\n" +
            "Thank you very much,\n{{owner1}}, {{businessName}}\n{{phone}}\n{{email}}",
          de: "Auf Deutsch: Danke für Ihre Hilfe. Haben wir richtig verstanden? Die Küche auf unserem Grundstück ist als Stützpunkt in Ordnung. Wir geben in [BÜRO] ab. Wir dürfen vor dem 12. November beantragen. Die Gebühr ist [BETRAG]. Bitte sagen Sie uns, wenn etwas nicht stimmt.\n\nWichtig: Vor dem Senden die Stellen in eckigen Klammern ausfüllen. Und alles streichen, was die Dame anders gesagt hat. Die E-Mail-Adresse bekommt ihr am Telefon.",
        },
      ],
      sources: [{ title: "Gesundheitsamt Lamar County", url: "https://www.district4health.org/clinic-sites/lamar-county/" }],
    },
    {
      id: "standort-zoning",
      phase: "jetzt",
      title: "Beim Bauamt fragen, ob ihr auf eurem Grundstück arbeiten dürft",
      summary: "Das Bauamt muss auf eurem Vorab-Formular unterschreiben, dass die Küche und der Truck auf eurem Grundstück erlaubt sind.",
      why: "Ohne diese Unterschrift lehnt das Gesundheitsamt den Antrag ab. Weil ihr auf dem Grundstück auch wohnt, prüft das Bauamt, ob dort ein Gewerbe erlaubt ist.",
      where: [{ ref: "lamarPlanning" }],
      todo: [
        "Klären, ob euer Grundstück zu einer Stadt gehört (zum Beispiel Milner oder Barnesville). Wenn ja, ist das Bauamt der Stadt zuständig. Wenn nein, das Bauamt vom County.",
        "Die fertige E-Mail unten an das Bauamt schicken.",
        "Mit dem Vorab-Formular hingehen. Die Seite „Step 1, Zoning & Base of Operation“ füllt die Beamtin aus und unterschreibt.",
        "Gleich auch den Antrag für den Gewerbeschein mitnehmen (nächster Schritt).",
      ],
      bring: [
        "Das Vorab-Formular",
        "Den Kaufvertrag oder Grundsteuerbescheid für das Grundstück",
        "Die Flurstücknummer (Parcel ID), falls ihr sie habt",
      ],
      emails: [
        {
          title: "Anfrage an das Bauamt",
          to: "abuice@lamarcountyga.com",
          subject: "Question about our property at {{baseStreet}}: food truck kitchen",
          body:
            "Dear Ms. Buice,\n\nWe are starting a food truck business called {{businessName}}. We own the property at {{baseStreet}}, {{baseCity}}, GA {{baseZip}} (parcel {{baseParcel}}).\n\n" +
            "On the property there is a separate kitchen building. It is not part of our home. We want to use it to prepare food for our truck. We also want to park the truck there, fill water, empty wastewater, clean the truck and store supplies. We will not sell food or have customers there.\n\n" +
            "The health department needs your approval on their form.\n\n" +
            "1. Is this allowed on our property?\n" +
            "2. Can you sign the zoning part of the health department form? When can we come?\n" +
            "3. Do we need a business license or another permit from you?\n\n" +
            "Our English is not very good, so email is easiest for us. Thank you very much.\n\n{{owner1}}\n{{businessName}}\n{{phone}}\n{{email}}",
          de: "Auf Deutsch: Uns gehört das Grundstück. Darauf steht eine eigene Küche, getrennt vom Wohnhaus. Dort wollen wir für den Truck vorbereiten, den Truck abstellen, Wasser auffüllen, Abwasser ablassen, putzen und lagern. Verkauf und Kunden gibt es dort nicht. Wir fragen: (1) Ist das erlaubt? (2) Können Sie das Formular vom Gesundheitsamt unterschreiben, und wann können wir kommen? (3) Brauchen wir einen Gewerbeschein oder eine andere Genehmigung?",
        },
      ],
      upload: "Bitte ladet hier die Antwort vom Bauamt hoch: die E-Mail (als PDF oder Bildschirmfoto), einen Brief oder ein Foto vom unterschriebenen Formular. Dann ist schriftlich festgehalten, dass die Küche auf eurem Grundstück in Ordnung ist.",
      sources: [
        { title: "Bauamt Lamar County", url: "https://www.lamarcountyga.com/departments/buildingzoning-department/" },
        { title: "Gesundheitsamt Georgia: häufige Fragen zu Food Trucks", url: "https://dph.georgia.gov/document/document/mobile-food-frequency-asked-questions/download" },
      ],
    },
    {
      id: "gewerbeschein-lamar",
      phase: "jetzt",
      title: "Den Gewerbeschein beantragen",
      summary: "Eure Firma braucht einen Gewerbeschein vom County, in dem eure Küche steht. Das ist Lamar County.",
      why: "Das Vorab-Formular verlangt, dass ihr den Gewerbeschein beim Bauamt beantragt. Er muss jedes Jahr bis zum 31. März erneuert werden.",
      where: [{ ref: "lamarPlanning" }],
      todo: [
        "Das Antragsformular „LC Business License“ auf lamarcountyga.com herunterladen.",
        "Mit der Ausfüllhilfe unten ausfüllen.",
        "Zum Bauamt bringen, am besten gleich beim Termin für die Unterschrift auf dem Vorab-Formular.",
        "Die Gebühr bezahlen. Vorher fragen, wie viel.",
      ],
      bring: [
        "Den ausgefüllten Antrag",
        "Pass oder Ausweis mit Foto",
        "Die Erklärung zum Aufenthalt, beim Notar unterschrieben, falls das Amt sie verlangt (siehe Schritt „Erklärung beim Notar“)",
        "Bargeld (passend) oder einen Scheck",
      ],
      scripts: [
        {
          title: "Am Schalter",
          kind: "inperson",
          lines: [
            { en: "Hello, we want to apply for a business license. Our kitchen for the food truck is at {{baseStreet}}.", de: "Hallo, wir möchten einen Gewerbeschein beantragen. Unsere Küche für den Food Truck ist an der …" },
            { en: "We are German. We are here as visitors now. Our visa interview is on November 12. Can we apply now?", de: "Wir sind Deutsche und gerade als Besucher hier. Unser Visumstermin ist am 12. November. Dürfen wir jetzt schon beantragen?" },
            { en: "How much is the fee? Can we pay by check?", de: "Wie hoch ist die Gebühr? Können wir mit Scheck bezahlen?" },
          ],
        },
      ],
      forms: [
        {
          title: "Gewerbeschein Lamar County",
          url: "https://www.lamarcountyga.com/?p=918",
          note: "Das sind die üblichen Angaben. Auf dem Formular können die Felder etwas anders heißen.",
          fields: [
            { label: "Business name", value: "{{businessName}}" },
            { label: "Business location", value: "{{baseStreet}}, {{baseCity}}, GA {{baseZip}}" },
            { label: "Mailing address", value: "{{street}}, {{city}}, {{state}} {{zip}}" },
            { label: "Owner(s)", value: "{{owner1}}; {{owner2}}" },
            { label: "Type of business", value: "{{legalForm}}" },
            { label: "Federal ID (EIN)", value: "{{ein}}" },
            { label: "Description of business", value: "Kitchen and base for a food truck. No sales at this location." },
            { label: "Phone", value: "{{phone}}" },
            { label: "Email", value: "{{email}}" },
          ],
        },
      ],
      sources: [{ title: "Lamar County: Gewerbeschein", url: "https://www.lamarcountyga.com/?p=918" }],
    },
    {
      id: "standort-eigentuemer",
      phase: "jetzt",
      title: "Klären, wem das Grundstück gehört",
      summary: "Wenn das Grundstück euch privat gehört, die Genehmigung aber für die Firma ist, braucht ihr vielleicht eine Erlaubnis an eure eigene Firma.",
      why: "Für das Amt sind ihr und eure Firma zwei verschiedene „Personen“. Gehört das Grundstück nicht der Firma, will das Amt eine schriftliche Erlaubnis vom Eigentümer sehen. Auch wenn das ihr selbst seid.",
      todo: [
        "Im Kaufvertrag oder Grundsteuerbescheid nachsehen, wer als Eigentümer steht. Unter „Unsere Daten“ eintragen.",
        "Steht dort die Firma: fertig. Eine Kopie für den Antrag machen.",
        "Steht dort ihr privat: das Gesundheitsamt fragen (Sätze unten).",
        "Wenn das Amt eine Erlaubnis will: das Formular bei einem Notar unterschreiben.",
      ],
      scripts: [
        {
          title: "Frage an das Gesundheitsamt",
          kind: "call",
          to: "770-358-1483, dann die 2",
          lines: [
            { en: "The property belongs to us personally. The permit will be for our company, {{businessName}}.", de: "Das Grundstück gehört uns privat. Die Genehmigung ist für unsere Firma." },
            { en: "Do we need to sign the property owner form for our own company?", de: "Müssen wir das Eigentümer-Formular für unsere eigene Firma unterschreiben?" },
            { en: "Does a notary need to sign it too?", de: "Muss es auch ein Notar unterschreiben?" },
          ],
        },
      ],
      forms: [
        {
          title: "Erlaubnis des Eigentümers (nur wenn das Amt sie will)",
          url: "https://dph.georgia.gov/environmental-health/food-service",
          note: "Auf dem Vorab-Formular heißt es „Affidavit“, beim Staat „Property Use Agreement“. Erst beim Notar unterschreiben.",
          fields: [
            { label: "Property owner name", value: "{{baseOwner}}" },
            { label: "Property address", value: "{{baseStreet}}, {{baseCity}}, GA {{baseZip}}" },
            { label: "Parcel ID", value: "{{baseParcel}}" },
            { label: "Business name", value: "{{businessName}}" },
            { label: "Phone", value: "{{phone}}" },
            { label: "Use of property", value: "Kitchen and base for a food truck: food preparation, parking, fresh water, wastewater, cleaning and storage." },
          ],
        },
      ],
    },
    {
      id: "standort-wasser",
      phase: "jetzt",
      title: "Das Wasser klären",
      summary: "Kommt euer Wasser aus der öffentlichen Leitung, ist alles einfach. Habt ihr einen eigenen Brunnen, muss das Wasser getestet werden.",
      why: "Das Wasser im Truck muss sauber sein und von eurem Stützpunkt kommen. Das Amt will das sehen.",
      todo: [
        "Herausfinden: Öffentliches Wasser oder eigener Brunnen? Unter „Unsere Daten“ eintragen.",
        "Öffentliches Wasser: im Vorab-Formular „Public Water“ ankreuzen. Fertig.",
        "Eigener Brunnen: beim Extension Office anrufen (Sätze unten) und den Test bestellen.",
        "Eigener Brunnen: auf das Ergebnis warten. Ist etwas nicht in Ordnung, muss es repariert und neu getestet werden.",
        "Eigener Brunnen: das Ergebnis kopieren und zum Antrag legen.",
      ],
      scripts: [
        {
          title: "Anruf zum Wassertest (nur bei Brunnen)",
          kind: "call",
          to: "Extension Office, 706-647-8989 (Nummer aus dem Vorab-Formular)",
          lines: [
            { en: "Hello, I need a full well water test for the health department.", de: "Hallo, ich brauche einen kompletten Brunnenwasser-Test für das Gesundheitsamt." },
            { en: "I need the bacteria test and the EPD W-33 test.", de: "Ich brauche den Bakterien-Test und den EPD-W-33-Test." },
            { en: "How do I get the bottles? How much does it cost?", de: "Wie bekomme ich die Flaschen? Was kostet es?" },
            { en: "How long does it take?", de: "Wie lange dauert es?" },
          ],
        },
      ],
    },
    {
      id: "standort-ausbau",
      phase: "jetzt",
      title: "Abwasser-Stelle und Wasserhahn einbauen",
      summary: "An eurem Stützpunkt braucht ihr mindestens eine Stelle, um das Abwasser aus dem Truck abzulassen, und einen Trinkwasserhahn.",
      why: "Ohne das nimmt das Amt keinen Antrag an. Beides muss genau dort sein, wo der Truck steht.",
      todo: [
        "Das Gesundheitsamt fragen, welche Bauart es akzeptiert. Erst dann bauen.",
        "Einen Klempner um ein Angebot bitten (Sätze unten).",
        "Einbauen lassen.",
        "Zwei Fotos von der fertigen Abwasser-Stelle machen. Die braucht ihr für den Antrag.",
      ],
      prepare: [
        "Kühlschränke und Regale an eurem Stützpunkt nur für den Truck benutzen. Keine privaten Lebensmittel.",
        "Die Spüle im Wohnhaus zählt nicht. Alles muss im Truck oder in der Küche sein.",
      ],
      scripts: [
        {
          title: "Anruf beim Klempner",
          kind: "call",
          to: "Ein Klempner aus der Gegend (Englisch: „plumber“)",
          lines: [
            { en: "Hello, I need a price for a dump station and a water tap for a food truck.", de: "Hallo, ich brauche ein Angebot für eine Abwasser-Stelle und einen Wasserhahn für einen Food Truck." },
            { en: "It must pass the health department inspection.", de: "Es muss die Kontrolle vom Gesundheitsamt bestehen." },
            { en: "The address is {{baseStreet}}, {{baseCity}}. When can you come?", de: "Die Adresse ist … Wann können Sie kommen?" },
            { en: "Do we need a permit from the county for this work?", de: "Brauchen wir für diese Arbeit eine Genehmigung vom County?" },
          ],
        },
      ],
    },
    {
      id: "fettentsorgung",
      phase: "jetzt",
      title: "Altöl-Abholung organisieren",
      summary: "Nur wenn ihr eine Fritteuse oder Grillplatte habt: Ihr braucht einen Vertrag mit einer Firma, die altes Öl abholt.",
      todo: [
        "Eine Firma in der Gegend suchen. Suchwort: „used cooking oil pickup“.",
        "Vertrag abschließen.",
        "Eine Kopie für den Antrag machen.",
      ],
      scripts: [
        {
          title: "Anruf bei der Altöl-Firma",
          kind: "call",
          to: "Firma für Altöl-Abholung",
          lines: [
            { en: "Hello, we have a food truck with a fryer. We are in {{baseCity}}, Lamar County.", de: "Hallo, wir haben einen Food Truck mit Fritteuse. Wir sind in …, Lamar County." },
            { en: "Do you pick up used oil here? Do you give us a container?", de: "Holen Sie hier Altöl ab? Bekommen wir einen Behälter?" },
            { en: "We need a written agreement for the health department. Can you send it?", de: "Wir brauchen einen schriftlichen Vertrag für das Gesundheitsamt. Können Sie ihn schicken?" },
          ],
        },
      ],
    },
    {
      id: "truck-ausstattung",
      phase: "jetzt",
      title: "Den Truck prüfen, bevor ihr kauft",
      summary: "Der Truck muss bestimmte Dinge haben. Prüft das vor dem Kauf. Umbauen ist teuer.",
      why: "Das Gesundheitsamt schaut sich Becken, Wassertanks, Warmwasser und Kühlung genau an.",
      todo: [
        "Spüle mit drei Becken (nur zum Geschirrspülen).",
        "Ein eigenes Handwaschbecken (nur zum Händewaschen).",
        "Je nach Essen: ein Becken für Gemüse und eins für Fleisch.",
        "Warmes und kaltes Wasser an jedem Becken, mit Druck aus dem Hahn.",
        "Der Abwassertank ist mindestens 15 Prozent größer als der Frischwassertank.",
        "Glatte Flächen, die man gut putzen kann (zum Beispiel Edelstahl).",
        "Vom Verkäufer die Datenblätter aller Geräte geben lassen (Kühlschrank, Herd, Fritteuse, Tanks, Pumpe, Boiler, Generator).",
        "Fotos vom Truck machen, innen und außen.",
        "Eine einfache Zeichnung vom Truck machen, auf der alle Geräte eingezeichnet sind.",
      ],
      scripts: [
        {
          title: "Fragen an den Verkäufer",
          kind: "inperson",
          lines: [
            { en: "Did this truck have a health permit in Georgia before?", de: "Hatte dieser Truck schon eine Genehmigung vom Gesundheitsamt in Georgia?" },
            { en: "How big are the water tanks, in gallons?", de: "Wie groß sind die Wassertanks, in Gallonen?" },
            { en: "Is there hot and cold water at every sink?", de: "Gibt es an jedem Becken warmes und kaltes Wasser?" },
            { en: "Can you give me the spec sheets for all equipment?", de: "Können Sie mir die Datenblätter für alle Geräte geben?" },
            { en: "Do I get the title when I pay?", de: "Bekomme ich den Fahrzeugbrief, wenn ich bezahle?" },
          ],
        },
      ],
      sources: [
        { title: "Gesundheitsamt Georgia: Antrag für Food Trucks (zeigt alle Anforderungen)", url: "https://dph.georgia.gov/document/document/dph-mobile-food-unit-permit-application-pdf/download" },
      ],
    },
    {
      id: "vorab-antrag",
      phase: "jetzt",
      title: "Das Vorab-Formular fertig machen",
      summary: "Das Formular aus Thomaston, das ihr schon habt. Erst wenn alles darauf erledigt und unterschrieben ist, dürft ihr den Hauptantrag abgeben.",
      why: "Auf dem Formular steht: Wer einen Teil nicht erfüllt, bekommt keine Genehmigung. Ein halb fertiges Formular wird abgelehnt.",
      where: [{ ref: "lamarEH" }, { ref: "upsonEH" }],
      todo: [
        "Die zwei Regelhefte vom Staat herunterladen und durchblättern (Link unten). Am einfachsten mit einem Übersetzungsprogramm wie DeepL. Dann auf dem Formular unterschreiben, dass ihr sie gelesen habt.",
        "Seite „Step 1“: eure Unterschrift. Dazu die Unterschrift vom Bauamt mit „YES“.",
        "Falls nötig: die Erlaubnis des Eigentümers, beim Notar unterschrieben (Schritt „Wem gehört das Grundstück“).",
        "Seite „Step 2“: unterschreiben und das Wasser ankreuzen. Bei Brunnen: das Testergebnis dazulegen.",
        "Seite „Step 3“: zwei Fotos der fertigen Abwasser-Stelle dazulegen.",
        "Seite „Step 4“: eine Kopie vom Altöl-Vertrag dazulegen (nur mit Fritteuse oder Grillplatte).",
        "Jede Seite noch einmal prüfen: Steht überall Unterschrift und Datum?",
        "Alles kopieren.",
      ],
      prepare: [
        "Das Datum schreibt man in den USA so: erst Monat, dann Tag, dann Jahr. Der 20. Oktober 2026 ist 10/20/2026.",
        "Felder für Beamte („Official“) lasst ihr leer.",
      ],
      forms: [
        {
          title: "Vorab-Formular (Mobile Food Units Pre-Application)",
          note: "Das Formular habt ihr schon auf Papier.",
          fields: [
            { label: "Signature / Date", value: "", hint: "Selbst unterschreiben. Datum so: 10/20/2026" },
            { label: "Location Approved for Business? / Official", value: "", hint: "Füllt nur das Bauamt aus" },
            { label: "Which type of Water Supply will be used?", value: "{{baseWater}}", hint: "„Public Water“ oder „Private Well“ ankreuzen" },
            { label: "Well test (nur bei Brunnen)", value: "Total well analysis: coliform and fecal coliform bacteria, and EPD test W-33" },
          ],
        },
      ],
      sources: [{ title: "Regelhefte und Formulare vom Staat Georgia", url: "https://dph.georgia.gov/environmental-health/food-service" }],
    },
    {
      id: "notar-save",
      phase: "jetzt",
      title: "Die Erklärung zum Aufenthalt beim Notar unterschreiben",
      summary: "Georgia will schriftlich, dass ihr legal im Land seid. Ihr unterschreibt dafür eine Erklärung vor einem Notar.",
      why: "Ohne diese Erklärung gibt es in Georgia keine Genehmigung und keinen Gewerbeschein. Der Antrag des Gesundheitsamts verlangt sie ausdrücklich.",
      todo: [
        "Das Formular vom Gesundheitsamt und vom Bauamt geben lassen. Oft hat jedes Amt sein eigenes.",
        "Pass und ausgedruckten Einreisestempel (I-94) kopieren.",
        "Zum Notar gehen. Viele Banken und UPS-Läden haben einen. Erst dort unterschreiben.",
        "Die Kopie von Pass und I-94 an die Erklärung heften.",
        "Für jedes Amt ein unterschriebenes Original.",
      ],
      bring: [
        "Das Formular, noch nicht unterschrieben",
        "Euren Reisepass",
        "Den ausgedruckten Einreisestempel (I-94)",
      ],
      forms: [
        {
          title: "Erklärung zum Aufenthalt (Verification of Lawful Presence)",
          url: "https://dph.georgia.gov/sites/dph.georgia.gov/files/VerificationLawfulResidency061814.pdf",
          fields: [
            { label: "Status (ankreuzen)", value: "I am a qualified alien or non-immigrant", hint: "Die dritte Möglichkeit auf dem Formular" },
            { label: "Alien number", value: "", hint: "Habt ihr nicht. Fragt das Amt, ob ihr die I-94-Nummer eintragen sollt." },
            { label: "Secure and verifiable document", value: "Foreign passport with Form I-94" },
            { label: "Printed name", value: "{{owner1}}" },
          ],
        },
      ],
      cautions: [
        "Das Formular fragt nach einer „Alien Number“. Die habt ihr nicht. Fragt beim Amt, was ihr stattdessen eintragt. Nach dem Visum müsst ihr die Erklärung eventuell noch einmal mit dem neuen Visum machen.",
      ],
    },
    {
      id: "antrag-dph",
      phase: "jetzt",
      title: "Den Hauptantrag ausfüllen",
      summary: "Der eigentliche Antrag für die Genehmigung. Mit der Ausfüllhilfe unten geht das schnell. Dazu kommt ein Stapel Anlagen.",
      why: "Wenn eine Anlage fehlt, dauert alles länger. Darum alles zusammen abgeben.",
      todo: [
        "Das Vorab-Formular ist fertig (Schritt davor).",
        "Den Antrag vom Gesundheitsamt geben lassen oder herunterladen (Link unten).",
        "Mit der Ausfüllhilfe unten ausfüllen.",
        "Anlage: eure Speisekarte",
        "Anlage: zwei Fotos vom Truck, innen und außen",
        "Anlage: Zeichnung vom Truck mit allen Geräten",
        "Anlage: Datenblätter aller Geräte",
        "Anlage: Erklärung zum Aufenthalt, beim Notar unterschrieben, mit Kopie von Pass und I-94",
        "Anlage: die Unterschrift vom Bauamt (steht im Vorab-Formular)",
        "Anlage: Formular „Mobile Food Unit Location Form“ (wo ihr verkaufen wollt)",
        "Anlage: Formular „Toilet Use Agreement“ (eine Toilette in der Nähe eurer Verkaufsplätze)",
        "Anlage: Erlaubnis des Eigentümers, falls das Amt sie will",
        "Anlage: Kopie vom Hygiene-Zertifikat",
        "Von allem eine Kopie für euch machen.",
      ],
      prepare: [
        "Fragen zur Technik (Pumpe, Boiler, Tanks) beantwortet ihr mit den Datenblättern vom Truck.",
        "Die Formulare für Verkaufsplatz und Toilette findet ihr beim Staat Georgia (Link unten).",
      ],
      forms: [
        {
          title: "Hauptantrag (Mobile Food Unit Permit Application)",
          url: "https://dph.georgia.gov/document/document/dph-mobile-food-unit-permit-application-pdf/download",
          note: "Die Felder stehen in derselben Reihenfolge wie im Formular.",
          fields: [
            { label: "Reason for application", value: "New Application" },
            { label: "Name of Unit", value: "{{unitName}}" },
            { label: "Unit Mailing Address", value: "{{street}}, {{city}}, {{state}} {{zip}}", hint: "Nach dem Umzug der Firma: die neue Adresse" },
            { label: "Mobile Unit Vehicle License # and VIN", value: "{{unitPlate}} / {{unitVin}}" },
            { label: "Name of Base of Operation", value: "{{baseName}}" },
            { label: "Base of Operation Owner", value: "{{baseOwner}}" },
            { label: "Base of Operation Permit #", value: "", hint: "Leer lassen" },
            { label: "County", value: "Lamar" },
            { label: "Base of Operation Mailing Address", value: "{{baseStreet}}, {{baseCity}}, GA {{baseZip}}" },
            { label: "Unit Manager", value: "{{cfsmName}}" },
            { label: "Unit Manager Email / Phone", value: "{{email}} / {{phone}}" },
            { label: "Unit Manager's Supervisor", value: "{{owner1}}" },
            { label: "Billing Contact Name", value: "{{owner1}}" },
            { label: "Billing Address", value: "{{street}}, {{city}}, {{state}} {{zip}}" },
            { label: "Billing Contact Email / Phone", value: "{{email}} / {{phone}}" },
            { label: "Business Ownership Type", value: "{{legalForm}}" },
            { label: "Owners and officers", value: "{{owner1}} ({{owner1Title}}); {{owner2}} ({{owner2Title}})" },
            { label: "Freshwater tank capacity", value: "{{freshTank}} gallons" },
            { label: "Wastewater tank capacity", value: "{{wasteTank}} gallons" },
            { label: "Method for removing wastewater", value: "Every day we drain the wastewater tank at the dump station at our base, {{baseStreet}}, {{baseCity}}. Then we rinse the tank with clean water from the base tap." },
            { label: "Name of Owner (Print)", value: "{{owner1}}" },
            { label: "Title", value: "{{owner1Title}}" },
            { label: "Address", value: "{{street}}, {{city}}, {{state}} {{zip}}" },
            { label: "Phone #", value: "{{phone}}" },
          ],
        },
      ],
      sources: [
        { title: "Hauptantrag (PDF)", url: "https://dph.georgia.gov/document/document/dph-mobile-food-unit-permit-application-pdf/download" },
        { title: "Weitere Formulare (Verkaufsplatz, Toilette, Eigentümer)", url: "https://dph.georgia.gov/environmental-health/food-service" },
      ],
    },
    {
      id: "antrag-einreichen",
      phase: "jetzt",
      title: "Den Antrag abgeben und bezahlen",
      summary: "Alles zusammen persönlich beim Gesundheitsamt abgeben. Dann prüft das Amt eure Unterlagen.",
      where: [{ ref: "lamarEH" }, { ref: "upsonEH" }],
      bring: [
        "Vorab-Formular und Hauptantrag mit allen Anlagen (Originale)",
        "Eine Kopie von allem für euch",
        "Geld für die Gebühr: laut Vorab-Formular 250 Dollar. Diese Gebühr bekommt ihr nicht zurück.",
      ],
      scripts: [
        {
          title: "Am Schalter",
          kind: "inperson",
          lines: [
            { en: "Hello, we want to hand in our application for a food truck permit.", de: "Hallo, wir möchten unseren Antrag für die Food-Truck-Genehmigung abgeben." },
            { en: "Can you check that everything is complete, please?", de: "Können Sie bitte prüfen, ob alles vollständig ist?" },
            { en: "How long does it take?", de: "Wie lange dauert es?" },
            { en: "What happens next? When can you look at the truck?", de: "Wie geht es weiter? Wann können Sie sich den Truck ansehen?" },
          ],
        },
      ],
    },

    // ================= 2. VISUM =================
    {
      id: "visum-termin",
      phase: "visum",
      title: "Der Termin am 12. November",
      summary: "Früh da sein, die Mappe dabei haben, ruhig antworten.",
      where: [{ ref: "consulate" }],
      todo: [
        "Die Mappe mit allen Unterlagen mitnehmen.",
        "Nur mitnehmen, was laut Terminbestätigung erlaubt ist.",
        "Nach dem Gespräch fragen, wann und wie ihr die Pässe zurückbekommt.",
      ],
      scripts: [
        {
          title: "Am Schalter",
          kind: "inperson",
          lines: [
            { en: "Good morning. We have an appointment for an E-2 visa.", de: "Guten Morgen. Wir haben einen Termin für ein E-2-Visum." },
            { en: "Here are our passports and our papers.", de: "Hier sind unsere Pässe und unsere Unterlagen." },
            { en: "When do we get our passports back?", de: "Wann bekommen wir unsere Pässe zurück?" },
          ],
        },
      ],
    },
    {
      id: "einreise-i94",
      phase: "visum",
      title: "Visum und Einreisestempel prüfen",
      summary: "Wenn die Pässe zurück sind: das Visum prüfen. Nach der Einreise in die USA: den Einreisestempel (I-94) ausdrucken und prüfen.",
      why: "Der Einreisestempel ist euer wichtigster Nachweis. Ihr braucht ihn für die Sozialversicherungsnummer, den Führerschein und die Ämter. Fehler sind später schwer zu korrigieren.",
      todo: [
        "Im Visum prüfen: Sind Name und Geburtsdatum richtig geschrieben?",
        "Im Visum prüfen: Steht dort „E-2“ und der richtige Firmenname?",
        "Ein Foto vom Visum an den Anwalt schicken.",
        "Nach der Einreise in die USA: auf i94.cbp.dhs.gov den Einreisestempel für jede Person ausdrucken.",
        "Prüfen: Beim Hauptantragsteller steht „E2“. Beim Ehepartner steht „E2S“.",
        "Das Datum „Admit Until Date“ in die Notizen schreiben. Bis dahin dürft ihr bleiben (meist 2 Jahre).",
        "Wenn etwas falsch ist: sofort den Anwalt anrufen.",
      ],
      sources: [
        { title: "Einreisestempel I-94 abrufen", url: "https://i94.cbp.dhs.gov/" },
        { title: "USCIS: E-2S im Einreisestempel erlaubt dem Ehepartner das Arbeiten", url: "https://www.uscis.gov/sites/default/files/document/policy-manual-updates/20220318-EmploymentAuthorization.pdf" },
      ],
    },

    // ================= 3. ANKUNFT =================
    {
      id: "adresse-aendern",
      phase: "ankunft",
      title: "Umzug auf die Tom Bell Road: neue Adresse überall melden",
      summary: "Nach dem Visum zieht ihr und eure Firma von Pike County auf euer Grundstück in Lamar County. Die neue Adresse müsst ihr an mehreren Stellen melden.",
      why: "Ämter schicken Briefe an die Adresse, die sie kennen. Wenn die Adressen nicht überall gleich sind, gibt es Rückfragen und Verzögerungen.",
      todo: [
        "Den Anwalt fragen, ob die neue Adresse für das Visum gemeldet werden muss.",
        "Beim Staat Georgia ändern: online auf ecorp.sos.ga.gov (Adresse der Firma, „principal office address“).",
        "Beim Finanzamt (IRS) ändern: Formular 8822-B ausfüllen (Ausfüllhilfe unten) und per Post schicken.",
        "Im Steuerkonto von Georgia ändern (gtc.dor.ga.gov).",
        "Bank, Versicherungen und Steuerberater die neue Adresse sagen.",
        "Dem Gesundheitsamt und dem Bauamt die neue Postadresse sagen.",
        "Bei der Post einen Nachsendeauftrag stellen (auf usps.com, „Change of Address“).",
        "Strom, Wasser und Internet an der Tom Bell Road auf eure Namen anmelden. Diese Rechnungen braucht ihr später als Adressnachweis für den Führerschein.",
        "Unter „Unsere Daten“ die jetzige Firmenadresse durch die neue ersetzen.",
      ],
      forms: [
        {
          title: "Adressänderung beim Finanzamt (IRS Form 8822-B)",
          url: "https://www.irs.gov/forms-pubs/about-form-8822-b",
          fields: [
            { label: "Check all boxes this change affects", value: "Business location; Employment, excise, income, and other business returns" },
            { label: "Business name", value: "{{businessName}}" },
            { label: "Employer identification number", value: "{{ein}}" },
            { label: "Old mailing address", value: "{{street}}, {{city}}, {{state}} {{zip}}" },
            { label: "New mailing address", value: "{{baseStreet}}, {{baseCity}}, GA {{baseZip}}" },
            { label: "New business location", value: "{{baseStreet}}, {{baseCity}}, GA {{baseZip}}" },
            { label: "Name and title", value: "{{owner1}}, {{owner1Title}}" },
            { label: "Daytime telephone", value: "{{phone}}" },
          ],
        },
      ],
      sources: [
        { title: "Staat Georgia: Firmenregister", url: "https://ecorp.sos.ga.gov/" },
        { title: "IRS: Formular 8822-B", url: "https://www.irs.gov/forms-pubs/about-form-8822-b" },
      ],
    },
    {
      id: "ssn-beantragen",
      phase: "ankunft",
      title: "Die Sozialversicherungsnummer beantragen",
      summary: "Ihr geht beide zum Social-Security-Büro. Die Nummer braucht ihr für Führerschein, Bank und Steuern.",
      why: "Mit dem neuen Visum dürft ihr arbeiten. Deshalb bekommt ihr jetzt eine Sozialversicherungsnummer (SSN).",
      where: [{ ref: "ssa" }],
      todo: [
        "Das Formular SS-5 herunterladen und zu Hause ausfüllen (Ausfüllhilfe unten).",
        "Das nächste Büro auf der Webseite suchen. Einen Termin unter 1-800-772-1213 machen oder morgens früh hingehen.",
        "Hingehen und den Antrag abgeben. Die Quittung aufheben.",
        "Die Karte kommt nach etwa 2 bis 4 Wochen mit der Post an die Tom Bell Road.",
      ],
      bring: [
        "Reisepass mit dem neuen Visum",
        "Den ausgedruckten Einreisestempel (I-94)",
        "Das ausgefüllte Formular SS-5",
        "Für den Ehepartner: die Heiratsurkunde, falls danach gefragt wird",
      ],
      scripts: [
        {
          title: "Im Büro",
          kind: "inperson",
          lines: [
            { en: "Hello, we want to apply for Social Security numbers. We are from Germany. We have E-2 visas.", de: "Hallo, wir möchten Sozialversicherungsnummern beantragen. Wir kommen aus Deutschland und haben E-2-Visa." },
            { en: "Here are our passports, our I-94 and the forms.", de: "Hier sind unsere Pässe, unsere Einreisestempel und die Formulare." },
            { en: "My wife (husband) has E-2S on the I-94. That means she (he) may work.", de: "Bei meiner Frau (meinem Mann) steht E-2S im Einreisestempel. Das heißt, sie (er) darf arbeiten." },
            { en: "Can I have a receipt, please?", de: "Kann ich bitte eine Quittung bekommen?" },
          ],
        },
      ],
      forms: [
        {
          title: "Antrag auf Sozialversicherungsnummer (SS-5)",
          url: "https://www.ssa.gov/forms/ss-5.pdf",
          note: "Geburtsdatum, Geburtsort und die Namen eurer Eltern schreibt ihr direkt auf das Formular. Diese Seite speichert solche Daten absichtlich nicht.",
          fields: [
            { label: "Name to be shown on card", value: "{{owner1}}", hint: "Genau wie im Pass" },
            { label: "Citizenship", value: "Legal Alien Allowed To Work" },
            { label: "Place of birth", value: "", hint: "Stadt und „Germany“" },
            { label: "Mailing address", value: "{{baseStreet}}, {{baseCity}}, GA {{baseZip}}", hint: "Eure neue Adresse an der Tom Bell Road" },
            { label: "Daytime phone number", value: "{{phone}}" },
            { label: "Has the applicant ever received a Social Security number before?", value: "No" },
          ],
        },
      ],
      cautions: [
        "Manchmal verlangt das Büro beim Ehepartner noch eine Arbeitserlaubnis-Karte. Seit 2022 reicht eigentlich der Einreisestempel mit „E-2S“. Bitte nicht streiten, sondern den Anwalt anrufen.",
      ],
      sources: [
        { title: "Social Security: Nummern für Nicht-Amerikaner", url: "https://www.ssa.gov/pubs/EN-05-10096.pdf" },
        { title: "Social Security: Büro finden", url: "https://secure.ssa.gov/ICON/main.jsp" },
      ],
    },
    {
      id: "fuehrerschein",
      phase: "ankunft",
      title: "Den Führerschein für Georgia machen",
      summary: "Erst anrufen und fragen, ob euer deutscher Führerschein einfach umgeschrieben wird. Wenn nicht: Theorieprüfung (gibt es auf Deutsch), Sehtest und Fahrprüfung.",
      why: "Wer in Georgia wohnt, braucht nach 30 Tagen einen Führerschein aus Georgia. Ohne ihn könnt ihr auch kein Auto anmelden.",
      where: [{ ref: "dds" }],
      todo: [
        "Warten, bis die Sozialversicherungsnummer da ist. Die Führerscheinstelle braucht sie.",
        "Bei der Führerscheinstelle anrufen (Sätze unten).",
        "Online einen Termin buchen.",
        "Falls eine Prüfung nötig ist: das Fahrerhandbuch lernen. Die Theorieprüfung auf Deutsch wählen.",
        "Falls eine Fahrprüfung nötig ist: ein eigenes Auto mitbringen, das angemeldet und versichert ist.",
      ],
      bring: [
        "Reisepass mit Visum",
        "Den ausgedruckten Einreisestempel (I-94)",
        "Die Karte mit der Sozialversicherungsnummer",
        "Zwei Briefe oder Rechnungen mit eurem Namen und der Adresse an der Tom Bell Road (zum Beispiel Strom- oder Wasserrechnung, Kontoauszug)",
        "Euren deutschen Führerschein",
        "Eine englische Übersetzung des Führerscheins (am Telefon fragen, welche akzeptiert wird)",
        "Geld für die Gebühr (etwa 20 bis 32 Dollar)",
      ],
      scripts: [
        {
          title: "Anruf bei der Führerscheinstelle",
          kind: "call",
          to: "Telefonnummer auf dds.georgia.gov unter „Contact Us“",
          lines: [
            { en: "Hello, I have a German driver's license. I live in Georgia now. I have an E-2 visa.", de: "Hallo, ich habe einen deutschen Führerschein. Ich wohne jetzt in Georgia und habe ein E-2-Visum." },
            { en: "Can I change my German license to a Georgia license without a test?", de: "Kann ich meinen deutschen Führerschein ohne Prüfung umschreiben lassen?" },
            { en: "Do I need a translation? Which translation do you accept?", de: "Brauche ich eine Übersetzung? Welche akzeptieren Sie?" },
            { en: "Do I get my German license back?", de: "Bekomme ich meinen deutschen Führerschein zurück?" },
            { en: "What papers do I need to bring?", de: "Welche Unterlagen muss ich mitbringen?" },
          ],
        },
        {
          title: "Bei der Führerscheinstelle",
          kind: "inperson",
          lines: [
            { en: "Hello, I want a Georgia driver's license. I am new here. I am from Germany.", de: "Hallo, ich möchte einen Führerschein für Georgia. Ich bin neu hier und komme aus Deutschland." },
            { en: "I want to take the test in German, please.", de: "Ich möchte die Prüfung bitte auf Deutsch machen." },
          ],
        },
      ],
      cautions: [
        "Wir konnten nicht sicher herausfinden, ob Georgia deutsche Führerscheine ohne Prüfung umschreibt. Deshalb bitte vorher anrufen.",
        "Der Führerschein läuft meistens am selben Tag ab wie euer Einreisestempel. Rechtzeitig verlängern.",
      ],
      sources: [
        { title: "Führerscheinstelle: Infos für Nicht-Amerikaner", url: "https://dds.georgia.gov/node/146" },
        { title: "Führerscheinstelle: Prüfung auf Deutsch", url: "https://dds.georgia.gov/list-languages" },
        { title: "Führerscheinstelle: Standorte", url: "https://dds.georgia.gov/locations" },
      ],
    },
    {
      id: "auto-anmelden",
      phase: "ankunft",
      title: "Autos versichern und anmelden",
      summary: "Erst die Versicherung, dann die Anmeldung bei der Zulassungsstelle in Lamar County. Die ist im selben Gebäude wie das Bauamt.",
      where: [{ ref: "lamarTax" }],
      todo: [
        "Eine Autoversicherung für euer Privatauto abschließen.",
        "Eine Versicherung für den Truck abschließen (Englisch: „commercial auto“).",
        "Bei der Zulassungsstelle anrufen und fragen, was ihr mitbringen müsst (Sätze unten).",
        "Hingehen und anmelden. Ihr bekommt die Kennzeichen gleich mit.",
        "Das Kennzeichen vom Truck unter „Unsere Daten“ eintragen.",
      ],
      bring: [
        "Euren Führerschein aus Georgia",
        "Den Fahrzeugbrief oder Kaufvertrag",
        "Den Versicherungsnachweis",
        "Für den Truck auf die Firma: Gründungspapiere und den Brief mit der Steuernummer (EIN)",
      ],
      scripts: [
        {
          title: "Anruf bei der Zulassungsstelle",
          kind: "call",
          to: "770-358-5162",
          lines: [
            { en: "Hello, we are new here. We want to register two vehicles: a car and a food truck for our company.", de: "Hallo, wir sind neu hier. Wir möchten zwei Fahrzeuge anmelden: ein Auto und einen Food Truck für unsere Firma." },
            { en: "What papers do we need to bring?", de: "Welche Unterlagen müssen wir mitbringen?" },
            { en: "Can the food truck be in the name of our company?", de: "Kann der Food Truck auf unsere Firma angemeldet werden?" },
          ],
        },
      ],
      sources: [{ title: "Zulassungsstelle Lamar County", url: "https://www.lamarcountyga.com/departments/tax-commissioner/" }],
    },
    {
      id: "sales-tax",
      phase: "ankunft",
      title: "Für die Umsatzsteuer anmelden",
      summary: "Auf zubereitetes Essen zahlt man in Georgia Umsatzsteuer. Dafür meldet ihr eure Firma online an.",
      todo: [
        "Euren Anwalt oder Steuerberater fragen, ob die Firma schon angemeldet ist.",
        "Wenn nicht: auf gtc.dor.ga.gov ein Konto anlegen und „Sales and Use Tax“ wählen.",
        "Die Steuernummer, die ihr bekommt, in die Notizen schreiben.",
        "Einen Steuerberater suchen (Englisch: „CPA“), der die Steuermeldungen für euch macht.",
      ],
      forms: [
        {
          title: "Anmeldung im Steuerkonto von Georgia",
          url: "https://gtc.dor.ga.gov/",
          fields: [
            { label: "Legal business name", value: "{{businessName}}" },
            { label: "Business type", value: "{{legalForm}}" },
            { label: "FEIN", value: "{{ein}}" },
            { label: "Physical address", value: "{{baseStreet}}, {{baseCity}}, GA {{baseZip}}" },
            { label: "County", value: "Lamar" },
            { label: "Description of business", value: "Food truck selling prepared food: {{menuSummary}}" },
            { label: "Contact phone", value: "{{phone}}" },
            { label: "Contact email", value: "{{email}}" },
          ],
        },
      ],
      sources: [{ title: "Steuerkonto Georgia (Georgia Tax Center)", url: "https://gtc.dor.ga.gov/" }],
    },
    {
      id: "versicherungen",
      phase: "ankunft",
      title: "Versicherungen für die Firma abschließen",
      summary: "Eine Haftpflicht für die Firma braucht ihr fast immer. Viele Veranstalter wollen den Nachweis sehen.",
      todo: [
        "Haftpflichtversicherung für die Firma (Englisch: „general liability“).",
        "Versicherung für den Truck (Englisch: „commercial auto“).",
        "Sobald ihr Mitarbeiter habt: Unfallversicherung für Mitarbeiter (Englisch: „workers' compensation“).",
        "Die Versicherungsnachweise als PDF speichern. Veranstalter fragen danach.",
      ],
      scripts: [
        {
          title: "Anruf bei einem Versicherungsmakler",
          kind: "call",
          to: "Ein unabhängiger Versicherungsmakler (Englisch: „independent insurance agent“)",
          lines: [
            { en: "Hello, we are starting a food truck in Georgia. We need insurance for the business and for the truck.", de: "Hallo, wir eröffnen einen Food Truck in Georgia. Wir brauchen Versicherungen für die Firma und den Truck." },
            { en: "We are new in the US. We have no insurance history here. Is that a problem?", de: "Wir sind neu in den USA und hatten hier noch keine Versicherung. Ist das ein Problem?" },
            { en: "Can you send us a price by email?", de: "Können Sie uns ein Angebot per E-Mail schicken?" },
          ],
        },
      ],
    },

    // ================= 4. GENEHMIGUNG =================
    {
      id: "inspektion",
      phase: "genehmigung",
      title: "Die Kontrolle durch das Gesundheitsamt",
      summary: "Jemand vom Amt kommt und schaut sich Truck und Küche an. Danach bekommt ihr die Genehmigung.",
      todo: [
        "Truck und Küche gründlich putzen.",
        "Den Wassertank füllen. Alle Geräte einschalten.",
        "In jeden Kühlschrank ein Thermometer legen.",
        "Am Handwaschbecken: Seife, Papierhandtücher und ein Schild „Handwashing only“.",
        "Das Hygiene-Zertifikat bereitlegen.",
        "Notizen machen, wenn etwas verbessert werden muss.",
      ],
      scripts: [
        {
          title: "Während der Kontrolle",
          kind: "inperson",
          lines: [
            { en: "Thank you for coming. Please tell me if we need to fix something.", de: "Danke, dass Sie gekommen sind. Bitte sagen Sie mir, wenn wir etwas verbessern müssen." },
            { en: "Can you write it down for us, please?", de: "Können Sie es uns bitte aufschreiben?" },
            { en: "When can you come back to check again?", de: "Wann können Sie wiederkommen und noch einmal prüfen?" },
          ],
        },
      ],
    },
    {
      id: "genehmigung-aushaengen",
      phase: "genehmigung",
      title: "Die Genehmigung aufhängen und den Truck beschriften",
      summary: "Die Genehmigung und der letzte Kontrollbericht müssen im Truck hängen, sodass Kunden sie sehen.",
      todo: [
        "Genehmigung und Kontrollbericht gut sichtbar aufhängen.",
        "Das Amt fragen, was außen auf dem Truck stehen muss. Oft sind das Name, Adresse und die Nummer der Genehmigung, mindestens 5 cm groß.",
        "Die Nummer der Genehmigung in die Notizen schreiben.",
      ],
    },

    // ================= 5. BETRIEB =================
    {
      id: "verkaufsorte",
      phase: "betrieb",
      title: "Verkaufsplätze anmelden",
      summary: "Bevor ihr an einem neuen Ort verkauft, sagt ihr dem Gesundheitsamt Bescheid. Manche Städte wollen eine eigene Erlaubnis.",
      why: "Andere Countys in Georgia müssen eure Genehmigung anerkennen. Ihr müsst euch dort aber trotzdem melden.",
      todo: [
        "Für jeden Verkaufsplatz das Formular „Mobile Food Unit Location Form“ ausfüllen.",
        "Das Gesundheitsamt mindestens 7 Tage vorher über einen neuen Platz informieren.",
        "Verkauft ihr in einem anderen County: dort beim Gesundheitsamt melden und eine Kopie eurer Genehmigung zeigen.",
        "Bei der Stadt fragen, ob ihr eine Verkaufserlaubnis braucht (fertige E-Mail unten).",
        "Die Erlaubnis des Grundstücksbesitzers haben und eine Toilette in der Nähe.",
      ],
      emails: [
        {
          title: "Anfrage an eine Stadt",
          to: "",
          subject: "Food truck: do we need a permit? ({{businessName}})",
          body:
            "Hello,\n\nWe have a food truck called {{unitName}}. We have a health permit from Lamar County.\n\n" +
            "We want to sell food at [PLACE] on [DATE]. Do we need a permit from the city? If yes, can you send us the form and tell us the fee?\n\n" +
            "Thank you,\n{{owner1}}\n{{businessName}}\n{{phone}}\n{{email}}",
          de: "Auf Deutsch: Wir haben einen Food Truck mit Genehmigung aus Lamar County und möchten am [DATUM] in [ORT] verkaufen. Brauchen wir eine Erlaubnis der Stadt? Wenn ja, bitte Formular und Gebühr schicken.\n\nVor dem Senden Ort und Datum eintragen.",
        },
      ],
      sources: [{ title: "Gesetz in Georgia: andere Countys erkennen die Genehmigung an", url: "https://law.justia.com/codes/georgia/title-26/chapter-2/article-13/section-26-2-379" }],
    },
    {
      id: "laufend",
      phase: "betrieb",
      title: "Was regelmäßig zu tun ist",
      summary: "Diese Dinge kommen immer wieder. Am besten tragt ihr sie in euren Kalender ein.",
      todo: [
        "Jeden Tag: zum Stützpunkt zurück, Frischwasser auffüllen, Abwasser ablassen.",
        "Jeden Monat (oder wie es das Steueramt sagt): die Umsatzsteuer melden.",
        "Jedes Jahr bis 31. März: den Gewerbeschein in Lamar County erneuern.",
        "Das Ablaufdatum der Genehmigung vom Gesundheitsamt in den Kalender eintragen.",
        "Das Ablaufdatum vom Hygiene-Zertifikat in den Kalender eintragen (meist nach 5 Jahren).",
        "Das Ablaufdatum vom Einreisestempel (I-94) in den Kalender eintragen (meist nach 2 Jahren).",
        "Das Ablaufdatum vom Führerschein in den Kalender eintragen.",
      ],
    },
  ],
};

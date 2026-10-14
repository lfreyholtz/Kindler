// Inhalt der Checkliste. Alles, was in {{doppelten Klammern}} steht, wird automatisch
// aus den „Unsere Daten“ ersetzt. Fehlt ein Wert, erscheint ein gelber Platzhalter.
//
// Pflege-Hinweis: Neue Schritte einfach in STEPS ergänzen. Die "id" darf sich später
// nicht mehr ändern, sonst geht der gespeicherte Haken verloren.

window.KINDLER = {
  lastReviewed: "14.10.2026",

  // ------------------------------------------------------------------
  // Unsere Daten (einmal eintragen, wird überall eingesetzt)
  // ------------------------------------------------------------------
  profileGroups: [
    {
      title: "Firma",
      fields: [
        { key: "businessName", label: "Name der Firma", default: "Kindler German Cuisine" },
        { key: "legalForm", label: "Rechtsform (z. B. LLC)", placeholder: "LLC" },
        { key: "ein", label: "EIN (Steuernummer der Firma)", placeholder: "12-3456789" },
        { key: "street", label: "Aktuelle Firmenadresse: Straße (bis zur Änderung nach dem Visum)", default: "1957 Williams Mill Rd" },
        { key: "city", label: "Aktuelle Firmenadresse: Ort", default: "Zebulon" },
        { key: "state", label: "Bundesstaat", default: "GA" },
        { key: "zip", label: "Aktuelle Firmenadresse: PLZ", default: "30295" },
        { key: "county", label: "County der aktuellen Firmenadresse", default: "Pike County" },
        { key: "menuSummary", label: "Speisen in einem Satz (Englisch)", placeholder: "German food: bratwurst, schnitzel, soft pretzels, potato salad" },
      ],
    },
    {
      title: "Personen und Kontakt",
      fields: [
        { key: "owner1", label: "Inhaber/in 1: voller Name (wie im Pass)" },
        { key: "owner1Title", label: "Inhaber/in 1: Titel (Englisch)", placeholder: "Owner / Managing Member" },
        { key: "owner2", label: "Inhaber/in 2: voller Name (wie im Pass)" },
        { key: "owner2Title", label: "Inhaber/in 2: Titel (Englisch)", placeholder: "Co-Owner" },
        { key: "phone", label: "US-Telefonnummer", placeholder: "(770) 555-0123" },
        { key: "email", label: "E-Mail-Adresse" },
        { key: "cfsmName", label: "Wer macht die Food-Safety-Manager-Prüfung?" },
        { key: "attorneyName", label: "Name Einwanderungsanwalt/-anwältin" },
        { key: "attorneyEmail", label: "E-Mail Anwalt/Anwältin" },
      ],
    },
    {
      title: "Grundstück Tom Bell Road (Base of Operation, Separat-Küche, künftiger Firmensitz)",
      fields: [
        { key: "baseName", label: "Name des Standorts (Englisch)", placeholder: "Kindler German Cuisine Base" },
        { key: "baseStreet", label: "Straße und Hausnummer", placeholder: "1234 Tom Bell Rd" },
        { key: "baseCity", label: "Ort (laut Post)", placeholder: "Barnesville oder Milner" },
        { key: "baseZip", label: "PLZ" },
        { key: "baseJurisdiction", label: "Liegt das Grundstück in einer Stadt oder im County? (Englisch)", placeholder: "unincorporated Lamar County" },
        { key: "baseParcel", label: "Flurstück-Nummer (Parcel ID), steht im Grundsteuerbescheid" },
        { key: "baseOwner", label: "Wem gehört das Grundstück? (Namen wie im Grundbuch, oder die Firma)" },
        { key: "baseOwnerPhone", label: "Telefon Eigentümer/in (falls nicht ihr selbst)" },
        { key: "baseOwnerEmail", label: "E-Mail Eigentümer/in (falls nicht ihr selbst)" },
        { key: "baseWater", label: "Wasser: öffentlich oder Brunnen? (Englisch)", placeholder: "public water / private well" },
      ],
    },
    {
      title: "Food Truck",
      fields: [
        { key: "unitName", label: "Name des Trucks", default: "Kindler German Cuisine" },
        { key: "unitType", label: "Art (Englisch)", placeholder: "food truck / food trailer" },
        { key: "unitVin", label: "Fahrgestellnummer (VIN)" },
        { key: "unitPlate", label: "Kennzeichen" },
        { key: "freshTank", label: "Frischwassertank (Gallonen)" },
        { key: "wasteTank", label: "Abwassertank (Gallonen)" },
      ],
    },
  ],

  // ------------------------------------------------------------------
  // Phasen
  // ------------------------------------------------------------------
  phases: [
    { id: "jetzt", title: "Jetzt bis zum Visumstermin", subtitle: "Vorbereiten und gleich für Lamar County beantragen, aber nichts verkaufen. Was bis 11.11. nicht fertig ist, geht danach weiter.", until: "bis 11.11.2026" },
    { id: "visum", title: "Visumstermin in Frankfurt", subtitle: "Donnerstag, 12.11.2026", until: "12.11.2026" },
    { id: "ankunft", title: "Nach der Einreise mit E-2", subtitle: "Ab jetzt dürft ihr für eure Firma arbeiten. Firmensitz zieht auf die Tom Bell Road.", until: "erste 4 Wochen" },
    { id: "genehmigung", title: "Inspektion und Genehmigung", subtitle: "Environmental Health (Lamar und Upson County)", until: "danach" },
    { id: "betrieb", title: "Laufender Betrieb", subtitle: "Was regelmäßig zu tun ist", until: "dauerhaft" },
  ],

  // Wichtige Stellen (werden in den Schritten wiederverwendet)
  places: {
    upsonEH: {
      name: "Upson County Environmental Health, Thomaston (Adresse aus eurem Vorab-Formular)",
      address: "314 E Lee St, Thomaston, GA 30286",
      url: "https://dph.georgia.gov/environmental-health",
    },
    lamarEH: {
      name: "Lamar County Environmental Health, Barnesville (Lamar und Upson teilen sich das Gesundheitsamt)",
      address: "100 Academy Drive, Barnesville, GA 30204",
      phone: "770-358-1483",
      ext: "Durchwahl 2",
      hours: "Mo–Fr 8–17 Uhr, Mittagspause 12–13 Uhr",
      url: "https://www.district4health.org/clinic-sites/lamar-county/",
    },
    lamarPlanning: {
      name: "Lamar County Planning and Community Development (Bauamt, Zoning, Gewerbeschein)",
      address: "790 Veterans Parkway, Barnesville, GA 30204",
      phone: "770-358-5364",
      hours: "Mo–Fr 8–17 Uhr",
      email: "abuice@lamarcountyga.com",
      contact: "Anita Buice (Leiterin), 678-603-3114",
      url: "https://www.lamarcountyga.com/departments/buildingzoning-department/",
    },
    pikeTax: {
      name: "Pike County Tax Commissioner (Zulassungsstelle für Autos)",
      address: "79 Jackson Street, Zebulon, GA 30295",
      phone: "770-567-2001",
      hours: "Mo–Fr 8–17 Uhr",
      url: "https://www.pikecoga.com/tax-commissioner",
    },
    consulate: {
      name: "US-Generalkonsulat Frankfurt (einzige E-Visa-Stelle in Deutschland)",
      address: "Gießener Straße 30, 60435 Frankfurt am Main",
      url: "https://de.usembassy.gov/",
    },
    ssa: {
      name: "Social Security Administration (SSA)",
      phone: "1-800-772-1213",
      address: "Nächstes Büro: über die Suche mit PLZ 30295 finden",
      url: "https://secure.ssa.gov/ICON/main.jsp",
    },
    dds: {
      name: "Georgia Department of Driver Services (DDS, Führerscheinstelle)",
      address: "Nächstes Kundenzentrum: über die Standortsuche finden",
      url: "https://dds.georgia.gov/locations",
    },
  },

  // ------------------------------------------------------------------
  // Schritte
  // ------------------------------------------------------------------
  steps: [
    // ================= PHASE: JETZT =================
    {
      id: "anwalt-klaeren",
      phase: "jetzt",
      title: "Mit dem Anwalt klären, was ihr bis zum Visum tun dürft",
      summary: "Als Touristen dürft ihr vorbereiten, aber nicht arbeiten oder verkaufen. Lasst euch die Grenze schriftlich bestätigen.",
      why: "Ein Fehler hier kann das E-2-Visum gefährden. Die Grenze zwischen „vorbereiten“ und „arbeiten“ ist im Einzelfall Sache des Anwalts.",
      todo: [
        "E-Mail an den Anwalt schicken (Entwurf unten)",
        "Datum notieren, bis wann ihr spätestens ausreisen müsst (steht in der I-94)",
        "Eigene I-94 online abrufen und ausdrucken",
      ],
      prepare: [
        "Eure I-94 findet ihr auf i94.cbp.dhs.gov unter „Get Most Recent I-94“. Dort steht „Admit Until Date“: bis dahin müsst ihr ausgereist sein.",
        "Mit ESTA (ohne Visum) sind höchstens 90 Tage erlaubt.",
      ],
      emails: [
        {
          title: "Fragen an den Anwalt",
          to: "{{attorneyEmail}}",
          subject: "{{businessName}}: questions before the E-2 interview on November 12",
          body:
            "Dear {{attorneyName}},\n\n" +
            "Our E-2 interview at the Frankfurt consulate is on November 12, 2026. We are currently in Georgia as visitors. Before then, we would like to confirm the following:\n\n" +
            "1. Which of these activities are allowed for us as visitors: meeting with the county zoning and health offices, finishing the separate kitchen on our property, buying the food truck and equipment, taking the food safety manager course and exam?\n" +
            "2. Is there anything we must NOT do before the visa is issued?\n" +
            "3. Can the interview be held in German, or should we prepare in English?\n" +
            "4. Which original documents should we bring to the interview?\n" +
            "5. After approval, how long will the consulate keep our passports, and can we travel back to the US right away?\n" +
            "6. The health department suggested we apply for our food service permit and county business license in Lamar County now. Is that fine before the visa is issued?\n" +
            "7. After the interview we will move our business address from Pike County to our property on Tom Bell Road in Lamar County. Does this affect the visa?\n\n" +
            "Thank you,\n{{owner1}}\n{{businessName}}\n{{phone}}",
          de:
            "Übersetzung: Wir fragen, (1) welche Tätigkeiten als Besucher erlaubt sind (Termine bei Zoning und Gesundheitsamt, Fertigstellung der Separat-Küche, Kauf von Truck und Ausstattung, Food-Safety-Kurs und Prüfung), (2) was wir vor dem Visum auf keinen Fall tun dürfen, (3) ob das Gespräch auf Deutsch geführt werden kann, (4) welche Originale wir mitbringen sollen, (5) wie lange das Konsulat die Pässe behält und ob wir direkt zurückfliegen können, (6) ob wir Gesundheitsgenehmigung und Gewerbeschein in Lamar County schon jetzt beantragen dürfen, wie es das Gesundheitsamt vorschlägt, (7) ob der Umzug des Firmensitzes von Pike County auf die Tom Bell Road das Visum betrifft.",
        },
      ],
      sources: [
        { title: "I-94 abrufen (CBP)", url: "https://i94.cbp.dhs.gov/" },
      ],
    },
    {
      id: "interview-unterlagen",
      phase: "jetzt",
      title: "Unterlagen für das Visumsgespräch zusammenstellen",
      summary: "Eine Mappe mit allen Originalen und Kopien, sortiert in der Reihenfolge unten.",
      why: "Im Gespräch prüft der Konsularbeamte vor allem drei Dinge: ob die Firma echt und mehr als ein reines Auskommen für euch ist, ob das Geld schon investiert ist und woher es stammt.",
      bring: [
        "Reisepässe (mindestens 6 Monate über den geplanten Aufenthalt hinaus gültig)",
        "Terminbestätigung für den 12.11.",
        "DS-160-Bestätigungsseite (mit Barcode) für jede Person",
        "Quittung der Visumsgebühr",
        "Passfoto 5 × 5 cm (Reserve, falls das Foto im DS-160 abgelehnt wurde)",
        "Kopie des eingereichten E-Visa-Pakets (DS-156E, Businessplan, Nachweise), so wie euer Anwalt es eingereicht hat",
        "Gründungsunterlagen der Firma und EIN-Bestätigung (IRS-Brief)",
        "Nachweise der Investition: Kaufvertrag Truck, Rechnungen für Ausstattung und die Separat-Küche, Nachweis zum Grundstück Tom Bell Road, Kontoauszüge der Firma",
        "Nachweise zur Herkunft des Geldes: Kontoauszüge, Verkaufsverträge, Steuerbescheide aus Deutschland",
        "Heiratsurkunde (falls ihr verheiratet seid und beide mitreist)",
      ],
      prepare: [
        "Fragt euren Anwalt, ob er eine eigene Checkliste hat. Seine Liste geht vor.",
        "Alle Unterlagen in einem Ordner mit Registern. Originale vorne, Kopien hinten.",
      ],
      cautions: [
        "Die Unterlagenliste beruht auf allgemeinen E-2-Anforderungen. Euer Anwalt kennt euren Fall und hat das Paket eingereicht.",
      ],
      sources: [
        { title: "E-2 aus Deutschland (Fachanwälte, allgemeine Übersicht)", url: "https://www.alazlaw.com/blog/e-2-visa-for-german-citizens-2026-how-to-apply-frankfurt/" },
        { title: "US-Botschaft und Konsulate in Deutschland", url: "https://de.usembassy.gov/" },
      ],
    },
    {
      id: "interview-ueben",
      phase: "jetzt",
      title: "Das Gespräch üben",
      summary: "Typische Fragen, auf Englisch und Deutsch. Antwortet immer mit euren echten Zahlen aus dem Businessplan.",
      why: "Das Gespräch dauert oft nur wenige Minuten. Wer seine Zahlen ohne Nachschlagen kennt, wirkt glaubwürdig.",
      prepare: [
        "Übt jede Frage laut, jeweils mit einer Antwort von zwei bis drei Sätzen.",
        "Kennt diese Zahlen auswendig: Gesamtinvestition, davon schon ausgegeben, geplanter Umsatz im 1. und 3. Jahr, Zahl der geplanten Mitarbeiter.",
        "Bleibt bei der Wahrheit und bei dem, was im Businessplan steht. Lieber „Ich schaue kurz nach“ als eine geratene Zahl.",
      ],
      scripts: [
        {
          title: "Typische Fragen im E-2-Gespräch",
          kind: "inperson",
          lines: [
            { en: "What does your company do?", de: "Was macht eure Firma? (Food Truck mit deutscher Küche, wo, für wen)" },
            { en: "How much have you invested, and what did you spend it on?", de: "Wie viel habt ihr investiert und wofür? (Truck, Ausstattung, Standort, Genehmigungen)" },
            { en: "Where did the money come from?", de: "Woher stammt das Geld? (Ersparnisse, Verkauf, mit Belegen)" },
            { en: "Why Georgia, and why this location?", de: "Warum Georgia und warum dieser Standort?" },
            { en: "How many people will you hire, and when?", de: "Wie viele Leute stellt ihr ein, und wann?" },
            { en: "What is your role in the company?", de: "Was ist deine Rolle in der Firma? (Leitung, Entscheidungen)" },
            { en: "What experience do you have in this business?", de: "Welche Erfahrung habt ihr in der Gastronomie?" },
            { en: "What revenue do you expect in the first year?", de: "Welchen Umsatz erwartet ihr im ersten Jahr?" },
            { en: "Do you plan to return to Germany when you are done with the business?", de: "Plant ihr, nach dem Ende des Geschäfts nach Deutschland zurückzukehren?" },
          ],
        },
        {
          title: "Nützliche Sätze, wenn ihr etwas nicht versteht",
          kind: "inperson",
          lines: [
            { en: "Sorry, could you please repeat the question?", de: "Entschuldigung, können Sie die Frage bitte wiederholen?" },
            { en: "Could you please speak a little more slowly?", de: "Können Sie bitte etwas langsamer sprechen?" },
            { en: "May I answer in German?", de: "Darf ich auf Deutsch antworten?" },
            { en: "Let me check that number in our business plan.", de: "Ich schaue die Zahl kurz in unserem Businessplan nach." },
          ],
        },
      ],
    },
    {
      id: "frankfurt-reise",
      phase: "jetzt",
      title: "Reise nach Frankfurt planen",
      summary: "Flug, Unterkunft und Rückflug so planen, dass ihr ein paar Tage Puffer habt.",
      why: "Nach der Genehmigung behält das Konsulat in der Regel die Pässe, um das Visum einzukleben. Ohne Pass kein Rückflug.",
      where: [{ ref: "consulate" }],
      todo: [
        "Flug nach Deutschland buchen, Ankunft spätestens am 11.11.",
        "Unterkunft in Frankfurt für die Nacht vor dem Termin",
        "Rückflug in die USA erst buchen, wenn der Anwalt sagt, wann die Pässe zurückkommen (oder flexiblen Tarif wählen)",
        "Hinweise in der Terminbestätigung lesen: was ihr mit hineinnehmen dürft (Taschen, Handys)",
        "Mindestens 30 Minuten vor dem Termin vor Ort sein",
      ],
      cautions: [
        "Seit Oktober 2025 gibt es eine neue US-Gebühr „Visa Integrity Fee“ (mindestens 250 USD pro Visum), die bei Ausstellung fällig wird. Nicht alle Konsulate erheben sie schon. Fragt den Anwalt, ob ihr sie in Frankfurt zahlen müsst.",
      ],
      sources: [
        { title: "Visa Integrity Fee: aktueller Stand", url: "https://www.ellis.com/resources/visa-integrity-fee" },
      ],
    },
    {
      id: "cfsm-zertifikat",
      phase: "jetzt",
      title: "Food-Safety-Manager-Zertifikat (CFSM) machen",
      summary: "Mindestens eine Person braucht dieses Zertifikat, bevor das Gesundheitsamt die Genehmigung erteilt.",
      why: "Georgia verlangt für jeden Lebensmittelbetrieb, auch für Food Trucks, einen „Certified Food Safety Manager“: Kurs plus anerkannte Prüfung.",
      todo: [
        "Entscheiden, wer die Prüfung macht ({{cfsmName}})",
        "Anbieter wählen (z. B. ServSafe Manager) und Kurs buchen",
        "Lernen (die Lernmaterialien gibt es auch als Buch)",
        "Prüfung ablegen (online mit Aufsicht oder in einem Prüfungszentrum)",
        "Zertifikat ausdrucken und 2 Kopien machen",
      ],
      prepare: [
        "Die ServSafe-Manager-Prüfung gibt es nicht auf Deutsch. Online: Englisch, Spanisch, Chinesisch. Auf Papier: Englisch und einige zweisprachige Versionen (z. B. Französisch/Englisch).",
        "Fragt beim Anbieter, ob ein Wörterbuch erlaubt ist.",
        "Andere anerkannte Anbieter (z. B. Prometric, NRFSP) haben teils andere Sprachen. Fragt Lamar County Environmental Health, welche Anbieter sie akzeptieren.",
      ],
      emails: [
        {
          title: "Frage an ServSafe: Sprache und Wörterbuch",
          to: "",
          subject: "ServSafe Manager exam: language options for a German speaker",
          body:
            "Hello,\n\nI plan to take the ServSafe Manager exam. My native language is German and my English is limited.\n\n" +
            "1. Is the exam available in German, or with a German/English version?\n" +
            "2. Am I allowed to use a printed German–English dictionary during the exam?\n" +
            "3. Can I request extra time as a non-native speaker?\n\n" +
            "Thank you,\n{{cfsmName}}\n{{businessName}}, {{city}}, Georgia\n{{email}}",
          de: "Übersetzung: Ich frage, ob es die Prüfung auf Deutsch oder zweisprachig gibt, ob ein gedrucktes Wörterbuch erlaubt ist und ob ich als Nicht-Muttersprachler mehr Zeit bekommen kann. Senden über das Kontaktformular auf servsafe.com.",
        },
      ],
      sources: [
        { title: "Georgia Food Service Regeln 511-6-1 (Definition CFSM)", url: "https://www.law.cornell.edu/regulations/georgia/Ga-Comp-R-Regs-R-511-6-1-.01" },
        { title: "ServSafe: Sprachen der Manager-Prüfung", url: "https://www.servsafe.com/ServSafe-Manager/FAQs/What-languages-is-the-ServSafe-exam-available-in" },
      ],
    },
    {
      id: "regeln-lesen",
      phase: "jetzt",
      title: "Die zwei Regelwerke des Staates herunterladen und durchgehen",
      summary: "Das Gesundheitsamt erwartet, dass ihr sie kennt. Ihr müsst nicht alles lesen, aber die Teile zu Mobile Units.",
      todo: [
        "„Rules and Regulations for Food Service, Chapter 511-6-1“ herunterladen",
        "„Food Service Establishment Manual for Design, Installation and Construction“ herunterladen",
        "Abschnitt 511-6-1-.08 (Mobile Food Service Units) lesen, z. B. mit einem Übersetzungsprogramm",
      ],
      prepare: [
        "Beides findet ihr auf dph.georgia.gov/environmental-health/food-service.",
        "Tipp: PDF in DeepL oder Google Übersetzer hochladen.",
      ],
      sources: [
        { title: "Georgia DPH: Food Service (Regeln und Formulare)", url: "https://dph.georgia.gov/environmental-health/food-service" },
        { title: "Regel 511-6-1-.08 Mobile Units (Volltext)", url: "https://www.law.cornell.edu/regulations/georgia/Ga-Comp-R-Regs-R-511-6-1-.08" },
      ],
    },
    {
      id: "gesundheitsamt-erstgespraech",
      phase: "jetzt",
      title: "Offene Fragen mit dem Gesundheitsamt klären",
      summary: "Die Sachbearbeiterin hat geraten, gleich alles für Lamar County zu beantragen. Klärt jetzt noch die Punkte, die den Antrag aufhalten könnten.",
      why: "Lamar und Upson County teilen sich das Gesundheitsamt. Das Vorab-Formular aus Upson, das ihr habt, gilt deshalb auch für euch. Separat-Küche und Base of Operation liegen auf eurem Grundstück an der Tom Bell Road in Lamar County.",
      where: [{ ref: "lamarEH" }, { ref: "upsonEH" }],
      todo: [
        "Name der Sachbearbeiterin im Notizfeld festhalten",
        "Anrufen oder vorbeigehen (Skript unten), Antworten notieren",
        "Fragen: Wo wird abgegeben, Barnesville oder Thomaston?",
        "Antworten zur Separat-Küche auf dem Wohngrundstück per E-Mail bestätigen lassen",
      ],
      scripts: [
        {
          title: "Telefonat mit dem Gesundheitsamt",
          kind: "call",
          to: "770-358-1483, Durchwahl 2",
          lines: [
            { en: "Hello, my name is {{owner1}}. We spoke before about our food truck, {{businessName}}. Our base of operation and separate kitchen are on our property at {{baseStreet}} in Lamar County.", de: "Hallo, mein Name ist … Wir haben schon über unseren Food Truck gesprochen. Base of Operation und Separat-Küche sind auf unserem Grundstück an der … in Lamar County." },
            { en: "My English is not perfect, so please speak slowly. Thank you.", de: "Mein Englisch ist nicht perfekt, bitte sprechen Sie langsam. Danke." },
            { en: "The kitchen is a separate building on the same property as our home. Is that acceptable as a base of operation?", de: "Die Küche ist ein eigenes Gebäude auf demselben Grundstück wie unser Wohnhaus. Ist das als Base of Operation in Ordnung?" },
            { en: "Do we use the pre-application form from Upson County, and do we submit everything in Thomaston or in Barnesville?", de: "Nutzen wir das Vorab-Formular aus Upson County, und geben wir alles in Thomaston oder in Barnesville ab?" },
            { en: "Can we submit the application before our visa interview on November 12?", de: "Können wir den Antrag schon vor unserem Visumstermin am 12. November einreichen?" },
            { en: "Is the plan review fee still 250 dollars, and how can I pay?", de: "Ist die Gebühr für die Planprüfung noch 250 Dollar, und wie kann ich bezahlen?" },
            { en: "Which food safety manager certificates do you accept?", de: "Welche Food-Safety-Manager-Zertifikate akzeptieren Sie?" },
            { en: "We are German citizens. We will have E-2 visas. Which documents do you accept for the verification of lawful presence?", de: "Wir sind deutsche Staatsbürger und bekommen E-2-Visa. Welche Dokumente akzeptieren Sie für den Nachweis des legalen Aufenthalts?" },
            { en: "Our business address will change from Pike County to {{baseStreet}} after the visa interview. Which address should we use on the application now?", de: "Unsere Firmenadresse ändert sich nach dem Visumstermin von Pike County auf … Welche Adresse sollen wir jetzt im Antrag angeben?" },
            { en: "If our property uses a private well: is the test in the pre-application the right one?", de: "Falls unser Grundstück einen eigenen Brunnen hat: Ist der Test aus dem Vorab-Formular der richtige?" },
            { en: "Could you please email me the DPH application and all other forms? My email is {{email}}.", de: "Können Sie mir bitte den DPH-Antrag und alle anderen Formulare per E-Mail schicken? Meine E-Mail ist …" },
            { en: "May I have your name, in case I have more questions?", de: "Darf ich Ihren Namen haben, falls ich noch Fragen habe?" },
          ],
        },
      ],
      emails: [
        {
          title: "Bestätigung per E-Mail nach dem Gespräch",
          to: "",
          subject: "{{businessName}}: mobile food unit permit, base of operation at {{baseStreet}}",
          body:
            "Hello,\n\nThank you for your help today. To make sure we understood everything correctly, here is a short summary:\n\n" +
            "- Our base of operation and separate kitchen are a separate building on our property at {{baseStreet}}, {{baseCity}}, GA {{baseZip}} (Lamar County). This is acceptable as a base of operation.\n" +
            "- We will use the mobile food unit pre-application and submit everything at [OFFICE].\n" +
            "- We can submit before our visa interview on November 12.\n" +
            "- The plan review fee is [AMOUNT].\n\n" +
            "Please let us know if anything is not correct. Could you also send us the DPH application and any other forms we need?\n\n" +
            "Thank you very much,\n{{owner1}}, {{businessName}}\n{{phone}}\n{{email}}",
          de: "Übersetzung: Danke für Ihre Hilfe. Kurze Zusammenfassung, damit wir alles richtig verstanden haben: Die Separat-Küche auf unserem Grundstück ist als Base of Operation in Ordnung; wir nutzen das Vorab-Formular und geben in [BÜRO] ab; wir dürfen vor dem 12. November einreichen; die Gebühr ist [BETRAG]. Bitte korrigieren Sie uns, falls etwas nicht stimmt. Vor dem Senden die Punkte in eckigen Klammern ersetzen und alles streichen, was die Sachbearbeiterin anders gesagt hat.",
        },
      ],
      sources: [
        { title: "Lamar County Health Department (District 4)", url: "https://www.district4health.org/clinic-sites/lamar-county/" },
      ],
    },
    {
      id: "standort-zoning",
      phase: "jetzt",
      title: "Zoning-Freigabe für das Grundstück Tom Bell Road holen",
      summary: "Das Bauamt muss im Vorab-Formular unterschreiben, dass ihr auf eurem Grundstück eine gewerbliche Küche und den Truck-Stützpunkt betreiben dürft.",
      why: "Ohne diese Unterschrift wird der Antrag abgelehnt („NO EXCEPTIONS“). Weil das Grundstück auch euer Wohnsitz ist, prüft das Bauamt, ob ein Gewerbe dort erlaubt ist. Der Stützpunkt darf nicht mit einer anderen Firma geteilt werden.",
      where: [{ ref: "lamarPlanning" }],
      todo: [
        "Klären, ob das Grundstück im County („unincorporated“) oder in einer Stadt liegt. Liegt es in einer Stadt (z. B. Milner oder Barnesville), ist das Bauamt der Stadt zuständig.",
        "E-Mail an das Bauamt schicken (Entwurf unten)",
        "Mit dem Vorab-Formular hingehen: die Seite „Step 1, Zoning & Base of Operation“ muss die Beamtin ausfüllen und unterschreiben",
        "Antrag für den Gewerbeschein (occupation tax) mitnehmen (nächster Schritt)",
      ],
      bring: [
        "Adresse und, wenn bekannt, Flurstück-Nummer (Parcel ID) des Standorts",
        "Kurze Beschreibung, was dort passiert: Separat-Küche für die Vorbereitung, Truck abstellen, Wasser auffüllen, Abwasser entleeren, reinigen, Lager",
        "Das Vorab-Formular (Seite „Step 1“)",
        "Grundsteuerbescheid oder Kaufvertrag als Nachweis, dass euch das Grundstück gehört",
      ],
      emails: [
        {
          title: "Zoning-Anfrage an Lamar County",
          to: "abuice@lamarcountyga.com",
          subject: "Zoning approval: food truck base of operation at {{baseStreet}}",
          body:
            "Dear Ms. Buice,\n\nWe are starting a food truck business, {{businessName}}. We own the property at {{baseStreet}}, {{baseCity}}, GA {{baseZip}} (parcel {{baseParcel}}). We would like to use it as the base of operation for our food truck.\n\n" +
            "On the property there is a separate kitchen building, apart from our home. We will use it to prepare food for the truck. We will also park the truck there, fill fresh water, empty wastewater at a dump station, clean the truck and store supplies. We will not sell food or serve customers at this location.\n\n" +
            "The health department requires the local zoning office to approve the location on their pre-application form.\n\n" +
            "1. Is this use allowed on our property under its current zoning?\n2. Can you sign the zoning section of the health department pre-application? When can we come by?\n3. Do we need a business license (occupation tax certificate) or any other permit from your office for this location?\n\n" +
            "Our English is limited, so email is easiest for us. Thank you very much.\n\n{{owner1}}\n{{businessName}}\n{{phone}}\n{{email}}",
          de: "Übersetzung: Uns gehört das Grundstück. Darauf steht eine Separat-Küche, getrennt vom Wohnhaus. Dort wollen wir für den Truck vorbereiten, den Truck abstellen, Wasser auffüllen, Abwasser entleeren, reinigen und lagern. Verkauf und Kunden gibt es dort nicht. Fragen: (1) Ist das nach der aktuellen Bebauungsart erlaubt? (2) Können Sie den Zoning-Teil des Vorab-Formulars unterschreiben, und wann können wir vorbeikommen? (3) Brauchen wir einen Gewerbeschein oder eine andere Genehmigung?",
        },
      ],
      cautions: [
        "Die Regeln in Georgia verbieten einen Lebensmittelbetrieb in der Wohnung. Eine getrennte Küche auf dem Grundstück kann trotzdem in Ordnung sein. Lasst euch das vom Gesundheitsamt und vom Bauamt schriftlich bestätigen, bevor ihr Geld in den Umbau steckt.",
      ],
      sources: [
        { title: "Lamar County Planning and Community Development", url: "https://www.lamarcountyga.com/departments/buildingzoning-department/" },
        { title: "Georgia DPH: FAQ Mobile Food (Base of Operation nicht am Wohnhaus)", url: "https://dph.georgia.gov/document/document/mobile-food-frequency-asked-questions/download" },
      ],
    },
    {
      id: "gewerbeschein-lamar",
      phase: "jetzt",
      title: "Gewerbeschein (Occupation Tax Certificate) in Lamar County",
      summary: "Für den Stützpunkt auf eurem Grundstück in Lamar County. Das Vorab-Formular verlangt, dass ihr den Antrag beim Bauamt holt. Jährlich bis 31. März zu erneuern.",
      where: [{ ref: "lamarPlanning" }],
      bring: [
        "Ausgefüllter Antrag „LC Business License“ (auf lamarcountyga.com)",
        "Lichtbildausweis (Georgia-Führerschein oder Pass)",
        "Kopie staatlicher Lizenzen, falls vorhanden",
        "Notariell beglaubigte Erklärung zum Aufenthaltsstatus",
        "Passender Betrag in bar oder Scheck",
      ],
      scripts: [
        {
          title: "Am Schalter",
          kind: "inperson",
          lines: [
            { en: "Hello, I would like to apply for a business license for our food truck base of operation at {{baseStreet}}.", de: "Hallo, ich möchte einen Gewerbeschein für den Stützpunkt unseres Food Trucks beantragen." },
            { en: "The zoning for this location was approved by your office.", de: "Die Zoning-Freigabe für den Standort hat Ihr Amt schon erteilt." },
            { en: "How much is the fee, and can I pay by check?", de: "Wie hoch ist die Gebühr, und kann ich mit Scheck zahlen?" },
          ],
        },
      ],
      forms: [
        {
          title: "Lamar County Business License (Ausfüllhilfe)",
          url: "https://www.lamarcountyga.com/?p=918",
          note: "Typische Angaben. Das Formular selbst kann andere Bezeichnungen verwenden.",
          fields: [
            { label: "Business name", value: "{{businessName}}" },
            { label: "Business location address", value: "{{baseStreet}}, {{baseCity}}, GA {{baseZip}}" },
            { label: "Mailing address", value: "{{street}}, {{city}}, {{state}} {{zip}}" },
            { label: "Owner(s)", value: "{{owner1}}; {{owner2}}" },
            { label: "Type of business", value: "{{legalForm}}" },
            { label: "Federal ID (EIN)", value: "{{ein}}" },
            { label: "Description of business", value: "Base of operation for a mobile food unit (food truck). No food sales at this location." },
            { label: "Phone", value: "{{phone}}" },
            { label: "Email", value: "{{email}}" },
          ],
        },
      ],
      sources: [
        { title: "Lamar County: Business Licenses", url: "https://www.lamarcountyga.com/?p=918" },
      ],
    },
    {
      id: "standort-eigentuemer",
      phase: "jetzt",
      title: "Eigentum am Grundstück nachweisen",
      summary: "Das Grundstück gehört euch. Klärt nur, ob es auf euch persönlich oder auf die Firma läuft, denn dann braucht ihr eventuell trotzdem eine Erlaubnis.",
      why: "Das Vorab-Formular verlangt eine notariell beglaubigte Erlaubnis, wenn der Antragsteller (die Firma) nicht Eigentümer des Grundstücks ist. Gehört das Grundstück euch privat und der Antrag läuft auf eure LLC, gelten die Firma und ihr rechtlich als verschiedene Personen.",
      todo: [
        "Nachsehen, wer im Kaufvertrag oder Grundsteuerbescheid als Eigentümer steht ({{baseOwner}})",
        "Steht dort die Firma: nichts weiter nötig, Kopie des Nachweises für den Antrag",
        "Steht dort ihr privat: beim Gesundheitsamt fragen, ob ihr die Erlaubnis (Affidavit / Property Use Agreement) an eure eigene Firma unterschreiben sollt",
        "Falls ja: Formular bei einem Notar unterschreiben (Banken und UPS-Läden bieten Notare an)",
      ],
      scripts: [
        {
          title: "Frage an das Gesundheitsamt",
          kind: "call",
          to: "Environmental Health",
          lines: [
            { en: "The property belongs to us personally, but the permit will be in the name of our company, {{businessName}}. Do we need to sign the property owner affidavit for our own company?", de: "Das Grundstück gehört uns privat, die Genehmigung läuft aber auf unsere Firma. Müssen wir die Eigentümer-Erklärung für unsere eigene Firma unterschreiben?" },
            { en: "Does it have to be notarized?", de: "Muss sie notariell beglaubigt werden?" },
          ],
        },
      ],
      forms: [
        {
          title: "Property Owner Affidavit / Property Use Agreement (Ausfüllhilfe)",
          url: "https://dph.georgia.gov/environmental-health/food-service",
          note: "Nur nötig, wenn das Amt es verlangt. Erst vor dem Notar unterschreiben.",
          fields: [
            { label: "Property owner name", value: "{{baseOwner}}" },
            { label: "Property address", value: "{{baseStreet}}, {{baseCity}}, GA {{baseZip}}" },
            { label: "Parcel ID", value: "{{baseParcel}}" },
            { label: "Mobile unit / business name", value: "{{unitName}}" },
            { label: "Permit holder", value: "{{businessName}}" },
            { label: "Permit holder phone", value: "{{phone}}" },
            { label: "Use of property", value: "Base of operation for a mobile food service unit: separate kitchen, parking, fresh water supply, wastewater disposal, cleaning and storage." },
          ],
        },
      ],
    },
    {
      id: "standort-wasser",
      phase: "jetzt",
      title: "Wasserversorgung am Standort klären",
      summary: "Öffentliches Wasser: nur notieren. Eigener Brunnen: kompletten Wassertest machen lassen.",
      why: "Das Wasser im Truck muss aus einer zugelassenen Quelle direkt am Stützpunkt kommen.",
      todo: [
        "Klären: öffentlicher Anschluss oder eigener Brunnen? ({{baseWater}})",
        "Bei Brunnen: beim Gesundheitsamt fragen, welcher Test genau verlangt wird",
        "Bei Brunnen: Test über das Extension Office bestellen (laut Vorab-Formular 706-647-8989) und Ergebnis abwarten",
        "Ergebnis (muss „satisfactory“ sein) kopieren",
      ],
      prepare: [
        "Verlangt wird laut Vorab-Formular ein Bakterientest (Coliform und Fecal Coliform) plus die vollständige Analyse EPD-Test W-33. Ist das Ergebnis nicht in Ordnung, müsst ihr nachbessern und neu testen.",
      ],
      scripts: [
        {
          title: "Anruf beim Extension Office (nur bei Brunnen)",
          kind: "call",
          to: "Extension Office, 706-647-8989 (Nummer aus dem Vorab-Formular)",
          lines: [
            { en: "Hello, I need a complete well water test for a food service permit from the health department.", de: "Hallo, ich brauche einen vollständigen Brunnenwassertest für eine Genehmigung des Gesundheitsamts." },
            { en: "I need a bacteria test for coliform and fecal coliform, and the full EPD W-33 analysis.", de: "Ich brauche einen Bakterientest (Coliform und Fecal Coliform) und die vollständige EPD-W-33-Analyse." },
            { en: "How do I get the sample bottles, and how much does it cost?", de: "Wie bekomme ich die Probenflaschen, und was kostet es?" },
            { en: "How long does it take to get the results?", de: "Wie lange dauert es bis zum Ergebnis?" },
          ],
        },
      ],
      sources: [
        { title: "UGA Extension (County-Büros finden)", url: "https://extension.uga.edu/county-offices.html" },
      ],
    },
    {
      id: "standort-ausbau",
      phase: "jetzt",
      title: "Dump Station oder Ausgussbecken und Wasserhahn einbauen",
      summary: "Mindestens nötig am Stützpunkt: Abwasserentleerung (Dump Station oder Mop Sink) und ein Trinkwasserhahn.",
      why: "Ohne diese Mindestausstattung wird kein Antrag angenommen. Sie muss am selben Ort sein, an dem der Truck steht.",
      todo: [
        "Mit dem Gesundheitsamt klären, welche Bauart sie akzeptieren, bevor ihr baut",
        "Angebot von einem Klempner (plumber) einholen",
        "Einbauen lassen",
        "Mindestens 2 Fotos der fertigen Anlage machen",
        "Lagerfläche und Kühlung am Stützpunkt nur für den Truck nutzen (keine privaten Lebensmittel)",
      ],
      scripts: [
        {
          title: "Anfrage beim Klempner",
          kind: "call",
          to: "Klempner aus der Gegend (Barnesville, Griffin, Thomaston)",
          lines: [
            { en: "Hello, I need a quote for a dump station or mop sink and a potable water tap for a food truck base of operation.", de: "Hallo, ich brauche ein Angebot für eine Dump Station oder ein Ausgussbecken und einen Trinkwasserhahn für einen Food-Truck-Stützpunkt." },
            { en: "It must meet the Georgia food service rules and pass the health department inspection.", de: "Es muss den Lebensmittelregeln von Georgia entsprechen und die Prüfung des Gesundheitsamts bestehen." },
            { en: "The address is {{baseStreet}}, {{baseCity}}. When can you come to look at it?", de: "Die Adresse ist … Wann können Sie es sich ansehen?" },
            { en: "Do you need a permit from the county for this work?", de: "Brauchen Sie für diese Arbeit eine Genehmigung vom County?" },
          ],
        },
      ],
    },
    {
      id: "fettentsorgung",
      phase: "jetzt",
      title: "Vertrag für Altfett-Abholung (nur bei Fritteuse oder Grillplatte)",
      summary: "Benutzt ihr Fritteuse oder Grillplatte, braucht ihr einen Vertrag mit einer Firma, die Altöl und Fett abholt.",
      todo: [
        "Firma für „used cooking oil collection“ in der Gegend suchen",
        "Vertrag abschließen",
        "Kopie für den Antrag aufbewahren",
      ],
      scripts: [
        {
          title: "Anfrage bei Altöl-Firma",
          kind: "call",
          to: "Firma für Altöl-Abholung",
          lines: [
            { en: "Hello, we are opening a food truck with a fryer. Our base is in {{baseCity}}, Lamar County.", de: "Hallo, wir eröffnen einen Food Truck mit Fritteuse. Unser Stützpunkt ist in …" },
            { en: "Do you collect used cooking oil there? Do you provide a container?", de: "Holen Sie dort Altöl ab? Stellen Sie einen Behälter?" },
            { en: "We need a written service agreement for the health department. Can you send one?", de: "Wir brauchen einen schriftlichen Vertrag für das Gesundheitsamt. Können Sie uns einen schicken?" },
          ],
        },
      ],
    },
    {
      id: "truck-ausstattung",
      phase: "jetzt",
      title: "Truck kaufen oder umbauen: Anforderungen prüfen",
      summary: "Bevor ihr zahlt: prüft, ob der Truck die Pflichtausstattung hat. Sammelt alle Datenblätter.",
      why: "Das Gesundheitsamt prüft Waschbecken, Tanks, Warmwasser und Kühlung. Umbauten danach sind teuer.",
      todo: [
        "Pflicht: 3-Kammer-Spülbecken (nur zum Spülen)",
        "Pflicht: Handwaschbecken (nur zum Händewaschen)",
        "Je nach Speisen: Becken für Gemüse und/oder Fleisch",
        "Warm- und Kaltwasser unter Druck an jedem Becken",
        "Abwassertank mindestens 15 % größer als Frischwassertank",
        "Frischwasser-Einlass höchstens 3/4 Zoll Innendurchmesser, mit eigenem Anschluss",
        "Abwassertank mit Gefälle zu einem Ablauf von mindestens 1 Zoll und mit Absperrventil",
        "Glatte, leicht zu reinigende Oberflächen (Edelstahl, FRP)",
        "Datenblätter aller Geräte sammeln (Kühlung, Herd, Fritteuse, Tanks, Pumpe, Boiler, Generator)",
        "Fotos innen und außen",
        "Grundriss-Zeichnung mit allen Geräten (möglichst maßstabsgetreu)",
      ],
      scripts: [
        {
          title: "Fragen an den Verkäufer oder Umbauer",
          kind: "inperson",
          lines: [
            { en: "Has this truck been permitted by a Georgia health department before?", de: "Hatte dieser Truck schon eine Genehmigung eines Gesundheitsamts in Georgia?" },
            { en: "What are the sizes of the fresh water and wastewater tanks, in gallons?", de: "Wie groß sind Frisch- und Abwassertank in Gallonen?" },
            { en: "Is there hot and cold water under pressure at every sink?", de: "Gibt es an jedem Becken Warm- und Kaltwasser unter Druck?" },
            { en: "What make and model are the water pump and water heater?", de: "Welche Marke und welches Modell haben Wasserpumpe und Boiler?" },
            { en: "Can you give me the spec sheets for all equipment?", de: "Können Sie mir die Datenblätter aller Geräte geben?" },
            { en: "Is the title clean, and can you give me the title at closing?", de: "Ist der Fahrzeugbrief („title“) frei von Belastungen, und bekomme ich ihn bei Übergabe?" },
          ],
        },
      ],
      sources: [
        { title: "Georgia DPH: Antrag Mobile Food Unit (Anforderungen im Formular)", url: "https://dph.georgia.gov/document/document/dph-mobile-food-unit-permit-application-pdf/download" },
        { title: "Regel 511-6-1-.08 Mobile Units", url: "https://www.law.cornell.edu/regulations/georgia/Ga-Comp-R-Regs-R-511-6-1-.08" },
      ],
    },
    {
      id: "vorab-antrag",
      phase: "jetzt",
      title: "Vorab-Formular (Pre-Application) vollständig machen",
      summary: "Erst wenn jeder Teil erledigt und unterschrieben ist, nimmt das Gesundheitsamt den eigentlichen Antrag an.",
      why: "Im Formular steht: Wer einen Teil nicht erfüllt, bekommt keine Genehmigung. Unvollständige Abgaben werden abgelehnt.",
      where: [{ ref: "lamarEH" }, { ref: "upsonEH" }],
      todo: [
        "Checkliste: Regelwerk 511-6-1 gelesen (unterschreiben)",
        "Checkliste: Design-Handbuch gelesen (unterschreiben)",
        "Step 1 Zoning: eure Unterschrift plus Unterschrift und Datum der Zoning-Beamtin, „Location Approved: YES“",
        "Step 1: Eigentümer-Erklärung, falls das Amt sie verlangt (siehe „Eigentum nachweisen“)",
        "Step 2 Wasser: Unterschrift und Art des Wassers ankreuzen; bei Brunnen Testergebnis beilegen",
        "Step 3: 2 Fotos der fertigen Dump Station oder des Ausgussbeckens",
        "Step 4: Kopie des Vertrags für die Altöl-Abholung (nur mit Fritteuse oder Grillplatte)",
        "Jede Seite: Unterschrift und Datum geprüft",
        "Kopie von allem machen",
      ],
      prepare: [
        "Pflicht auf dem Truck: 3-Kammer-Spülbecken und Handwaschbecken, je nach Speisen auch Gemüse- und Fleischbecken.",
        "Pflicht am Stützpunkt: Dump Station und/oder Ausgussbecken (mop sink) und ein Trinkwasserhahn, alles am selben Ort, an dem der Truck steht.",
        "Lager und Kühlschränke am Stützpunkt nur für den Truck, keine privaten Lebensmittel. Spülbecken im Wohnhaus zählen nicht.",
      ],
      forms: [
        {
          title: "Mobile Food Units Pre-Application (Ausfüllhilfe)",
          note: "Das Formular habt ihr schon (aus Thomaston). Die Felder für die Beamten bleiben leer.",
          fields: [
            { label: "Signature / Date (Checkliste und Step 1, 2)", value: "", hint: "Selbst unterschreiben, Datum im US-Format: 10/20/2026" },
            { label: "Location Approved for Business? / City/County Official", value: "", hint: "Nur das Bauamt füllt das aus" },
            { label: "Which type of Water Supply will be used?", value: "{{baseWater}}", hint: "„Public Water City or County Supply“ oder „Private Well“ ankreuzen" },
            { label: "Well water test (nur bei Brunnen)", value: "Total well analysis: bacteria (coliform and fecal coliform) and EPD test W-33", hint: "Laut Formular über das Extension Office: 706-647-8989" },
            { label: "2 photos of completed dump station", value: "", hint: "Ausdrucken und beilegen" },
            { label: "Oil collection service agreement", value: "", hint: "Kopie beilegen, falls Fritteuse oder Grillplatte" },
          ],
        },
      ],
    },
    {
      id: "notar-save",
      phase: "jetzt",
      title: "Nachweis des legalen Aufenthalts notariell beglaubigen lassen",
      summary: "Georgia verlangt für Gewerbeschein und Lebensmittelgenehmigung eine eidesstattliche Erklärung zum Aufenthaltsstatus, vor einem Notar unterschrieben.",
      why: "Der staatliche Antrag für Mobile Food Units verlangt ausdrücklich eine „Original, notarized Verification of Residency“ mit Kopie eines anerkannten Ausweisdokuments.",
      todo: [
        "Formular vom Gesundheitsamt und vom Bauamt geben lassen (jedes Amt hat oft ein eigenes)",
        "Bei einem Notar unterschreiben (Bank oder UPS-Laden)",
        "Kopie von Pass plus I-94 anheften",
        "Je ein Original für Gesundheitsamt und Gewerbeschein",
      ],
      forms: [
        {
          title: "Verification of Lawful Presence / Residency (Ausfüllhilfe)",
          url: "https://dph.georgia.gov/sites/dph.georgia.gov/files/VerificationLawfulResidency061814.pdf",
          note: "Nicht vor dem Notar ausfüllen, nur unterschreiben, wenn er dabei ist.",
          fields: [
            { label: "Status (Ankreuzen)", value: "I am a qualified alien or non-immigrant under the Federal Immigration and Nationality Act" },
            { label: "Alien number", value: "", hint: "Habt ihr keine Alien-Nummer, fragt das Amt, ob die I-94-Nummer akzeptiert wird" },
            { label: "Secure and verifiable document", value: "Unexpired foreign passport with Form I-94" },
            { label: "Printed name", value: "{{owner1}}" },
          ],
        },
      ],
      cautions: [
        "Für Nicht-Staatsbürger verlangt das Formular eine „Alien Number“. Viele E-2-Inhaber haben keine. Fragt beim Amt nach, was ihr stattdessen eintragen sollt.",
      ],
    },
    {
      id: "antrag-dph",
      phase: "jetzt",
      title: "Antrag „Mobile Food Unit Permit“ ausfüllen",
      summary: "Der eigentliche Antrag beim Gesundheitsamt. Erst einreichen, wenn alle Anlagen vollständig sind.",
      why: "Fehlende Anlagen verzögern die Prüfung. Das Amt bearbeitet unvollständige Anträge oft gar nicht.",
      todo: [
        "Vorab-Formular ist vollständig (vorheriger Schritt)",
        "Formular herunterladen (Link unten) oder vom Gesundheitsamt geben lassen",
        "Mit der Ausfüllhilfe unten ausfüllen",
        "Anlage: Speisekarte",
        "Anlage: mindestens 2 Fotos vom Truck (innen und außen)",
        "Anlage: Grundriss-Zeichnung mit allen Geräten",
        "Anlage: Datenblätter aller Geräte",
        "Anlage: notariell beglaubigte Erklärung zum Aufenthaltsstatus mit Kopie von Pass und I-94",
        "Anlage: Nachweise anderer Ämter (Zoning-Freigabe, ggf. Feuerwehr)",
        "Anlage: Mobile Food Unit Location Form",
        "Anlage: Toilet Use Agreement (Toilette in der Nähe der Verkaufsorte)",
        "Anlage: Eigentümer-Erklärung, falls das Amt sie verlangt",
        "Anlage: CFSM-Zertifikat (Kopie)",
        "Anlage: Wassertest (nur bei Brunnen), Fotos der Dump Station, Altöl-Vertrag",
        "Alles kopieren, bevor ihr es abgebt",
      ],
      forms: [
        {
          title: "DPH Mobile Food Unit Permit Application (Ausfüllhilfe)",
          url: "https://dph.georgia.gov/document/document/dph-mobile-food-unit-permit-application-pdf/download",
          note: "Felder in der Reihenfolge des Formulars. Fragen zur Technik beantwortet ihr mit den Datenblättern des Trucks.",
          fields: [
            { label: "Reason for application", value: "New Application" },
            { label: "Name of Unit", value: "{{unitName}}" },
            { label: "Unit Mailing Address", value: "{{street}}, {{city}}, {{state}} {{zip}}" },
            { label: "Mobile Unit Vehicle License # and VIN", value: "{{unitPlate}} / {{unitVin}}" },
            { label: "Name of Base of Operation", value: "{{baseName}}" },
            { label: "Base of Operation Owner", value: "{{baseOwner}}" },
            { label: "Base of Operation Permit #", value: "", hint: "Leer lassen, falls noch keine Nummer" },
            { label: "County", value: "Lamar" },
            { label: "Base of Operation Mailing Address", value: "{{baseStreet}}, {{baseCity}}, GA {{baseZip}}" },
            { label: "Unit Manager", value: "{{cfsmName}}" },
            { label: "Unit Manager Email / Phone", value: "{{email}} / {{phone}}" },
            { label: "Unit Manager's Supervisor", value: "{{owner1}}" },
            { label: "Billing Contact Name", value: "{{owner1}}" },
            { label: "Billing Address", value: "{{street}}, {{city}}, {{state}} {{zip}}" },
            { label: "Billing Contact Email / Phone", value: "{{email}} / {{phone}}" },
            { label: "Business Ownership Type", value: "{{legalForm}}" },
            { label: "Owners and officers", value: "{{owner1}} ({{owner1Title}}); {{owner2}} ({{owner2Title}}), {{street}}, {{city}}, {{state}} {{zip}}, {{phone}}" },
            { label: "Freshwater tank capacity", value: "{{freshTank}} gallons" },
            { label: "Wastewater tank capacity (must be 15% larger)", value: "{{wasteTank}} gallons" },
            { label: "Method for removing wastewater at the base", value: "Wastewater tank is drained daily into the dump station at the base of operation at {{baseStreet}}, {{baseCity}}. The tank is flushed with potable water from the base tap." },
            { label: "Name of Owner or Authorized Agent (Print)", value: "{{owner1}}" },
            { label: "Title", value: "{{owner1Title}}" },
            { label: "Address", value: "{{street}}, {{city}}, {{state}} {{zip}}" },
            { label: "Phone #", value: "{{phone}}" },
          ],
        },
      ],
      sources: [
        { title: "Georgia DPH: Antrag Mobile Food Unit (PDF)", url: "https://dph.georgia.gov/document/document/dph-mobile-food-unit-permit-application-pdf/download" },
        { title: "Georgia DPH: Formulare (Location Form, Toilet Use, Property Use)", url: "https://dph.georgia.gov/environmental-health/food-service" },
      ],
    },
    {
      id: "antrag-einreichen",
      phase: "jetzt",
      title: "Antrag einreichen und Gebühr zahlen",
      summary: "Persönlich bei Lamar County Environmental Health abgeben. Gebühr für die Planprüfung ist nicht erstattbar.",
      where: [{ ref: "lamarEH" }, { ref: "upsonEH" }],
      bring: [
        "Kompletter Antrag mit allen Anlagen (Original)",
        "Eine Kopie für euch",
        "Zahlungsmittel für die Gebühr (laut Vorab-Formular 250 USD, nicht erstattbar)",
      ],
      scripts: [
        {
          title: "Am Schalter",
          kind: "inperson",
          lines: [
            { en: "Hello, I would like to submit our application for a mobile food unit permit. Our base of operation is in Lamar County.", de: "Hallo, ich möchte unseren Antrag für eine Mobile-Food-Unit-Genehmigung abgeben. Unser Stützpunkt ist in Lamar County." },
            { en: "Could you please check that everything is complete before I leave?", de: "Können Sie bitte prüfen, ob alles vollständig ist, bevor ich gehe?" },
            { en: "How long does the plan review usually take?", de: "Wie lange dauert die Prüfung normalerweise?" },
            { en: "What is the next step after the plan review? When can we schedule the inspection?", de: "Was ist der nächste Schritt nach der Prüfung? Wann können wir die Inspektion vereinbaren?" },
          ],
        },
      ],
    },

    // ================= PHASE: VISUM =================
    {
      id: "visum-termin",
      phase: "visum",
      title: "Am 12.11.: Visumsgespräch in Frankfurt",
      summary: "Früh da sein, Mappe dabei, ruhig antworten.",
      where: [{ ref: "consulate" }],
      todo: [
        "Mappe mit allen Unterlagen (Schritt „Unterlagen zusammenstellen“)",
        "Nur mitnehmen, was laut Terminbestätigung erlaubt ist",
        "Nach dem Gespräch: fragen, wie und wann die Pässe zurückkommen",
      ],
      scripts: [
        {
          title: "Am Schalter",
          kind: "inperson",
          lines: [
            { en: "Good morning. We have an appointment for an E-2 treaty investor visa.", de: "Guten Morgen. Wir haben einen Termin für ein E-2-Investorenvisum." },
            { en: "Here are our passports, the DS-160 confirmations and our appointment letter.", de: "Hier sind unsere Pässe, die DS-160-Bestätigungen und die Terminbestätigung." },
            { en: "When and how will we receive our passports back?", de: "Wann und wie bekommen wir unsere Pässe zurück?" },
          ],
        },
      ],
    },
    {
      id: "visum-pruefen",
      phase: "visum",
      title: "Visum prüfen, sobald die Pässe zurück sind",
      summary: "Fehler im Visum sofort melden, nicht erst bei der Einreise.",
      todo: [
        "Name und Geburtsdatum korrekt geschrieben?",
        "Visumsart „E-2“ und Firmenname richtig?",
        "Gültigkeit notieren (oft 5 Jahre, mehrfache Einreise)",
        "Foto vom Visum machen und an den Anwalt schicken",
      ],
    },
    {
      id: "einreise-i94",
      phase: "visum",
      title: "Einreise mit E-2 und I-94 kontrollieren",
      summary: "Nach der Einreise eure I-94 online prüfen. Sie ist euer wichtigster Nachweis für SSN, Führerschein und Genehmigungen.",
      why: "Bei der Einreise mit E-2 bekommt ihr in der Regel eine Aufenthaltserlaubnis von 2 Jahren pro Einreise. Ehepartner bekommen den Vermerk „E-2S“, der ab 2022 als Nachweis der Arbeitserlaubnis gilt.",
      todo: [
        "I-94 auf i94.cbp.dhs.gov abrufen und ausdrucken (für jede Person)",
        "Hauptantragsteller: Klasse „E2“. Ehepartner: Klasse „E2S“",
        "„Admit Until Date“ notieren (Ablaufdatum des Aufenthalts)",
        "Bei Fehlern sofort den Anwalt informieren",
      ],
      sources: [
        { title: "I-94 abrufen (CBP)", url: "https://i94.cbp.dhs.gov/" },
        { title: "USCIS: I-94 mit E-2S als Arbeitserlaubnis (Policy Manual Update 2022)", url: "https://www.uscis.gov/sites/default/files/document/policy-manual-updates/20220318-EmploymentAuthorization.pdf" },
      ],
    },

    // ================= PHASE: ANKUNFT =================
    {
      id: "adresse-aendern",
      phase: "ankunft",
      title: "Firmensitz auf die Tom Bell Road ändern",
      summary: "Nach dem Visumstermin zieht der Firmensitz von Pike County nach Lamar County. Die neue Adresse muss überall gemeldet werden.",
      why: "Behörden schicken Bescheide an die gemeldete Adresse. Abweichende Adressen in Genehmigung, Steuer und Bank führen zu Rückfragen.",
      todo: [
        "Mit dem Anwalt klären, ob die Adressänderung das E-2-Visum betrifft (das Visum wurde mit der alten Adresse beantragt)",
        "Georgia Secretary of State: Hauptsitz (principal office address) online ändern",
        "IRS: Formular 8822-B (Change of Address, Business) per Post schicken",
        "Georgia Tax Center: Adresse im Firmenkonto ändern",
        "Bank, Versicherungen, Steuerberater informieren",
        "Gesundheitsamt: neue Postadresse für die Genehmigung mitteilen",
        "Falls ihr auch privat umzieht: SSA, DDS (innerhalb von 60 Tagen neue Adresse im Führerschein) und Zulassungsstelle informieren",
        "In „Unsere Daten“ die Firmenadresse auf die neue Adresse ändern",
      ],
      forms: [
        {
          title: "IRS Form 8822-B (Ausfüllhilfe)",
          url: "https://www.irs.gov/forms-pubs/about-form-8822-b",
          fields: [
            { label: "Check all boxes this change affects", value: "Business location; Employment, excise, income, and other business returns" },
            { label: "Business name", value: "{{businessName}}" },
            { label: "Employer identification number", value: "{{ein}}" },
            { label: "Old mailing address", value: "{{street}}, {{city}}, {{state}} {{zip}}" },
            { label: "New mailing address", value: "{{baseStreet}}, {{baseCity}}, GA {{baseZip}}" },
            { label: "New business location", value: "{{baseStreet}}, {{baseCity}}, GA {{baseZip}}" },
            { label: "Signature: name and title", value: "{{owner1}}, {{owner1Title}}" },
            { label: "Daytime telephone", value: "{{phone}}" },
          ],
        },
      ],
      sources: [
        { title: "Georgia Secretary of State: Corporations Division (eCorp)", url: "https://ecorp.sos.ga.gov/" },
        { title: "IRS: Form 8822-B", url: "https://www.irs.gov/forms-pubs/about-form-8822-b" },
      ],
    },
    {
      id: "ssn-beantragen",
      phase: "ankunft",
      title: "Social Security Number (SSN) beantragen",
      summary: "Beide gehen persönlich zum SSA-Büro. Die SSN braucht ihr für Führerschein, Bank, Steuern und Genehmigungen.",
      why: "Mit E-2 (bzw. E-2S) habt ihr eine Arbeitserlaubnis und deshalb Anspruch auf eine SSN.",
      where: [{ ref: "ssa" }],
      bring: [
        "Reisepass mit E-2-Visum (Original)",
        "Ausgedruckte I-94",
        "Ausgefülltes Formular SS-5 (Application for a Social Security Card)",
        "Für Ehepartner: Heiratsurkunde (internationale Fassung oder mit beglaubigter Übersetzung) mitnehmen, falls danach gefragt wird",
      ],
      todo: [
        "Formular SS-5 herunterladen und vorab ausfüllen (Ausfüllhilfe unten)",
        "Nächstes SSA-Büro über die Suche finden, Termin über 1-800-772-1213 vereinbaren oder morgens früh hingehen",
        "Hingehen, Antrag abgeben, Quittung behalten",
        "Karte kommt per Post an {{street}}, {{city}} (meist nach 2 bis 4 Wochen)",
      ],
      scripts: [
        {
          title: "Im SSA-Büro",
          kind: "inperson",
          lines: [
            { en: "Hello, we would like to apply for Social Security numbers. We are German citizens with E-2 visas.", de: "Hallo, wir möchten Sozialversicherungsnummern beantragen. Wir sind Deutsche mit E-2-Visa." },
            { en: "Here are our passports, our I-94 records and the completed SS-5 forms.", de: "Hier sind unsere Pässe, unsere I-94 und die ausgefüllten SS-5-Formulare." },
            { en: "My spouse has E-2S status. The I-94 shows the E-2S class, which is evidence of work authorization.", de: "Mein Ehepartner hat E-2S. Die I-94 zeigt die Klasse E-2S, das ist der Nachweis der Arbeitserlaubnis." },
            { en: "Can I get a receipt that shows I applied?", de: "Kann ich eine Bestätigung bekommen, dass ich den Antrag gestellt habe?" },
          ],
        },
      ],
      forms: [
        {
          title: "SS-5: Antrag auf Social Security Card (Ausfüllhilfe)",
          url: "https://www.ssa.gov/forms/ss-5.pdf",
          note: "Persönliche Daten (Geburtsdatum, Geburtsort, Namen der Eltern) tragt ihr direkt auf dem Formular ein. Sie werden auf dieser Seite absichtlich nicht gespeichert.",
          fields: [
            { label: "Name to be shown on card", value: "{{owner1}}", hint: "Genau wie im Pass" },
            { label: "Citizenship", value: "Legal Alien Allowed To Work" },
            { label: "Place of birth", value: "", hint: "Stadt, „Germany“ (ins Formular schreiben)" },
            { label: "Mailing address", value: "{{street}}, {{city}}, {{state}} {{zip}}" },
            { label: "Daytime phone number", value: "{{phone}}" },
            { label: "Has the applicant ever received a Social Security number before?", value: "No" },
          ],
        },
      ],
      cautions: [
        "Für Ehepartner mit E-2S: Seit 2022 gilt die I-94 mit dem Vermerk E-2S als Nachweis der Arbeitserlaubnis. Falls das SSA-Büro trotzdem eine Arbeitserlaubniskarte (EAD) verlangt, nicht diskutieren, sondern den Anwalt einschalten.",
      ],
      sources: [
        { title: "SSA: Social Security Numbers für Nicht-Staatsbürger", url: "https://www.ssa.gov/pubs/EN-05-10096.pdf" },
        { title: "SSA: Büro finden", url: "https://secure.ssa.gov/ICON/main.jsp" },
      ],
    },
    {
      id: "fuehrerschein",
      phase: "ankunft",
      title: "Georgia-Führerschein beantragen",
      summary: "Erst bei der DDS anrufen und klären, ob der deutsche Führerschein ohne Prüfung umgeschrieben werden kann. Sonst: Theorie (gibt es auf Deutsch), Sehtest, Fahrprüfung.",
      why: "Wer in Georgia wohnt, muss innerhalb von 30 Tagen einen Georgia-Führerschein haben. Ohne Georgia-Führerschein oder ID-Karte kann man auch kein Auto anmelden.",
      where: [{ ref: "dds" }],
      todo: [
        "Mit SSN-Karte (oder Antragsbestätigung) warten, bis die SSN da ist. Die DDS verlangt sie.",
        "DDS anrufen oder schreiben (Skript unten)",
        "Termin im Kundenzentrum buchen (online)",
        "Falls Prüfung nötig: Fahrerhandbuch lernen, Theorieprüfung auf Deutsch wählen",
        "Falls Fahrprüfung nötig: eigenes, versichertes und angemeldetes Auto mitbringen",
      ],
      bring: [
        "Reisepass mit E-2-Visum (Original)",
        "Ausgedruckte I-94",
        "SSN-Karte",
        "2 Nachweise der Wohnadresse in Georgia mit Name und Adresse {{street}}, {{city}} (z. B. Mietvertrag, Strom- oder Wasserrechnung, Kontoauszug)",
        "Deutscher Führerschein (Original)",
        "Übersetzung des deutschen Führerscheins ins Englische (alle Dokumente müssen auf Englisch sein; fragt, welche Übersetzung akzeptiert wird)",
        "Gebühr (meist 20 bis 32 USD; Karte oder bar)",
      ],
      scripts: [
        {
          title: "Anruf bei der DDS (vorher klären)",
          kind: "call",
          to: "DDS Kontaktzentrum (Nummer auf dds.georgia.gov unter „Contact Us“)",
          lines: [
            { en: "Hello, I have a valid German driver's license and I now live in Georgia. I have an E-2 visa.", de: "Hallo, ich habe einen gültigen deutschen Führerschein und wohne jetzt in Georgia. Ich habe ein E-2-Visum." },
            { en: "Does Georgia have a reciprocity agreement with Germany? Can I exchange my license without the knowledge test and road test?", de: "Hat Georgia ein Abkommen mit Deutschland? Kann ich meinen Führerschein ohne Theorie- und Fahrprüfung umschreiben?" },
            { en: "Do I need a certified translation of my German license? Which translators do you accept?", de: "Brauche ich eine beglaubigte Übersetzung meines Führerscheins? Welche Übersetzer akzeptieren Sie?" },
            { en: "Will I get my German license back?", de: "Bekomme ich meinen deutschen Führerschein zurück?" },
            { en: "Which documents do I need to bring as an E-2 visa holder?", de: "Welche Dokumente muss ich als E-2-Inhaber mitbringen?" },
          ],
        },
        {
          title: "Im Kundenzentrum",
          kind: "inperson",
          lines: [
            { en: "Hello, I would like to apply for a Georgia Class C driver's license. I am a new resident from Germany.", de: "Hallo, ich möchte einen Georgia-Führerschein Klasse C beantragen. Ich bin neu hier und komme aus Deutschland." },
            { en: "I would like to take the knowledge test in German, please.", de: "Ich möchte die Theorieprüfung bitte auf Deutsch machen." },
          ],
        },
      ],
      cautions: [
        "Ob Deutschland zu den Ländern mit Abkommen gehört, ließ sich nicht sicher bestätigen. Die offizielle DDS-Seite nennt nur Südkorea und Taiwan. Deshalb vorher anrufen.",
        "Der Führerschein läuft für Nicht-Staatsbürger meist mit dem Aufenthaltsdatum aus der I-94 ab.",
      ],
      sources: [
        { title: "DDS: Informationen für Nicht-Staatsbürger", url: "https://dds.georgia.gov/node/146" },
        { title: "DDS: Fahrer aus anderen Ländern", url: "https://dds.georgia.gov/drivers-other-nations" },
        { title: "DDS: Sprachen der Theorieprüfung (inkl. Deutsch)", url: "https://dds.georgia.gov/list-languages" },
        { title: "DDS: Standorte", url: "https://dds.georgia.gov/locations" },
      ],
    },
    {
      id: "auto-anmelden",
      phase: "ankunft",
      title: "Versicherung abschließen und Fahrzeuge anmelden",
      summary: "Erst Versicherung, dann Anmeldung beim Pike County Tax Commissioner in Zebulon (Wohnort).",
      where: [{ ref: "pikeTax" }],
      todo: [
        "Kfz-Versicherung für Privatauto abschließen",
        "Gewerbliche Kfz-Versicherung (commercial auto) für den Truck abschließen",
        "Beim Tax Commissioner anrufen und fragen, welche Unterlagen nötig sind (Skript unten)",
        "Anmelden und Kennzeichen abholen",
        "Kennzeichen des Trucks in „Unsere Daten“ eintragen",
      ],
      bring: [
        "Georgia-Führerschein",
        "Fahrzeugbrief („title“) bzw. Kaufvertrag",
        "Versicherungsnachweis",
        "Für den Truck auf Firmennamen: Gründungsunterlagen und EIN-Brief",
      ],
      scripts: [
        {
          title: "Anruf bei der Zulassungsstelle",
          kind: "call",
          to: "770-567-2001",
          lines: [
            { en: "Hello, we are new residents of Pike County. We need to register two vehicles: a personal car and a food truck for our business.", de: "Hallo, wir sind neu in Pike County. Wir müssen zwei Fahrzeuge anmelden: ein Privatauto und einen Food Truck für unsere Firma." },
            { en: "Which documents do we need to bring?", de: "Welche Unterlagen müssen wir mitbringen?" },
            { en: "Can the food truck be registered in the name of our company, {{businessName}}?", de: "Kann der Food Truck auf unsere Firma angemeldet werden?" },
            { en: "Do we need an emissions test or any inspection first?", de: "Brauchen wir vorher eine Abgasuntersuchung oder eine andere Prüfung?" },
          ],
        },
      ],
      sources: [
        { title: "Pike County Tax Commissioner", url: "https://www.pikecoga.com/tax-commissioner" },
      ],
    },
    {
      id: "sales-tax",
      phase: "ankunft",
      title: "Für die Umsatzsteuer (Sales Tax) in Georgia registrieren",
      summary: "Zubereitete Speisen sind in Georgia steuerpflichtig. Registrierung online im Georgia Tax Center.",
      todo: [
        "Prüfen, ob die Firma schon registriert ist (Anwalt oder Steuerberater fragen)",
        "Falls nicht: Konto im Georgia Tax Center anlegen und „Sales and Use Tax“ beantragen",
        "Steuernummer (Sales Tax ID) notieren",
        "Steuerberater (CPA) suchen, der die monatlichen Meldungen übernehmen kann",
      ],
      forms: [
        {
          title: "Georgia Tax Center: Registrierung (Ausfüllhilfe)",
          url: "https://gtc.dor.ga.gov/",
          fields: [
            { label: "Legal business name", value: "{{businessName}}" },
            { label: "Business type", value: "{{legalForm}}" },
            { label: "FEIN", value: "{{ein}}" },
            { label: "Physical address", value: "{{street}}, {{city}}, {{state}} {{zip}}" },
            { label: "County", value: "{{county}}" },
            { label: "Description of business", value: "Mobile food service (food truck) selling prepared food: {{menuSummary}}" },
            { label: "Contact phone", value: "{{phone}}" },
            { label: "Contact email", value: "{{email}}" },
          ],
        },
      ],
      sources: [
        { title: "Georgia Tax Center", url: "https://gtc.dor.ga.gov/" },
      ],
    },
    {
      id: "versicherungen",
      phase: "ankunft",
      title: "Geschäftsversicherungen abschließen",
      summary: "Haftpflicht ist Pflicht für die meisten Veranstaltungen. Ein unabhängiger Makler kann alles bündeln.",
      todo: [
        "General Liability (Betriebshaftpflicht)",
        "Commercial Auto (Truck)",
        "Workers' Compensation, sobald ihr Mitarbeiter habt (ab einer bestimmten Mitarbeiterzahl Pflicht)",
        "Versicherungsbestätigungen („Certificate of Insurance“) als PDF speichern; Veranstalter verlangen sie",
      ],
      scripts: [
        {
          title: "Anruf bei einem Versicherungsmakler",
          kind: "call",
          to: "Unabhängiger Versicherungsmakler (independent insurance agent)",
          lines: [
            { en: "Hello, we are opening a food truck business in Georgia. We need general liability, commercial auto and later workers' compensation insurance.", de: "Hallo, wir eröffnen einen Food Truck in Georgia. Wir brauchen Betriebshaftpflicht, gewerbliche Kfz-Versicherung und später eine Unfallversicherung für Mitarbeiter." },
            { en: "We are new to the US, so we do not have a US insurance history. Is that a problem?", de: "Wir sind neu in den USA und haben keine Versicherungshistorie hier. Ist das ein Problem?" },
            { en: "Can you send us a quote by email?", de: "Können Sie uns ein Angebot per E-Mail schicken?" },
          ],
        },
      ],
    },

    // ================= PHASE: GENEHMIGUNG =================
    {
      id: "inspektion",
      phase: "genehmigung",
      title: "Inspektion von Truck und Stützpunkt",
      summary: "Das Amt prüft Truck und Base of Operation vor Ort. Danach gibt es die Genehmigung.",
      todo: [
        "Truck komplett sauber, Wasser gefüllt, alle Geräte an",
        "Thermometer in jedem Kühlgerät (an der wärmsten Stelle)",
        "Seife, Papierhandtücher und Schild „Handwaschbecken“ am Handwaschbecken",
        "CFSM-Zertifikat dabei",
        "Notizen machen, falls etwas nachgebessert werden muss",
      ],
      scripts: [
        {
          title: "Während der Inspektion",
          kind: "inperson",
          lines: [
            { en: "Thank you for coming. Please let me know if anything needs to be corrected.", de: "Danke, dass Sie gekommen sind. Bitte sagen Sie mir, wenn etwas nachgebessert werden muss." },
            { en: "Could you write down the items we need to fix, so we can do them right away?", de: "Können Sie aufschreiben, was wir verbessern müssen, damit wir es sofort erledigen?" },
            { en: "When can you come back for the follow-up inspection?", de: "Wann können Sie zur Nachkontrolle kommen?" },
          ],
        },
      ],
    },
    {
      id: "genehmigung-aushaengen",
      phase: "genehmigung",
      title: "Genehmigung erhalten und Truck beschriften",
      summary: "Genehmigung und letzter Prüfbericht müssen im Truck sichtbar hängen.",
      todo: [
        "Genehmigung (permit) und Inspektionsbericht gut sichtbar aufhängen",
        "Fragen, welche Beschriftung außen vorgeschrieben ist (in anderen Counties: Name, Adresse und Permit-Nummer in mindestens 2 Zoll hohen Buchstaben)",
        "Permit-Nummer in „Unsere Daten“ notieren (Notizfeld)",
      ],
    },

    // ================= PHASE: BETRIEB =================
    {
      id: "verkaufsorte",
      phase: "betrieb",
      title: "Verkaufsorte anmelden",
      summary: "Andere Counties in Georgia müssen eure Genehmigung anerkennen, aber ihr müsst euch dort melden. Städte können eigene Genehmigungen verlangen.",
      todo: [
        "Für jeden Verkaufsort: Mobile Food Unit Location Form ausfüllen",
        "Gesundheitsamt mindestens 7 Tage vor einem neuen Verkaufsort informieren",
        "Bei Verkaufsorten in anderen Counties: dort beim Gesundheitsamt melden (Kopie eurer Genehmigung)",
        "Bei der Stadt fragen, ob eine Verkaufsgenehmigung (vending permit) nötig ist",
        "Erlaubnis des Grundstückseigentümers und Toilette in der Nähe sicherstellen",
      ],
      emails: [
        {
          title: "Anfrage an eine Stadt wegen Verkaufsgenehmigung",
          to: "",
          subject: "Food truck vending permit: {{businessName}}",
          body:
            "Hello,\n\nWe operate a permitted food truck, {{unitName}}, with our base of operation in Lamar County.\n\n" +
            "We would like to sell food at [LOCATION] on [DATES]. Do we need a vending permit from the city? If so, could you please send the application and the fee?\n\n" +
            "Thank you,\n{{owner1}}\n{{businessName}}\n{{phone}}\n{{email}}",
          de: "Übersetzung: Wir betreiben einen genehmigten Food Truck mit Stützpunkt in Lamar County und möchten an [ORT] am [DATUM] verkaufen. Brauchen wir eine Genehmigung der Stadt? Bitte Antrag und Gebühr schicken. Ort und Datum vor dem Senden ersetzen.",
        },
      ],
      sources: [
        { title: "Georgia Gesetz § 26-2-379 (Anerkennung in anderen Counties)", url: "https://law.justia.com/codes/georgia/title-26/chapter-2/article-13/section-26-2-379" },
      ],
    },
    {
      id: "laufend",
      phase: "betrieb",
      title: "Regelmäßige Pflichten",
      summary: "Diese Punkte kommen jedes Jahr oder jeden Tag wieder.",
      todo: [
        "Täglich: zum Stützpunkt zurück, Frischwasser auffüllen, Abwasser entleeren",
        "Monatlich (oder wie festgelegt): Sales-Tax-Meldung im Georgia Tax Center",
        "Jährlich bis 31. März: Gewerbeschein Lamar County erneuern",
        "Gesundheitsgenehmigung: Ablaufdatum notieren und rechtzeitig verlängern",
        "CFSM-Zertifikat: Ablaufdatum notieren (meist 5 Jahre)",
        "I-94: Ablaufdatum im Blick behalten (meist 2 Jahre pro Einreise)",
        "Georgia-Führerschein: läuft oft mit der I-94 ab, rechtzeitig verlängern",
      ],
    },
  ],
};

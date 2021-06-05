import { useState } from "react";

import Input from "./components/Input.js";
import Radio from "./components/Radio.js";
import Ausgabebereich from "./components/Ausgabebereich.js";
import { Ueberschrift1 } from "./components/Ueberschriften.js";
// import Checkbox from "./components/Checkbox.js";

const App = () => {
   let i = 0;
   const titelGeschlecht = ++i + ".) Geschlecht";
   const titelVorname = ++i + ".) Vorname";
   const titelBegleitetVon = ++i + ".) Begleitet von";
   const titelBlickkontakt = ++i + ".) Blickkontakt";
   const titelSpielverhalten = ++i + ".) Spielverhalten";
   const titelSpielformen = ++i + ".) Spielformen";
   const titelKonzentration = ++i + ".) Konzentrationsfähigkeit / Aufmerksamkeitslenkung";
   const titelReaktionAufAnsprache = ++i + ".) Reaktion auf Ansprache";
   const titelReaktionAufGeraeusche = ++i + ".) Reaktion auf Geräusche";
   const titelLokalisationUndIdentifikationVonGeraeuschen = ++i + ".) Lokalisation und Identifikation von Geräuschen";
   const titelAuditiveMerkspanne = ++i + ".) Auditive Merkspanne";

   const [Vorname, setVorname] = useState(localStorage.getItem(titelVorname) || "");
   const [geschlecht, setGeschlecht] = useState(localStorage.getItem(titelGeschlecht));
   const [begleitetVon, setBegleitetVon] = useState(localStorage.getItem(titelBegleitetVon));
   const [blickkontakt, setBlickkontakt] = useState(localStorage.getItem(titelBlickkontakt));
   const [spielverhalten, setSpielverhalten] = useState(localStorage.getItem(titelSpielverhalten));
   const [spielformen, setSpielformen] = useState(localStorage.getItem(titelSpielformen));
   const [konzentration, setKonzentration] = useState(localStorage.getItem(titelKonzentration));
   const [reaktionAufAnsprache, setReaktionAufAnsprache] = useState(localStorage.getItem(titelReaktionAufAnsprache));
   const [reaktionAufGeraeusche, setReaktionAufGeraeusche] = useState(localStorage.getItem(titelReaktionAufGeraeusche));
   const [lokalisationUndIdentifikationVonGeraeuschen, setLokalisationUndIdentifikationVonGeraeuschen] = useState(
      localStorage.getItem(titelLokalisationUndIdentifikationVonGeraeuschen)
   );
   const [auditiveMerkspanne, setAuditiveMerkspanne] = useState(localStorage.getItem(titelAuditiveMerkspanne));

   const resetAll = () => {
      setVorname("");
      setGeschlecht(null);
      setBegleitetVon(null);
      setBlickkontakt(null);
      setSpielverhalten(null);
      setSpielformen(null);
      setKonzentration(null);
      setReaktionAufAnsprache(null);
      setReaktionAufGeraeusche(null);
      setLokalisationUndIdentifikationVonGeraeuschen(null);
      setAuditiveMerkspanne(null);
      localStorage.clear();
   };

   const auswahlGeschlecht = ["Junge", "Mädchen"];

   const Er_Sie = geschlecht === "Junge" ? "Er" : "Sie";
   const er_sie = geschlecht === "Junge" ? "er" : "sie";
   const Sein_Ihr = geschlecht === "Junge" ? "Sein" : "Ihr";
   const sein_ihr = geschlecht === "Junge" ? "sein" : "ihr";
   const ihm_ihr = geschlecht === "Junge" ? "ihm" : "ihr";
   const seiner_ihrer = geschlecht === "Junge" ? "seiner" : "ihrer";
   const seinem_ihrem = geschlecht === "Junge" ? "seinem" : "ihrem";
   const seinen_ihren = geschlecht === "Junge" ? "seinen" : "ihren";

   let ausgabe = "";

   // Begleitet von
   const auswahlBegleitetVon = [
      "Mutter",
      "Vater",
      "Eltern",
      "Pflegemutter",
      "Pflegevater",
      "Pflegeeltern",
      "Familienhelferin",
      "Familienhelfer",
      "[ Sonstiges ]"
   ];

   if (begleitetVon && Vorname) {
      switch (begleitetVon) {
         case "Mutter":
            ausgabe += `${Vorname} wurde von ${seiner_ihrer} Mutter begleitet.`;
            break;
         case "Vater":
            ausgabe += `${Vorname} wurde von ${seinem_ihrem} Vater begleitet.`;
            break;
         case "Eltern":
            ausgabe += `${Vorname} wurde von ${seinen_ihren} Eltern begleitet.`;
            break;
         case "Pflegemutter":
            ausgabe += `${Vorname} wurde von ${seiner_ihrer} Pflegemutter begleitet.`;
            break;
         case "Pflegevater":
            ausgabe += `${Vorname} wurde von ${seinem_ihrem} Pflegevater begleitet.`;
            break;
         case "Pflegeeltern":
            ausgabe += `${Vorname} wurde von ${seinen_ihren} Pflegeeltern begleitet.`;
            break;
         case "Familienhelferin":
            ausgabe += `${Vorname} wurde von ${seiner_ihrer} Familienhelferin begleitet.`;
            break;
         case "Familienhelfer":
            ausgabe += `${Vorname} wurde von ${seinem_ihrem} Familienhelfer begleitet.`;
            break;
         case "[ Sonstiges ]":
            ausgabe += `${Vorname} wurde von XXXX begleitet.`;
            break;
         default:
            ausgabe += ``;
      }
   }

   ausgabe += "\n\n";

   // Blickkontakt
   const auswahlBlickkontakt = ["dialogisch", "triangulär", "dialogisch und triangulär", "kein Blickkontakt"];

   if (blickkontakt) {
      switch (blickkontakt) {
         case "dialogisch":
            ausgabe += `${Er_Sie} zeigte einen dialogischen Blickkontakt.`;
            break;
         case "triangulär":
            ausgabe += `${Er_Sie} zeigte einen triangulären Blickkontakt.`;
            break;
         case "dialogisch und triangulär":
            ausgabe += `${Er_Sie} zeigte einen dialogischen und triangulären Blickkontakt.`;
            break;
         case "kein Blickkontakt":
            ausgabe += `${Er_Sie} nahm keinen Blickkontakt auf.`;
            break;
         default:
            ausgabe += ``;
      }
   }

   ausgabe += " ";

   // Spielverhalten
   const auswahlSpielverhalten = ["wechselhaft", "ausdauernd", "kein Spielverhalten"];

   if (spielverhalten) {
      switch (spielverhalten) {
         case "wechselhaft":
            ausgabe += `${Sein_Ihr} Spielverhalten war wechselhaft.`;
            break;
         case "ausdauernd":
            ausgabe += `${Sein_Ihr} Spielverhalten war ausdauernd.`;
            break;
         case "kein Spielverhalten":
            ausgabe += `Mit dem Spielmaterial konnte ${er_sie} sich noch nicht alleine beschäftigen.`;
            break;
         default:
            ausgabe += ``;
      }
   }

   ausgabe += " ";

   // Spielformen
   const auswahlSpielformen = ["Funktionsspiel", "Symbolspiel"];

   if (spielformen) {
      switch (spielformen) {
         case "Funktionsspiel":
            ausgabe += `Das Spiel war funktionsorientiert.`;
            break;
         case "Symbolspiel":
            ausgabe += `Es war ein Symbolspiel zu beobachten.`;
            break;
         default:
            ausgabe += ``;
      }
   }

   ausgabe += " ";

   // Konzentrationsfähigkeit / Aufmerksamkeitslenkung
   const auswahlKonzentration = ["angemessen", "nicht angemessen"];

   if (konzentration) {
      switch (konzentration) {
         case "angemessen":
            ausgabe += `Die Konzentrationsfähigkeit und Aufmerksamkeitslenkung waren angemessen.`;
            break;
         case "nicht angemessen":
            ausgabe += `Die Konzentrationsfähigkeit und Aufmerksamkeitslenkung waren nicht angemessen.`;
            break;
         default:
            ausgabe += ``;
      }
   }

   ausgabe += "\n\n";

   // Reaktion auf Ansprache
   const auswahlReaktionAufAnsprache = ["reagiert", "reagiert nicht"];

   if (reaktionAufAnsprache) {
      switch (reaktionAufAnsprache) {
         case "reagiert":
            ausgabe += `Auf Ansprache reagierte ${Vorname}.`;
            break;
         case "reagiert nicht":
            ausgabe += `Auf Ansprache reagierte ${Vorname} nicht.`;
            break;
         default:
            ausgabe += ``;
      }
   }

   ausgabe += " ";

   // Reaktion auf Geräusche
   const auswahlReaktionAufGeraeusche = ["reagiert", "reagiert nicht"];

   if (reaktionAufGeraeusche) {
      switch (reaktionAufGeraeusche) {
         case "reagiert":
            ausgabe += `Geräusche in ${seiner_ihrer} Umgebung nahm ${er_sie} wahr.`;
            break;
         case "reagiert nicht":
            ausgabe += `Geräusche in ${seiner_ihrer} Umgebung nahm ${er_sie} nicht wahr.`;
            break;
         default:
            ausgabe += ``;
      }
   }

   ausgabe += " ";

   // Lokalisation und Identifikation von Geräuschen
   const auswahlLokalisationUndIdentifikationVonGeraeuschen = [
      "Lokalisation und Identifikation sicher",
      "Lokalisation und Identifikation nicht ausreichend zu beurteilen",
      "nur Identifikation sicher",
      "nur Lokalisation sicher"
   ];

   if (lokalisationUndIdentifikationVonGeraeuschen) {
      switch (lokalisationUndIdentifikationVonGeraeuschen) {
         case "Lokalisation und Identifikation sicher":
            ausgabe += `Die Lokalisation und Identifikation von Geräuschen gelang ${ihm_ihr} sicher.`;
            break;
         case "Lokalisation und Identifikation nicht ausreichend zu beurteilen":
            ausgabe += `Die Lokalisation und Identifikation von Geräuschen konnte noch nicht ausreichend beurteilt werden.`;
            break;
         case "nur Identifikation sicher":
            ausgabe += `${Vorname} identifizierte Geräusche sicher, die Lokalisation von Geräuschen war aber noch nicht ausreichend zu beurteilen.`;
            break;
         case "nur Lokalisation sicher":
            ausgabe += `Die Lokalisation von Geräuschen gelang ${Vorname} sicher, die Identifikation von Geräuschen allerdings noch nicht.`;
            break;
         default:
            ausgabe += ``;
      }
   }

   ausgabe += " ";

   // Auditive Merkspanne
   const auswahlAuditiveMerkspanne = ["altersentsprechend", "nicht altersentsprechend"];

   if (auditiveMerkspanne) {
      switch (auditiveMerkspanne) {
         case "altersentsprechend":
            ausgabe += `Die auditive Merkspanne war altersentsprechend.`;
            break;
         case "nicht altersentsprechend":
            ausgabe += `Die auditive Merkspanne war noch nicht altersentsprechend.`;
            break;
         default:
            ausgabe += ``;
      }
   }

   ausgabe += " ";

   return (
      <div className="h-95v grid md:grid-cols-2 md:gap-5 gap-2 md:px-10 md:pt-10 px-3 pt-3 pb-10">
         <div className="h-full overflow-auto bg-white shadow-sm rounded-md p-5 border border-gray-300">
            <Ueberschrift1 text="Allgemeines" />
            <Radio value={geschlecht} onChange={setGeschlecht} title={titelGeschlecht} auswahl={auswahlGeschlecht} />
            <Input value={Vorname} onChange={setVorname} title={titelVorname} />
            <Radio value={begleitetVon} onChange={setBegleitetVon} title={titelBegleitetVon} auswahl={auswahlBegleitetVon} />
            <Ueberschrift1 text="Blickkontakt, Spielentwicklung und Konzentration" />
            <Radio value={blickkontakt} onChange={setBlickkontakt} title={titelBlickkontakt} auswahl={auswahlBlickkontakt} />
            <Radio value={spielverhalten} onChange={setSpielverhalten} title={titelSpielverhalten} auswahl={auswahlSpielverhalten} />
            <Radio value={spielformen} onChange={setSpielformen} title={titelSpielformen} auswahl={auswahlSpielformen} />
            <Radio value={konzentration} onChange={setKonzentration} title={titelKonzentration} auswahl={auswahlKonzentration} />
            <Ueberschrift1 text="Auditive Wahrnehmung" />
            <Radio value={reaktionAufAnsprache} onChange={setReaktionAufAnsprache} title={titelReaktionAufAnsprache} auswahl={auswahlReaktionAufAnsprache} />
            <Radio
               value={reaktionAufGeraeusche}
               onChange={setReaktionAufGeraeusche}
               title={titelReaktionAufGeraeusche}
               auswahl={auswahlReaktionAufGeraeusche}
            />
            <Radio
               value={lokalisationUndIdentifikationVonGeraeuschen}
               onChange={setLokalisationUndIdentifikationVonGeraeuschen}
               title={titelLokalisationUndIdentifikationVonGeraeuschen}
               auswahl={auswahlLokalisationUndIdentifikationVonGeraeuschen}
            />
            <Radio value={auditiveMerkspanne} onChange={setAuditiveMerkspanne} title={titelAuditiveMerkspanne} auswahl={auswahlAuditiveMerkspanne} />
            <Ueberschrift1 text="Mundmotorik" />
         </div>

         <Ausgabebereich ausgabe={ausgabe} resetAll={resetAll} />
      </div>
   );
};

export default App;

import { useState } from "react";

import Input from "./components/Input.js";
import InputFreitext from "./components/InputFreitext.js";
import Radio from "./components/Radio.js";
import Ausgabebereich from "./components/Ausgabebereich.js";
import { Ueberschrift1 } from "./components/Ueberschriften.js";

const App = () => {
   const titelGeschlecht = "Geschlecht";
   const titelVorname = "Vorname";
   const titelBegleitetVon = "Begleitet von";
   const titelBlickkontakt = "Blickkontakt";
   const titelSpielverhalten = "Spielverhalten";
   const titelSpielformen = "Spielformen";
   const titelKonzentration = "Konzentrationsfähigkeit und Aufmerksamkeitslenkung";
   const titelRAA = "Reaktion auf Ansprache";
   const titelRAG = "Reaktion auf Geräusche";
   const titelLUIVG = "Lokalisation und Identifikation von Geräuschen";
   const titelAMS = "Auditive Merkspanne";
   const titelOFT = "Orofazialer Tonus";
   const titelMundschluss = "Mundschluss";
   const titelSpeichelfluss = "Speichelfluss";
   const titelPusten = "Pusten";
   const titelAnsaugen = "Ansaugen";

   const [vorname, setVorname] = useState(localStorage.getItem(titelVorname) || "");
   const [geschlecht, setGeschlecht] = useState(localStorage.getItem(titelGeschlecht));
   const [begleitetVon, setBegleitetVon] = useState(localStorage.getItem(titelBegleitetVon));
   const [blickkontakt, setBlickkontakt] = useState(localStorage.getItem(titelBlickkontakt));
   const [spielverhalten, setSpielverhalten] = useState(localStorage.getItem(titelSpielverhalten));
   const [spielformen, setSpielformen] = useState(localStorage.getItem(titelSpielformen));
   const [konzentration, setKonzentration] = useState(localStorage.getItem(titelKonzentration));
   const [raa, setRAA] = useState(localStorage.getItem(titelRAA));
   const [rag, setRAG] = useState(localStorage.getItem(titelRAG));
   const [luivg, setLUIVG] = useState(localStorage.getItem(titelLUIVG));
   const [ams, setAMS] = useState(localStorage.getItem(titelAMS));
   const [oft, setOFT] = useState(localStorage.getItem(titelOFT));
   const [mundschluss, setMundschluss] = useState(localStorage.getItem(titelMundschluss));
   const [speichelfluss, setSpeichelfluss] = useState(localStorage.getItem(titelSpeichelfluss));
   const [pusten, setPusten] = useState(localStorage.getItem(titelPusten));
   const [ansaugen, setAnsaugen] = useState(localStorage.getItem(titelAnsaugen));

   const [begleitetVonFreitext, setBegleitetVonFreitext] = useState(localStorage.getItem(titelBegleitetVon + " (Freitext)") || "");

   const resetAll = () => {
      setVorname("");
      setGeschlecht(null);
      setBegleitetVon(null);
      setBlickkontakt(null);
      setSpielverhalten(null);
      setSpielformen(null);
      setKonzentration(null);
      setRAA(null);
      setRAG(null);
      setLUIVG(null);
      setAMS(null);
      setOFT(null);
      setMundschluss(null);
      setSpeichelfluss(null);
      setPusten(null);
      setAnsaugen(null);

      setBegleitetVonFreitext("");

      localStorage.clear();
   };

   const auswahlGeschlecht = ["Junge", "Mädchen"];

   const Er_Sie = geschlecht === "Junge" ? "Er" : "Sie";
   const er_sie = geschlecht === "Junge" ? "er" : "sie";
   const Sein_Ihr = geschlecht === "Junge" ? "Sein" : "Ihr";
   const sein_ihr = geschlecht === "Junge" ? "sein" : "ihr";
   const Seine_Ihre = geschlecht === "Junge" ? "Seine" : "Ihre";
   const seine_ihre = geschlecht === "Junge" ? "seine" : "ihre";
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

   if (begleitetVon && vorname) {
      switch (begleitetVon) {
         case "Mutter":
            ausgabe += `${vorname} wurde von ${seiner_ihrer} Mutter begleitet.`;
            break;
         case "Vater":
            ausgabe += `${vorname} wurde von ${seinem_ihrem} Vater begleitet.`;
            break;
         case "Eltern":
            ausgabe += `${vorname} wurde von ${seinen_ihren} Eltern begleitet.`;
            break;
         case "Pflegemutter":
            ausgabe += `${vorname} wurde von ${seiner_ihrer} Pflegemutter begleitet.`;
            break;
         case "Pflegevater":
            ausgabe += `${vorname} wurde von ${seinem_ihrem} Pflegevater begleitet.`;
            break;
         case "Pflegeeltern":
            ausgabe += `${vorname} wurde von ${seinen_ihren} Pflegeeltern begleitet.`;
            break;
         case "Familienhelferin":
            ausgabe += `${vorname} wurde von ${seiner_ihrer} Familienhelferin begleitet.`;
            break;
         case "Familienhelfer":
            ausgabe += `${vorname} wurde von ${seinem_ihrem} Familienhelfer begleitet.`;
            break;
         case "[ Sonstiges ]":
            ausgabe += `${vorname} wurde von ${begleitetVonFreitext} begleitet.`;
            break;
         default:
            ausgabe += ``;
      }
      ausgabe += "\n\n";
   }

   // Blickkontakt
   const auswahlBlickkontakt = ["dialogisch", "dialogisch und triangulär", "kein Blickkontakt"];

   if (blickkontakt) {
      switch (blickkontakt) {
         case "dialogisch":
            ausgabe += `${Er_Sie} zeigte einen dialogischen Blickkontakt.`;
            break;
         case "dialogisch und triangulär":
            ausgabe += `${Er_Sie} zeigte einen dialogischen und triangulären Blickkontakt.`;
            break;
         case "kein Blickkontakt":
            ausgabe += `${Er_Sie} nahm noch keinen Blickkontakt auf.`;
            break;
         default:
            ausgabe += ``;
      }
      ausgabe += ` `;
   }

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
            ausgabe += `Mit dem Spielmaterial konnte ${er_sie} sich noch nicht allein beschäftigen.`;
            break;
         default:
            ausgabe += ``;
      }
      ausgabe += ` `;
   }

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
      ausgabe += ` `;
   }

   // Konzentrationsfähigkeit und Aufmerksamkeitslenkung
   const auswahlKonzentration = ["angemessen", "nicht angemessen"];

   if (konzentration) {
      switch (konzentration) {
         case "angemessen":
            ausgabe += `Die Konzentrationsfähigkeit und Aufmerksamkeitslenkung waren angemessen.`;
            break;
         case "nicht angemessen":
            ausgabe += `Die Konzentrationsfähigkeit und Aufmerksamkeitslenkung waren noch nicht angemessen.`;
            break;
         default:
            ausgabe += ``;
      }
      ausgabe += `\n\n`;
   }

   // Reaktion auf Ansprache
   const auswahlRAA = ["reagiert", "reagiert nicht"];

   if (raa) {
      switch (raa) {
         case "reagiert":
            ausgabe += `Auf Ansprache reagierte ${vorname}.`;
            break;
         case "reagiert nicht":
            ausgabe += `Auf Ansprache reagierte ${vorname} nicht.`;
            break;
         default:
            ausgabe += ``;
      }
      ausgabe += ` `;
   }

   // Reaktion auf Geräusche
   const auswahlRAG = ["reagiert", "reagiert nicht"];

   if (rag) {
      switch (rag) {
         case "reagiert":
            ausgabe += `Geräusche in ${seiner_ihrer} Umgebung nahm ${er_sie} wahr.`;
            break;
         case "reagiert nicht":
            ausgabe += `Geräusche in ${seiner_ihrer} Umgebung nahm ${er_sie} nicht wahr.`;
            break;
         default:
            ausgabe += ``;
      }
      ausgabe += ` `;
   }

   // Lokalisation und Identifikation von Geräuschen
   const auswahlLUIVG = ["sicher", "nicht ausreichend zu beurteilen", "nur Identifikation sicher", "nur Lokalisation sicher"];

   if (luivg) {
      switch (luivg) {
         case "sicher":
            ausgabe += `Die Lokalisation und Identifikation von Geräuschen gelang ${ihm_ihr} sicher.`;
            break;
         case "nicht ausreichend zu beurteilen":
            ausgabe += `${Seine_Ihre} Fähigkeit zur Lokalisation und Identifikation von Geräuschen konnte noch nicht ausreichend beurteilt werden.`;
            break;
         case "nur Identifikation sicher":
            ausgabe += `${vorname} identifizierte Geräusche sicher. ${Seine_Ihre} Fähigkeit zur Lokalisation von Geräuschen war aber noch nicht ausreichend zu beurteilen.`;
            break;
         case "nur Lokalisation sicher":
            ausgabe += `Die Lokalisation von Geräuschen gelang ${vorname} sicher. ${Seine_Ihre} Fähigkeit zur Identifikation von Geräuschen allerdings noch nicht.`;
            break;
         default:
            ausgabe += ``;
      }
      ausgabe += ` `;
   }

   // Auditive Merkspanne
   const auswahlAMS = ["altersentsprechend", "nicht altersentsprechend"];

   if (ams) {
      switch (ams) {
         case "altersentsprechend":
            ausgabe += `Die auditive Merkspanne war altersentsprechend.`;
            break;
         case "nicht altersentsprechend":
            ausgabe += `Die auditive Merkspanne war noch nicht altersentsprechend.`;
            break;
         default:
            ausgabe += ``;
      }
      ausgabe += `\n\n`;
   }

   // Orofazialer Tonus
   const auswahlOFT = ["reguliert", "nicht ausreichend reguliert"];

   if (oft) {
      switch (oft) {
         case "reguliert":
            ausgabe += `Der orofaziale Tonus erschien ausreichend reguliert.`;
            break;
         case "nicht ausreichend reguliert":
            ausgabe += `Der orofaziale Tonus erschien noch nicht ausreichend reguliert.`;
            break;
         default:
            ausgabe += ``;
      }
      ausgabe += ` `;
   }

   // Mundschluss
   const auswahlMundschluss = ["konstant", "offen"];

   if (mundschluss) {
      switch (mundschluss) {
         case "konstant":
            ausgabe += `Es wurde ein konstanter Mundschluss beobachtet.`;
            break;
         case "offen":
            ausgabe += `Es wurde eine offene Mundhaltung beobachtet.`;
            break;
         default:
            ausgabe += ``;
      }
      ausgabe += ` `;
   }

   // Speichelfluss
   const auswahlSpeichelfluss = ["vermehrter Speichelfluss", "[ keine Angabe ]"];

   if (speichelfluss) {
      switch (speichelfluss) {
         case "vermehrter Speichelfluss":
            ausgabe += `Es trat ein vermehrter Speichelfluss auf.`;
            ausgabe += ` `;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
         default:
            ausgabe += ``;
      }
   }

   // Pusten
   const auswahlPusten = ["möglich", "nicht möglich", "[ keine Angabe ]"];

   if (pusten) {
      switch (pusten) {
         case "möglich":
            ausgabe += `${vorname} pustete Seifenblasen mit dosiertem Luftstrom.`;
            ausgabe += ` `;
            break;
         case "nicht möglich":
            ausgabe += `${vorname} konnte noch keine Seifenblasen mit dosiertem Luftstrom pusten.`;
            ausgabe += ` `;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
         default:
            ausgabe += ``;
      }
   }

   // Ansaugen
   const auswahlAnsaugen = ["möglich", "nicht möglich", "[ keine Angabe ]"];

   if (ansaugen) {
      switch (ansaugen) {
         case "möglich":
            ausgabe += `Das Ansaugen mit einem Strohhalm gelang ${ihm_ihr}.`;
            ausgabe += ` `;
            break;
         case "nicht möglich":
            ausgabe += `Das Ansaugen mit einem Strohhalm gelang ${ihm_ihr} noch nicht.`;
            ausgabe += ` `;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
         default:
            ausgabe += ``;
      }
   }

   ausgabe += `\n\n-----------------------------\n
${titelGeschlecht}: ${geschlecht || "---"}
${titelVorname}: ${vorname || "---"}
${titelBegleitetVon}: ${begleitetVon !== "[ Sonstiges ]" ? begleitetVon || "---" : begleitetVonFreitext}
${titelBlickkontakt}: ${blickkontakt || "---"}
${titelSpielverhalten}: ${spielverhalten || "---"}
${titelSpielformen}: ${spielformen || "---"}
${titelKonzentration}: ${konzentration || "---"}
${titelRAA}: ${raa || "---"}
${titelRAG}: ${rag || "---"}
${titelLUIVG}: ${luivg || "---"}
${titelAMS}: ${ams || "---"}
${titelOFT}: ${oft || "---"}
${titelMundschluss}: ${mundschluss || "---"}
${titelSpeichelfluss}: ${speichelfluss || "---"}
${titelPusten}: ${pusten || "---"}
${titelAnsaugen}: ${ansaugen || "---"}`;

   let i = 0;

   return (
      <div className="h-95v grid md:grid-cols-2 gap-2 md:gap-4 px-3 pt-3 pb-10 md:px-6 md:pt-6">
         <div className="h-full overflow-auto bg-white shadow-sm rounded-md p-3 border border-gray-300">
            <Ueberschrift1 text={++i + ".) Allgemeines"} />
            <Radio value={geschlecht} onChange={setGeschlecht} title={titelGeschlecht} auswahl={auswahlGeschlecht} />
            <Input value={vorname} onChange={setVorname} title={titelVorname} />
            <Radio value={begleitetVon} onChange={setBegleitetVon} title={titelBegleitetVon} auswahl={auswahlBegleitetVon} />
            {begleitetVon === "[ Sonstiges ]" && (
               <InputFreitext value={begleitetVonFreitext} onChange={setBegleitetVonFreitext} title={titelBegleitetVon + " (Freitext)"} />
            )}
            <Ueberschrift1 text={++i + ".) Blickkontakt, Spielentwicklung und Konzentration"} />
            <Radio value={blickkontakt} onChange={setBlickkontakt} title={titelBlickkontakt} auswahl={auswahlBlickkontakt} />
            <Radio value={spielverhalten} onChange={setSpielverhalten} title={titelSpielverhalten} auswahl={auswahlSpielverhalten} />
            <Radio value={spielformen} onChange={setSpielformen} title={titelSpielformen} auswahl={auswahlSpielformen} />
            <Radio value={konzentration} onChange={setKonzentration} title={titelKonzentration} auswahl={auswahlKonzentration} />
            <Ueberschrift1 text={++i + ".) Auditive Wahrnehmung"} />
            <Radio value={raa} onChange={setRAA} title={titelRAA} auswahl={auswahlRAA} />
            <Radio value={rag} onChange={setRAG} title={titelRAG} auswahl={auswahlRAG} />
            <Radio value={luivg} onChange={setLUIVG} title={titelLUIVG} auswahl={auswahlLUIVG} />
            <Radio value={ams} onChange={setAMS} title={titelAMS} auswahl={auswahlAMS} />
            <Ueberschrift1 text={++i + ".) Mundmotorik"} />
            <Radio value={oft} onChange={setOFT} title={titelOFT} auswahl={auswahlOFT} />
            <Radio value={mundschluss} onChange={setMundschluss} title={titelMundschluss} auswahl={auswahlMundschluss} />
            <Radio value={speichelfluss} onChange={setSpeichelfluss} title={titelSpeichelfluss} auswahl={auswahlSpeichelfluss} />
            <Radio value={pusten} onChange={setPusten} title={titelPusten} auswahl={auswahlPusten} />
            <Radio value={ansaugen} onChange={setAnsaugen} title={titelAnsaugen} auswahl={auswahlAnsaugen} />
         </div>

         <Ausgabebereich ausgabe={ausgabe} resetAll={resetAll} />
      </div>
   );
};

export default App;

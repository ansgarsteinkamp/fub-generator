import { useState } from "react";

import Input from "./components/Input.js";
import Radio from "./components/Radio.js";
import Ausgabebereich from "./components/Ausgabebereich.js";
// import { Ueberschrift1, Ueberschrift2 } from "./components/Ueberschriften.js";
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

   const [vorname, setVorname] = useState(localStorage.getItem(titelVorname) || "");
   const [geschlecht, setGeschlecht] = useState(localStorage.getItem(titelGeschlecht));
   const [begleitetVon, setBegleitetVon] = useState(localStorage.getItem(titelBegleitetVon));
   const [blickkontakt, setBlickkontakt] = useState(localStorage.getItem(titelBlickkontakt));
   const [spielverhalten, setSpielverhalten] = useState(localStorage.getItem(titelSpielverhalten));
   const [spielformen, setSpielformen] = useState(localStorage.getItem(titelSpielformen));
   const [konzentration, setKonzentration] = useState(localStorage.getItem(titelKonzentration));

   const resetAll = () => {
      setVorname("");
      setGeschlecht(null);
      setBegleitetVon(null);
      setBlickkontakt(null);
      setSpielverhalten(null);
      setSpielformen(null);
      setKonzentration(null);
      localStorage.clear();
   };

   let ausgabe = "";

   if (vorname) {
      ausgabe += vorname;
   }

   const auswahlGeschlecht = ["Junge", "Mädchen"];

   const auswahlBegleitetVon = [
      "Mutter",
      "Vater",
      "Eltern",
      "Pflegemutter",
      "Pflegevater",
      "Pflegeeltern",
      "Familienhelferin",
      "Familienhelfer",
      "[sonstiges]"
   ];

   if (begleitetVon) {
      ausgabe += " wurde von ";
      switch (begleitetVon) {
         case "Mutter":
         case "Pflegemutter":
         case "Familienhelferin":
            ausgabe += geschlecht === "Junge" ? "seiner " + begleitetVon : "ihrer " + begleitetVon;
            break;
         case "Vater":
         case "Pflegevater":
         case "Familienhelfer":
            ausgabe += geschlecht === "Junge" ? "seinem " + begleitetVon : "ihrem " + begleitetVon;
            break;
         case "Eltern":
         case "Pflegeeltern":
            ausgabe += geschlecht === "Junge" ? "seinen " + begleitetVon : "ihren " + begleitetVon;
            break;
         case "[sonstiges]":
            ausgabe += "XXXX";
            break;
         default:
            ausgabe += "";
      }

      ausgabe += " begleitet. ";
   }

   const auswahlBlickkontakt = ["dialogisch", "triangulär", "dialogisch und triangulär", "kein Blickkontakt"];

   if (blickkontakt) {
      ausgabe += geschlecht === "Junge" ? "Er " : "Sie ";

      switch (blickkontakt) {
         case "dialogisch":
            ausgabe += "zeigte einen dialogischen Blickkontakt. ";
            break;
         case "triangulär":
            ausgabe += "zeigte einen triangulären Blickkontakt. ";
            break;
         case "dialogisch und triangulär":
            ausgabe += "zeigte einen dialogischen und triangulären Blickkontakt. ";
            break;
         case "kein Blickkontakt":
            ausgabe += "nahm keinen Blickkontakt auf. ";
            break;
         default:
            ausgabe += "";
      }
   }

   const auswahlSpielverhalten = ["wechselhaft", "ausdauernd", "kein Spielverhalten"];

   if (spielverhalten) {
      switch (spielverhalten) {
         case "wechselhaft":
         case "ausdauernd":
            ausgabe += geschlecht === "Junge" ? "Sein " : "Ihr ";
            ausgabe += "Spielverhalten war " + spielverhalten + ". ";
            break;
         case "kein Spielverhalten":
            ausgabe += "Mit dem Spielmaterial konnte ";
            ausgabe += geschlecht === "Junge" ? "er " : "sie ";
            ausgabe += "sich noch nicht alleine beschäftigen. ";
            break;
         default:
            ausgabe += "";
      }
   }

   const auswahlSpielformen = ["Funktionsspiel", "Symbolspiel"];

   if (spielformen) {
      switch (spielformen) {
         case "Funktionsspiel":
            ausgabe += "Das Spiel war funktionsorientiert. ";
            break;
         case "Symbolspiel":
            ausgabe += "Es war ein Symbolspiel zu beobachten. ";
            break;
         default:
            ausgabe += "";
      }
   }

   const auswahlKonzentration = ["angemessen", "nicht angemessen"];

   if (konzentration) {
      ausgabe += `Die Konzentrationsfähigkeit und Aufmerksamkeitslenkung waren ${konzentration === "nicht angemessen" ? "nicht " : ""}angemessen. `;
   }

   return (
      <div className="h-95v grid md:grid-cols-2 md:gap-5 gap-2 md:px-10 md:pt-10 px-3 pt-3 pb-10">
         <div className="h-full overflow-auto bg-white shadow-sm rounded-md p-5 border border-gray-300">
            <Radio value={geschlecht} onChange={setGeschlecht} title={titelGeschlecht} auswahl={auswahlGeschlecht} />
            <Input value={vorname} onChange={setVorname} title={titelVorname} />
            <Radio value={begleitetVon} onChange={setBegleitetVon} title={titelBegleitetVon} auswahl={auswahlBegleitetVon} />
            <Radio value={blickkontakt} onChange={setBlickkontakt} title={titelBlickkontakt} auswahl={auswahlBlickkontakt} />
            <Radio value={spielverhalten} onChange={setSpielverhalten} title={titelSpielverhalten} auswahl={auswahlSpielverhalten} />
            <Radio value={spielformen} onChange={setSpielformen} title={titelSpielformen} auswahl={auswahlSpielformen} />
            <Radio value={konzentration} onChange={setKonzentration} title={titelKonzentration} auswahl={auswahlKonzentration} />
            {/* <Ueberschrift1 text="Überschrift 1" /> */}
            {/* <Ueberschrift2 text="Überschrift 2" /> */}
         </div>

         <Ausgabebereich ausgabe={ausgabe} resetAll={resetAll} />
      </div>
   );
};

export default App;

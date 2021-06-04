import { useState } from "react";

import Input from "./components/Input.js";
import Radio from "./components/Radio.js";

const App = () => {
   const [vorname, setVorname] = useState(null);
   const [geschlecht, setGeschlecht] = useState(null);
   const [begleitetVon, setBegleitetVon] = useState(null);
   const [blickkontakt, setBlickkontakt] = useState(null);
   const [spielverhalten, setSpielverhalten] = useState(null);

   let ausgabe = "";

   const ueberschriftVorname = "Vorname";

   if (vorname) {
      ausgabe += vorname + " wurde von ";
   }

   const ueberschriftGeschlecht = "Geschlecht";
   const radiosGeschlecht = ["Mädchen", "Junge"];

   const ueberschriftBegleitetVon = "Begleitet von";
   const radiosBegleitetVon = ["Mutter", "Vater", "Eltern", "Pflegemutter", "Pflegevater", "Pflegeeltern", "Familienhelferin", "Familienhelfer", "[sonstiges]"];

   if (begleitetVon) {
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
         default:
            ausgabe += "XXXX";
      }

      ausgabe += " begleitet. ";
   }

   const ueberschriftBlickkontakt = "Blickkontakt";
   const radiosBlickkontakt = ["dialogisch", "triangulär", "dialogisch und triangulär", "kein Blickkontakt"];

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
            ausgabe += "zeigte einen XXXX Blickkontakt. ";
      }
   }

   const ueberschriftSpielverhalten = "Spielverhalten";
   const radiosSpielverhalten = ["wechselhaft", "ausdauernd", "kein Spielverhalten"];

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
            ausgabe += "Spielverhalten: XXXX ";
      }
   }

   return (
      <div className="h-screen grid lg:grid-cols-3 lg:gap-10 gap-2 lg:px-20 lg:py-10 px-3 pt-3 pb-10 bg-gray-100">
         <div className="h-full overflow-auto bg-white shadow-sm rounded-md p-5 border border-gray-300 lg:col-span-2">
            <div className="flex lg:flex-row flex-col">
               <Radio onChange={setGeschlecht} title={ueberschriftGeschlecht} auswahl={radiosGeschlecht} />
               <Input onChange={setVorname} label={ueberschriftVorname} />
            </div>
            <div className="flex lg:flex-row flex-col">
               <Radio onChange={setBegleitetVon} title={ueberschriftBegleitetVon} auswahl={radiosBegleitetVon} />
               <div className="flex flex-col">
                  <Radio onChange={setBlickkontakt} title={ueberschriftBlickkontakt} auswahl={radiosBlickkontakt} />
                  <Radio onChange={setSpielverhalten} title={ueberschriftSpielverhalten} auswahl={radiosSpielverhalten} />
               </div>
            </div>
         </div>
         <textarea
            readOnly
            value={ausgabe}
            rows="5"
            className="h-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block border-gray-300 rounded-md px-8 py-6"
         ></textarea>
      </div>
   );
};

export default App;

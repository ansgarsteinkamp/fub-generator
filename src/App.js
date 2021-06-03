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

   if (vorname) {
      ausgabe += vorname + " wurde von ";
   }

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
      <div className="h-screen grid grid-cols-2 gap-10 px-20 py-10 bg-gray-100">
         <div className="h-full overflow-auto bg-white shadow-sm rounded-md p-5 border-gray-300">
            <div className="flex">
               <Radio onChange={setGeschlecht} title="Geschlecht" auswahl={["Junge", "Mädchen"]} />
               <Input onChange={setVorname} label="Vorname" />
            </div>
            <div className="flex">
               <Radio
                  onChange={setBegleitetVon}
                  title="Begleitet von"
                  auswahl={["Mutter", "Vater", "Eltern", "Pflegemutter", "Pflegevater", "Pflegeeltern", "Familienhelferin", "Familienhelfer", "(sonstiges)"]}
               />
               <div className="flex flex-col">
                  <Radio
                     onChange={setBlickkontakt}
                     title="Blickkontakt"
                     auswahl={["dialogisch", "triangulär", "dialogisch und triangulär", "kein Blickkontakt"]}
                  />
                  <Radio onChange={setSpielverhalten} title="Spielverhalten" auswahl={["wechselhaft", "ausdauernd", "kein Spielverhalten"]} />
               </div>
            </div>
         </div>
         <textarea
            readOnly
            value={ausgabe}
            className="h-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block border-gray-300 rounded-md px-8 py-6"
         ></textarea>
      </div>
   );
};

export default App;

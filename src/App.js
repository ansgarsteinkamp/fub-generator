import { useState } from "react";

import { CopyToClipboard } from "react-copy-to-clipboard";

import Input from "./components/Input.js";
import Radio from "./components/Radio.js";

const titelVorname = "Vorname";
const titelGeschlecht = "Geschlecht";
const titelBegleitetVon = "Begleitet von";
const titelBlickkontakt = "Blickkontakt";
const titelSpielverhalten = "Spielverhalten";

const App = () => {
   const [vorname, setVorname] = useState(localStorage.getItem(titelVorname));
   const [geschlecht, setGeschlecht] = useState(localStorage.getItem(titelGeschlecht));
   const [begleitetVon, setBegleitetVon] = useState(localStorage.getItem(titelBegleitetVon));
   const [blickkontakt, setBlickkontakt] = useState(localStorage.getItem(titelBlickkontakt));
   const [spielverhalten, setSpielverhalten] = useState(localStorage.getItem(titelSpielverhalten));

   let ausgabe = "";

   if (vorname) {
      ausgabe += vorname + " wurde von ";
   }

   const radiosGeschlecht = ["Mädchen", "Junge"];

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
               <Radio onChange={setGeschlecht} title={titelGeschlecht} auswahl={radiosGeschlecht} />
               <Input onChange={setVorname} title={titelVorname} />
            </div>
            <div className="flex lg:flex-row flex-col">
               <Radio onChange={setBegleitetVon} title={titelBegleitetVon} auswahl={radiosBegleitetVon} />
               <div className="flex flex-col">
                  <Radio onChange={setBlickkontakt} title={titelBlickkontakt} auswahl={radiosBlickkontakt} />
                  <Radio onChange={setSpielverhalten} title={titelSpielverhalten} auswahl={radiosSpielverhalten} />
               </div>
            </div>
         </div>
         <div className="relative">
            <textarea
               readOnly
               value={ausgabe}
               rows="5"
               className="h-full w-full px-8 py-10 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block border-gray-300 rounded-md"
            ></textarea>
            <div className="absolute top-0 m-3">
               <CopyToClipboard text={ausgabe}>
                  <button className="rounded-full hover:bg-green-200 p-1">
                     <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-400 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={2}
                           d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                     </svg>
                  </button>
               </CopyToClipboard>
               <button
                  className="rounded-full hover:bg-red-200 p-1"
                  onClick={() => {
                     setVorname(null);
                     setGeschlecht(null);
                     setBegleitetVon(null);
                     setBlickkontakt(null);
                     setSpielverhalten(null);
                     localStorage.clear();
                  }}
               >
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-400 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                     />
                  </svg>
               </button>
            </div>
         </div>
      </div>
   );
};

export default App;

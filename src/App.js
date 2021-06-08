import { useState } from "react";

import Input from "./components/Input.js";
import InputFreitext from "./components/InputFreitext.js";
import Radio from "./components/Radio.js";
import Ausgabebereich from "./components/Ausgabebereich.js";
import Hauptblock from "./components/Hauptblock.js";

let i = 0;

const titelVorname = ++i + ".) Vorname";
const titelGeschlecht = ++i + ".) Geschlecht";
const titelBegleitetVon = ++i + ".) Begleitet von";
const titelBlickkontakt = ++i + ".) Blickkontakt";
const titelSpielverhalten = ++i + ".) Spielverhalten";
const titelSpielformen = ++i + ".) Spielformen";
const titelKonzentration = ++i + ".) Konzentrationsfähigkeit und Aufmerksamkeitslenkung";
const titelRAA = ++i + ".) Reaktion auf Ansprache";
const titelRAG = ++i + ".) Reaktion auf Geräusche";
const titelLUIVG = ++i + ".) Lokalisation und Identifikation von Geräuschen";
const titelAMS = ++i + ".) Auditive Merkspanne";
const titelOFT = ++i + ".) Orofazialer Tonus";
const titelMundschluss = ++i + ".) Mundschluss";
const titelSpeichelfluss = ++i + ".) Speichelfluss";
const titelPusten = ++i + ".) Pusten";
const titelAnsaugen = ++i + ".) Ansaugen";
const titelZungenruhelage = ++i + ".) Zungenruhelage";
const titelZBUK = ++i + ".) Zungenbeweglichkeit und -koordination";
const titelLBUK = ++i + ".) Lippenbeweglichkeit und -koordination";
const titelEUTV = ++i + ".) Ess- und Trinkverhalten";
const titelKDK = ++i + ".) Konsistenzen der Kost";
const titelOraleHabits = ++i + ".) Orale Habits";
const titelSchnuller = ++i + ".) Schnuller";
const titelTMS = ++i + ".) Trinkflasche mit Sauger";
const titelDaumenlutschen = ++i + ".) Daumenlutschen";
const titelFNK = ++i + ".) Fingernägelkauen";
const titelSUV = ++i + ".) Stillen und Flaschennahrung";
const titelZUG = ++i + ".) Zahn- und Gebissstatus";

const App = () => {
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
   const [zungenruhelage, setZungenruhelage] = useState(localStorage.getItem(titelZungenruhelage));
   const [zubk, setZBUK] = useState(localStorage.getItem(titelZBUK));
   const [lbuk, setLBUK] = useState(localStorage.getItem(titelLBUK));
   const [eutv, setEUTV] = useState(localStorage.getItem(titelEUTV));
   const [kdk, setKDK] = useState(localStorage.getItem(titelKDK));
   const [oraleHabits, setOraleHabits] = useState(localStorage.getItem(titelOraleHabits));
   const [schnuller, setSchnuller] = useState(localStorage.getItem(titelSchnuller));
   const [tms, setTMS] = useState(localStorage.getItem(titelTMS));
   const [daumenlutschen, setDaumenlutschen] = useState(localStorage.getItem(titelDaumenlutschen));
   const [fnk, setFNK] = useState(localStorage.getItem(titelFNK));
   const [suv, setSUV] = useState(localStorage.getItem(titelSUV));
   const [zug, setZUG] = useState(localStorage.getItem(titelZUG));

   const [begleitetVonFreitext, setBegleitetVonFreitext] = useState(localStorage.getItem(titelBegleitetVon + " (Freitext)") || "");
   const [kdkFreitext, setKdkFreitext] = useState(localStorage.getItem(titelKDK + " (Freitext)") || "");
   const [schnullerFreitext, setSchnullerFreitext] = useState(localStorage.getItem(titelSchnuller + " (Freitext)") || "");
   const [SUVFreitext, setSUVFreitext] = useState(localStorage.getItem(titelSUV + " (Freitext)") || "");
   const [ZUGFreitext, setZUGFreitext] = useState(localStorage.getItem(titelZUG + " (Freitext)") || "");

   const [showHauptblock, setShowHauptblock] = useState(true);

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
      setZungenruhelage(null);
      setZBUK(null);
      setLBUK(null);
      setEUTV(null);
      setKDK(null);
      setOraleHabits(null);
      setSchnuller(null);
      setTMS(null);
      setDaumenlutschen(null);
      setFNK(null);
      setSUV(null);
      setZUG(null);

      setBegleitetVonFreitext("");
      setKdkFreitext("");
      setSchnullerFreitext("");
      setSUVFreitext("");
      setZUGFreitext("");

      setShowHauptblock(true);

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

   // #######  Hauptblock "Allgemeines"  #######

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
      "begleitet von..."
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
         case "begleitet von...":
            ausgabe += `${vorname} wurde von ${begleitetVonFreitext} begleitet.`;
            break;
         default:
            ausgabe += ``;
      }
   }

   // #######  Hauptblock "Kontaktverhalten"  #######

   // Blickkontakt
   const auswahlBlickkontakt = ["dialogisch", "dialogisch und triangulär", "kein Blickkontakt"];

   if (blickkontakt) {
      ausgabe += `\n\n`; // Erster Teil des Hauptblocks => Zeilenumbruch
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
   }

   // #######  Hauptblock "Spiel und Konzentration"  #######

   // Spielverhalten
   const auswahlSpielverhalten = ["wechselhaft", "ausdauernd", "kein Spielverhalten"];

   if (spielverhalten) {
      ausgabe += `\n\n`; // Erster Teil des Hauptblocks => Zeilenumbruch
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
   }

   // Spielformen
   const auswahlSpielformen = ["Funktionsspiel", "Symbolspiel"];

   if (spielformen) {
      ausgabe += ` `; // Leerzeichen zum vorherigen Satz
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

   // Konzentrationsfähigkeit und Aufmerksamkeitslenkung
   const auswahlKonzentration = ["angemessen", "nicht angemessen"];

   if (konzentration) {
      ausgabe += ` `; // Leerzeichen zum vorherigen Satz
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
   }

   // #######  Hauptblock Auditive Wahrnehmung"  #######

   // Reaktion auf Ansprache
   const auswahlRAA = ["reagiert", "reagiert nicht"];

   if (raa) {
      ausgabe += `\n\n`; // Erster Teil des Hauptblocks => Zeilenumbruch
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
   }

   // Reaktion auf Geräusche
   const auswahlRAG = ["reagiert", "reagiert nicht"];

   if (rag) {
      ausgabe += ` `; // Leerzeichen zum vorherigen Satz
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
   }

   // Lokalisation und Identifikation von Geräuschen
   const auswahlLUIVG = ["sicher", "nicht ausreichend zu beurteilen", "nur Identifikation sicher", "nur Lokalisation sicher"];

   if (luivg) {
      ausgabe += ` `; // Leerzeichen zum vorherigen Satz
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
   }

   // Auditive Merkspanne
   const auswahlAMS = ["altersentsprechend", "nicht altersentsprechend"];

   if (ams) {
      ausgabe += ` `; // Leerzeichen zum vorherigen Satz
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
   }

   // #######  Hauptblock "Mundmotorik"  #######

   // Orofazialer Tonus
   const auswahlOFT = ["reguliert", "nicht ausreichend reguliert"];

   if (oft) {
      ausgabe += `\n\n`; // Erster Teil des Hauptblocks => Zeilenumbruch
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
   }

   // Mundschluss
   const auswahlMundschluss = ["konstant", "offen"];

   if (mundschluss) {
      ausgabe += ` `; // Leerzeichen zum vorherigen Satz
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
   }

   // Speichelfluss
   const auswahlSpeichelfluss = ["vermehrter Speichelfluss", "[ keine Angabe ]"];

   if (speichelfluss) {
      switch (speichelfluss) {
         case "vermehrter Speichelfluss":
            ausgabe += ` `; // Leerzeichen zum vorherigen Satz
            ausgabe += `Es trat ein vermehrter Speichelfluss auf.`;
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
            ausgabe += ` `; // Leerzeichen zum vorherigen Satz
            ausgabe += `${vorname} pustete Seifenblasen mit dosiertem Luftstrom.`;
            break;
         case "nicht möglich":
            ausgabe += ` `; // Leerzeichen zum vorherigen Satz
            ausgabe += `${vorname} konnte noch keine Seifenblasen mit dosiertem Luftstrom pusten.`;
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
            ausgabe += ` `; // Leerzeichen zum vorherigen Satz
            ausgabe += `Das Ansaugen mit einem Strohhalm gelang ${ihm_ihr}.`;
            break;
         case "nicht möglich":
            ausgabe += ` `; // Leerzeichen zum vorherigen Satz
            ausgabe += `Das Ansaugen mit einem Strohhalm gelang ${ihm_ihr} noch nicht.`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
         default:
            ausgabe += ``;
      }
   }

   // Zungenruhelage
   const auswahlZungenruhelage = ["möglich", "nicht möglich", "[ keine Angabe ]"];

   if (zungenruhelage) {
      switch (zungenruhelage) {
         case "möglich":
            ausgabe += ` `; // Leerzeichen zum vorherigen Satz
            ausgabe += `${Er_Sie} konnte die Zungenruhelage einnehmen und kurz halten.`;
            break;
         case "nicht möglich":
            ausgabe += ` `; // Leerzeichen zum vorherigen Satz
            ausgabe += `${Er_Sie} konnte die Zungenruhelage noch nicht einnehmen und halten.`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
         default:
            ausgabe += ``;
      }
   }

   // Zungenbeweglichkeit und -koordination
   const auswahlZBUK = ["unauffällig", "eingeschränkt", "[ keine Angabe ]"];

   if (zubk) {
      switch (zubk) {
         case "unauffällig":
            ausgabe += ` `; // Leerzeichen zum vorherigen Satz
            ausgabe += `Die Zungenbeweglichkeit und -koordination war unauffällig.`;
            break;
         case "eingeschränkt":
            ausgabe += ` `; // Leerzeichen zum vorherigen Satz
            ausgabe += `Die Zungenbeweglichkeit und -koordination war eingeschränkt.`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
         default:
            ausgabe += ``;
      }
   }

   // Lippenbeweglichkeit und -koordination
   const auswahlLBUK = ["unauffällig", "eingeschränkt", "[ keine Angabe ]"];

   if (lbuk) {
      switch (lbuk) {
         case "unauffällig":
            ausgabe += ` `; // Leerzeichen zum vorherigen Satz
            ausgabe += `Eine ausreichende Lippenbeweglichkeit und -koordination war gegeben.`;
            break;
         case "eingeschränkt":
            ausgabe += ` `; // Leerzeichen zum vorherigen Satz
            ausgabe += `Die Lippenbeweglichkeit und -koordination war eingeschränkt.`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
         default:
            ausgabe += ``;
      }
   }

   // #######  Hauptblock "Essen und Trinken"  #######

   // Ess- und Trinkverhalten
   const auswahlEUTV = ["unauffällig", "auffällig"];

   if (eutv) {
      ausgabe += `\n\n`; // Erster Teil des Hauptblocks => Zeilenumbruch
      switch (eutv) {
         case "unauffällig":
            ausgabe += `${Sein_Ihr} Ess- und Trinkverhalten war unauffällig.`;
            break;
         case "auffällig":
            ausgabe += `${Sein_Ihr} Ess- und Trinkverhalten war auffällig.`;
            break;
         default:
            ausgabe += ``;
      }
   }

   // Konsistenzen der Kost
   const auswahlKDK = ["alle Konsistenzen", "v.a. weiche/breiige Kost", "v.a. harte Kost", "Freitext eingeben..."];

   if (kdk) {
      ausgabe += ` `; // Leerzeichen zum vorherigen Satz
      switch (kdk) {
         case "alle Konsistenzen":
            ausgabe += `${vorname} esse alle Konsistenzen (harte und weiche Kost).`;
            break;
         case "v.a. weiche/breiige Kost":
            ausgabe += `${vorname} bevorzuge weiche Kost.`;
            break;
         case "v.a. harte Kost":
            ausgabe += `${vorname} bevorzuge harte Kost.`;
            break;
         case "Freitext eingeben...":
            ausgabe += `${kdkFreitext}`;
            break;
         default:
            ausgabe += ``;
      }
   }

   // #######  Hauptblock "Orale Habits"  #######

   // Orale Habits
   const auswahlOraleHabits = ["nicht vorhanden", "vorhanden"];

   if (oraleHabits) {
      ausgabe += `\n\n`; // Erster Teil des Hauptblocks => Zeilenumbruch
      switch (oraleHabits) {
         case "nicht vorhanden":
            ausgabe += `Orale Habits seien nicht vorhanden.`;
            break;
         case "vorhanden":
            ausgabe += `Orale Habits seien vorhanden.`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
         default:
            ausgabe += ``;
      }
   }

   // Schnuller
   const auswahlSchnuller = ["noch nie", "bis heute", "bis zum..."];

   if (schnuller) {
      ausgabe += ` `; // Leerzeichen zum vorherigen Satz
      switch (schnuller) {
         case "noch nie":
            ausgabe += `${Er_Sie} habe noch nie einen Schnuller erhalten.`;
            break;
         case "bis heute":
            ausgabe += `${Er_Sie} erhalte noch einen Schnuller.`;
            break;
         case "bis zum...":
            ausgabe += `Bis zum ${schnullerFreitext} habe ${er_sie} einen Schnuller erhalten.`;
            break;
         default:
            ausgabe += ``;
      }
   }

   // Trinkflasche mit Sauger
   const auswahlTMS = ["trinkt noch aus einer", "[ keine Angabe ]"];

   if (tms) {
      switch (tms) {
         case "trinkt noch aus einer":
            ausgabe += ` `; // Leerzeichen zum vorherigen Satz
            ausgabe += `${Er_Sie} trinke noch aus einer Trinkflasche mit Sauger.`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
         default:
            ausgabe += ``;
      }
   }

   // Daumenlutschen
   const auswahlDaumenlutschen = ["wird beobachtet", "[ keine Angabe ]"];

   if (daumenlutschen) {
      switch (daumenlutschen) {
         case "wird beobachtet":
            ausgabe += ` `; // Leerzeichen zum vorherigen Satz
            ausgabe += `Es werde Daumenlutschen beobachtet.`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
         default:
            ausgabe += ``;
      }
   }

   // Fingernägelkauen
   const auswahlFNK = ["wird beobachtet", "[ keine Angabe ]"];

   if (fnk) {
      switch (fnk) {
         case "wird beobachtet":
            ausgabe += ` `; // Leerzeichen zum vorherigen Satz
            ausgabe += `Es werde Fingernägelkauen beobachtet.`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
         default:
            ausgabe += ``;
      }
   }

   // Stillen und Flaschennahrung
   const auswahlSUV = ["Stillen bis zum (s.u.)", "Flaschennahrung bis zum (s.u.)", "Stillen bis zum (s.u.), dann Flaschennahrung"];

   if (suv) {
      ausgabe += ` `; // Leerzeichen zum vorherigen Satz
      switch (suv) {
         case "Stillen bis zum (s.u.)":
            ausgabe += `${vorname} sei bis zum ${SUVFreitext} gestillt worden.`;
            break;
         case "Flaschennahrung bis zum (s.u.)":
            ausgabe += `${vorname} habe bis zum ${SUVFreitext} Flaschennahrung erhalten.`;
            break;
         case "Stillen bis zum (s.u.), dann Flaschennahrung":
            ausgabe += `${vorname} sei erst bis zum ${SUVFreitext} gestillt worden und habe danach Flaschennahrung erhalten.`;
            break;
         default:
            ausgabe += ``;
      }
   }

   // Zahn- und Gebissstatus
   const auswahlZUG = ["unauffällig", "auffällig (+ Freitext)"];

   if (zug) {
      ausgabe += ` `; // Leerzeichen zum vorherigen Satz
      switch (zug) {
         case "unauffällig":
            ausgabe += `${Sein_Ihr} Zahn- und Gebissstatus war unauffällig.`;
            break;
         case "auffällig (+ Freitext)":
            ausgabe += `${Sein_Ihr} Zahn- und Gebissstatus war auffällig. ${ZUGFreitext}`;
            break;
         default:
            ausgabe += ``;
      }
   }

   ausgabe += `\n\n-----------------------------\n
${titelVorname}: ${vorname || "---"}
${titelGeschlecht}: ${geschlecht || "---"}
${titelBegleitetVon}: ${begleitetVon !== "begleitet von..." ? begleitetVon || "---" : begleitetVonFreitext}
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
${titelAnsaugen}: ${ansaugen || "---"}
${titelZungenruhelage}: ${zungenruhelage || "---"}
${titelZBUK}: ${zubk || "---"}
${titelLBUK}: ${lbuk || "---"}
${titelEUTV}: ${eutv || "---"}
${titelKDK}: ${kdk !== "Freitext eingeben..." ? kdk || "---" : kdkFreitext}
${titelOraleHabits}: ${oraleHabits || "---"}
${titelSchnuller}: ${schnuller !== "bis zum..." ? schnuller || "---" : "bis zum " + schnullerFreitext}
${titelTMS}: ${tms || "---"}
${titelDaumenlutschen}: ${daumenlutschen || "---"}
${titelFNK}: ${fnk || "---"}
${titelSUV}: ${suv ? suv.replace("(s.u.)", SUVFreitext) : "---"}
${titelZUG}: ${zug !== "auffällig (+ Freitext)" ? zug || "---" : zug.replace("+ Freitext", ZUGFreitext)}`;

   const toggleHauptblockHandler = () => setShowHauptblock(v => !v);

   return (
      <div className="h-95v grid md:grid-cols-2 gap-2 md:gap-4 px-3 pt-3 pb-10 md:px-6 md:pt-6">
         <div className="h-full overflow-auto bg-white shadow-sm rounded-md p-3 border border-gray-300">
            <Hauptblock text="Allgemeines" show={showHauptblock} onToggle={toggleHauptblockHandler}>
               <Input value={vorname} onChange={setVorname} title={titelVorname} />
               <Radio value={geschlecht} onChange={setGeschlecht} title={titelGeschlecht} auswahl={auswahlGeschlecht} />
               <Radio value={begleitetVon} onChange={setBegleitetVon} title={titelBegleitetVon} auswahl={auswahlBegleitetVon} />
               {begleitetVon === "begleitet von..." && (
                  <InputFreitext
                     value={begleitetVonFreitext}
                     onChange={setBegleitetVonFreitext}
                     title={titelBegleitetVon + " (Freitext)"}
                     placeholder="Beispiel: seiner Oma"
                  />
               )}
            </Hauptblock>
            <Hauptblock text="Kontaktverhalten">
               <Radio value={blickkontakt} onChange={setBlickkontakt} title={titelBlickkontakt} auswahl={auswahlBlickkontakt} />
            </Hauptblock>
            <Hauptblock text="Spiel und Konzentration">
               <Radio value={spielverhalten} onChange={setSpielverhalten} title={titelSpielverhalten} auswahl={auswahlSpielverhalten} />
               <Radio value={spielformen} onChange={setSpielformen} title={titelSpielformen} auswahl={auswahlSpielformen} />
               <Radio value={konzentration} onChange={setKonzentration} title={titelKonzentration} auswahl={auswahlKonzentration} />
            </Hauptblock>
            <Hauptblock text="Auditive Wahrnehmung">
               <Radio value={raa} onChange={setRAA} title={titelRAA} auswahl={auswahlRAA} />
               <Radio value={rag} onChange={setRAG} title={titelRAG} auswahl={auswahlRAG} />
               <Radio value={luivg} onChange={setLUIVG} title={titelLUIVG} auswahl={auswahlLUIVG} />
               <Radio value={ams} onChange={setAMS} title={titelAMS} auswahl={auswahlAMS} />
            </Hauptblock>
            <Hauptblock text="Mundmotorik">
               <Radio value={oft} onChange={setOFT} title={titelOFT} auswahl={auswahlOFT} />
               <Radio value={mundschluss} onChange={setMundschluss} title={titelMundschluss} auswahl={auswahlMundschluss} />
               <Radio value={speichelfluss} onChange={setSpeichelfluss} title={titelSpeichelfluss} auswahl={auswahlSpeichelfluss} />
               <Radio value={pusten} onChange={setPusten} title={titelPusten} auswahl={auswahlPusten} />
               <Radio value={ansaugen} onChange={setAnsaugen} title={titelAnsaugen} auswahl={auswahlAnsaugen} />
               <Radio value={zungenruhelage} onChange={setZungenruhelage} title={titelZungenruhelage} auswahl={auswahlZungenruhelage} />
               <Radio value={zubk} onChange={setZBUK} title={titelZBUK} auswahl={auswahlZBUK} />
               <Radio value={lbuk} onChange={setLBUK} title={titelLBUK} auswahl={auswahlLBUK} />
            </Hauptblock>
            <Hauptblock text="Essen und Trinken">
               <Radio value={eutv} onChange={setEUTV} title={titelEUTV} auswahl={auswahlEUTV} />
               <Radio value={kdk} onChange={setKDK} title={titelKDK} auswahl={auswahlKDK} />
               {kdk === "Freitext eingeben..." && (
                  <InputFreitext
                     value={kdkFreitext}
                     onChange={setKdkFreitext}
                     title={titelKDK + " (Freitext)"}
                     placeholder="Beispiel: Karl isst nur Erdnüsse."
                     width="w-10/12"
                  />
               )}
            </Hauptblock>
            <Hauptblock text="Orale Habits">
               <Radio value={oraleHabits} onChange={setOraleHabits} title={titelOraleHabits} auswahl={auswahlOraleHabits} />
               <Radio value={schnuller} onChange={setSchnuller} title={titelSchnuller} auswahl={auswahlSchnuller} />
               {schnuller === "bis zum..." && (
                  <InputFreitext
                     value={schnullerFreitext}
                     onChange={setSchnullerFreitext}
                     title={titelSchnuller + " (Freitext)"}
                     placeholder="Beispiel: zehnten Monat"
                  />
               )}
               <Radio value={tms} onChange={setTMS} title={titelTMS} auswahl={auswahlTMS} />
               <Radio value={daumenlutschen} onChange={setDaumenlutschen} title={titelDaumenlutschen} auswahl={auswahlDaumenlutschen} />
               <Radio value={fnk} onChange={setFNK} title={titelFNK} auswahl={auswahlFNK} />
               <Radio value={suv} onChange={setSUV} title={titelSUV} auswahl={auswahlSUV} />
               <InputFreitext value={SUVFreitext} onChange={setSUVFreitext} title={titelSUV + " (Freitext)"} placeholder="Beispiel: zehnten Monat" />
               <Radio value={zug} onChange={setZUG} title={titelZUG} auswahl={auswahlZUG} />
               {zug === "auffällig (+ Freitext)" && (
                  <InputFreitext
                     value={ZUGFreitext}
                     onChange={setZUGFreitext}
                     title={titelZUG + " (Freitext)"}
                     placeholder="Beispiel: Sein Mund war voller Goldzähne."
                     width="w-10/12"
                  />
               )}
            </Hauptblock>
         </div>

         <Ausgabebereich ausgabe={ausgabe} resetAll={resetAll} />
      </div>
   );
};

export default App;

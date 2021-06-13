// ################################
// ################################
// ###
// ###   Import von Komponenten
// ###

import { useState } from "react";
import Input from "./components/Input.js";
import InputFreitext from "./components/InputFreitext.js";
import Radio from "./components/Radio.js";
import Ausgabebereich from "./components/Ausgabebereich.js";
import Hauptblock from "./components/Hauptblock.js";

// ######################################################
// ######################################################
// ###
// ###   Titel der Unterblöcke
// ###   = Überschriften auf der linken Seite der GUI
// ###

let i = 0; // Zähler der Unterblöcke

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
const titelEoM = ++i + ".) Ein- oder mehrsprachige Erziehung";
const titelAV_L1 = ++i + ".) L1 Aussprache: Verständlichkeit";
const titelAAA_L1 = ++i + ".) L1 Aussprache: Art der Abweichung";
const titelAAN_L1 = ++i + ".) L1 Aussprache: Altersnorm";
const titelPIIS_L1 = ++i + ".) L1 Testergebnisse PLAKSS-II-Screening (Fox-Boyer)";
const titelRWKA_L1 = ++i + ".) L1 Rezeptiver Wortschatz: Komplexität der Anweisungen";
const titelRWF_L1 = ++i + ".) L1 Rezeptiver Wortschatz: Frageformen";
const titelRWA_L1 = ++i + ".) L1 Rezeptiver Wortschatz: Altersnorm";
const titelEWAU_L1 = ++i + ".) L1 Expressiver Wortschatz: Art und Umfang";
const titelEWDA_L1 = ++i + ".) L1 Expressiver Wortschatz: Differenziertheit / Altersnorm";
const titelSS_L1 = ++i + ".) L1 Syntax (Satzbau)";
const titelMG_L1 = ++i + ".) L1 Morphologie (Wortbildung): Genus";
const titelMN_L1 = ++i + ".) L1 Morphologie (Wortbildung): Numerus";
const titelMK_L1 = ++i + ".) L1 Morphologie (Wortbildung): Kasus (Akkusativ, Dativ)";
const titelMP_L1 = ++i + ".) L1 Morphologie (Wortbildung): Personalformen (Subjekt-Verb-Kongruenz, Verbflexion)";

const App = () => {
   // ######################################################
   // ######################################################
   // ###
   // ###   1. Variablen zum Speichern der Nutzerauswahl
   // ###   2. Funktionen zum Ändern dieser Variablen
   // ###

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
   const [eom, setEoM] = useState(localStorage.getItem(titelEoM));
   const [av_L1, setAV_L1] = useState(localStorage.getItem(titelAV_L1));
   const [aaa_L1, setAAA_L1] = useState(localStorage.getItem(titelAAA_L1));
   const [aan_L1, setAAN_L1] = useState(localStorage.getItem(titelAAN_L1));
   const [pIIs_L1, setPIIS_L1] = useState(localStorage.getItem(titelPIIS_L1));
   const [rwka_L1, setRWKA_L1] = useState(localStorage.getItem(titelRWKA_L1));
   const [rwf_L1, setRWF_L1] = useState(localStorage.getItem(titelRWF_L1));
   const [rwa_L1, setRWA_L1] = useState(localStorage.getItem(titelRWA_L1));
   const [ewau_L1, setEWAU_L1] = useState(localStorage.getItem(titelEWAU_L1));
   const [ewda_L1, setEWDA_L1] = useState(localStorage.getItem(titelEWDA_L1));
   const [ss_L1, setSS_L1] = useState(localStorage.getItem(titelSS_L1));
   const [mg_L1, setMG_L1] = useState(localStorage.getItem(titelMG_L1));
   const [mn_L1, setMN_L1] = useState(localStorage.getItem(titelMN_L1));
   const [mk_L1, setMK_L1] = useState(localStorage.getItem(titelMK_L1));
   const [mp_L1, setMP_L1] = useState(localStorage.getItem(titelMP_L1));

   // ###################################################
   // ###################################################
   // ###
   // ###   1. Variablen zum Speichern der Freitexte
   // ###   2. Funktionen zum Ändern dieser Freitexte
   // ###

   const [begleitetVonFreitext, setBegleitetVonFreitext] = useState(localStorage.getItem(titelBegleitetVon + " (Freitext)") || "");
   const [kdkFreitext, setKdkFreitext] = useState(localStorage.getItem(titelKDK + " (Freitext)") || "");
   const [schnullerFreitext, setSchnullerFreitext] = useState(localStorage.getItem(titelSchnuller + " (Freitext)") || "");
   const [SUVFreitext, setSUVFreitext] = useState(localStorage.getItem(titelSUV + " (Freitext)") || "");
   const [ZUGFreitext, setZUGFreitext] = useState(localStorage.getItem(titelZUG + " (Freitext)") || "");
   const [EoMFreitext, setEoMFreitext] = useState(localStorage.getItem(titelEoM + " (Freitext)") || "");
   const [AAA_L1_Freitext, setAAA_L1_Freitext] = useState(localStorage.getItem(titelAAA_L1 + " (Freitext)") || "");
   const [PIIS_L1_Freitext, setPIIS_L1_Freitext] = useState(localStorage.getItem(titelPIIS_L1 + " (Freitext)") || "");

   // ####################################################################################################
   // ####################################################################################################
   // ###
   // ###   1. Variablen zum Speichern des "Aufklapp-Status" eines Hauptblocks (auf- oder zugeklappt?)
   // ###   2. Funktionen zum Ändern dieses Status
   // ###   3. Funktionen zum "Toggeln" des Status (wird aufgerufen beim Klick auf die Überschrift)
   // ###
   const [showL2, setShowL2] = useState(true);
   const toggleL2Handler = () => setShowL2(v => !v);

   // ###############################################################
   // ###############################################################
   // ###
   // ###   Klick auf den Mülleimer: Zurücksetzen aller Variablen
   // ###
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
      setEoM(null);
      setAV_L1(null);
      setAAA_L1(null);
      setAAN_L1(null);
      setPIIS_L1(null);
      setRWKA_L1(null);
      setRWF_L1(null);
      setRWA_L1(null);
      setEWAU_L1(null);
      setEWDA_L1(null);
      setSS_L1(null);
      setMG_L1(null);
      setMN_L1(null);
      setMK_L1(null);
      setMP_L1(null);

      setBegleitetVonFreitext("");
      setKdkFreitext("");
      setSchnullerFreitext("");
      setSUVFreitext("");
      setZUGFreitext("");
      setEoMFreitext("");
      setAAA_L1_Freitext("");
      setPIIS_L1_Freitext("");

      setShowL2(true);

      localStorage.clear();
   };

   // ################################################
   // ################################################
   // ###
   // ###   Variablen, die vom Geschlecht abhängen
   // ###

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

   // ########################################################################################################################
   // ########################################################################################################################
   // ########################################################################################################################
   // ######
   // ######   Start Ausgabe füllen
   // ######

   // Ganz am Anfang ist die Ausgabe leer.
   let ausgabe = ``;

   // Überschrift hinzufügen
   ausgabe += `Allgemeines / Kontaktverhalten\n`;

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

   // Blickkontakt
   const auswahlBlickkontakt = ["dialogisch", "dialogisch und triangulär", "kein Blickkontakt"];

   if (blickkontakt) {
      ausgabe += ` `; // Leerzeichen hinzufügen
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

   // Spielverhalten
   const auswahlSpielverhalten = ["wechselhaft", "ausdauernd", "kein Spielverhalten"];

   if (spielverhalten) {
      ausgabe += ` `; // Leerzeichen hinzufügen
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
      ausgabe += ` `; // Leerzeichen hinzufügen
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
      ausgabe += ` `; // Leerzeichen hinzufügen
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

   // Überschrift hinzufügen
   ausgabe += `\nAuditive Wahrnehmung\n`;

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
   }

   // Reaktion auf Geräusche
   const auswahlRAG = ["reagiert", "reagiert nicht"];

   if (rag) {
      ausgabe += ` `; // Leerzeichen hinzufügen
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
      ausgabe += ` `; // Leerzeichen hinzufügen
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
      ausgabe += ` `; // Leerzeichen hinzufügen
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

   // Überschrift hinzufügen
   ausgabe += `\nMundmotorik\n`;

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
   }

   // Mundschluss
   const auswahlMundschluss = ["konstant", "offen"];

   if (mundschluss) {
      ausgabe += ` `; // Leerzeichen hinzufügen
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
            ausgabe += ` `; // Leerzeichen hinzufügen
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
            ausgabe += ` `; // Leerzeichen hinzufügen
            ausgabe += `${vorname} pustete Seifenblasen mit dosiertem Luftstrom.`;
            break;
         case "nicht möglich":
            ausgabe += ` `; // Leerzeichen hinzufügen
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
            ausgabe += ` `; // Leerzeichen hinzufügen
            ausgabe += `Das Ansaugen mit einem Strohhalm gelang ${ihm_ihr}.`;
            break;
         case "nicht möglich":
            ausgabe += ` `; // Leerzeichen hinzufügen
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
            ausgabe += ` `; // Leerzeichen hinzufügen
            ausgabe += `${Er_Sie} konnte die Zungenruhelage einnehmen und kurz halten.`;
            break;
         case "nicht möglich":
            ausgabe += ` `; // Leerzeichen hinzufügen
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
            ausgabe += ` `; // Leerzeichen hinzufügen
            ausgabe += `Die Zungenbeweglichkeit und -koordination war unauffällig.`;
            break;
         case "eingeschränkt":
            ausgabe += ` `; // Leerzeichen hinzufügen
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
            ausgabe += ` `; // Leerzeichen hinzufügen
            ausgabe += `Eine ausreichende Lippenbeweglichkeit und -koordination war gegeben.`;
            break;
         case "eingeschränkt":
            ausgabe += ` `; // Leerzeichen hinzufügen
            ausgabe += `Die Lippenbeweglichkeit und -koordination war eingeschränkt.`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
         default:
            ausgabe += ``;
      }
   }

   // Ess- und Trinkverhalten
   const auswahlEUTV = ["unauffällig", "auffällig"];

   if (eutv) {
      ausgabe += ` `; // Leerzeichen hinzufügen
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
      ausgabe += ` `; // Leerzeichen hinzufügen
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

   // Orale Habits
   const auswahlOraleHabits = ["nicht vorhanden", "vorhanden"];

   if (oraleHabits) {
      switch (oraleHabits) {
         case "nicht vorhanden":
            ausgabe += ` `; // Leerzeichen hinzufügen
            ausgabe += `Orale Habits seien nicht vorhanden.`;
            break;
         case "vorhanden":
            ausgabe += ` `; // Leerzeichen hinzufügen
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
      ausgabe += ` `; // Leerzeichen hinzufügen
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
            ausgabe += ` `; // Leerzeichen hinzufügen
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
            ausgabe += ` `; // Leerzeichen hinzufügen
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
            ausgabe += ` `; // Leerzeichen hinzufügen
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
      ausgabe += ` `; // Leerzeichen hinzufügen
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
      ausgabe += ` `; // Leerzeichen hinzufügen
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

   // Überschrift hinzufügen
   ausgabe += `\nSprachen\n`;

   // Ein- oder mehrsprachige Erziehung
   const auswahlEoM = ["einsprachig (Sprache s.u.)", "mehrsprachig (Sprachen s.u.)"];

   if (eom) {
      switch (eom) {
         case "einsprachig (Sprache s.u.)":
            ausgabe += `${Er_Sie} wurde einsprachig (${EoMFreitext}) erzogen.`;
            break;
         case "mehrsprachig (Sprachen s.u.)":
            ausgabe += `${Er_Sie} wurde mehrsprachig (${EoMFreitext}) erzogen.`;
            break;
         default:
            ausgabe += ``;
      }
   }

   // Überschrift hinzufügen
   ausgabe += `\nSprachkompetenzen in der Erstsprache (L1)\n`;

   // Überschrift hinzufügen
   ausgabe += `Aussprache\n`;

   // Aussprache: Verständlichkeit
   const auswahlAV_L1 = ["deutlich", "undeutlich"];

   if (av_L1) {
      switch (av_L1) {
         case "deutlich":
            ausgabe += `Die Aussprache von ${vorname} ist deutlich.`;
            break;
         case "undeutlich":
            ausgabe += `Die Aussprache von ${vorname} ist undeutlich.`;
            break;
         default:
            ausgabe += ``;
      }
   }

   // Aussprache: Art der Abweichung
   const auswahlAAA_L1 = ["Lautersetzungen / -auslassungen (phonologisch)", "Lautveränderungen (phonetisch)"];

   if (aaa_L1) {
      ausgabe += ` `; // Leerzeichen hinzufügen
      switch (aaa_L1) {
         case "Lautersetzungen / -auslassungen (phonologisch)":
            ausgabe += `Es werden Lautersetzungen und -auslassungen (Prozesse: ${AAA_L1_Freitext}) beobachtet.`;
            break;
         case "Lautveränderungen (phonetisch)":
            ausgabe += `Es werden Lautveränderungen (betroffene Laute: ${AAA_L1_Freitext}) beobachtet.`;
            break;
         default:
            ausgabe += ``;
      }
   }

   // Aussprache: Altersnorm
   const auswahlAAN_L1 = ["altersentsprechend", "nicht altersentsprechend"];

   if (aan_L1) {
      ausgabe += ` `; // Leerzeichen hinzufügen
      switch (aan_L1) {
         case "altersentsprechend":
            ausgabe += `${Seine_Ihre} Aussprachefähigkeiten waren altersentsprechend.`;
            break;
         case "nicht altersentsprechend":
            ausgabe += `${Seine_Ihre} Aussprachefähigkeiten waren noch nicht altersentsprechend.`;
            break;
         default:
            ausgabe += ``;
      }
   }

   // Testergebnisse PLAKSS-II-Screening (Fox-Boyer)
   const auswahlPIIS_L1 = ["Phonetisch / Phonologische Abweichungen (Prozesse s.u.)", "[ keine Angabe ]"];

   if (pIIs_L1) {
      switch (pIIs_L1) {
         case "Phonetisch / Phonologische Abweichungen (Prozesse s.u.)":
            ausgabe += `\nTestergebnisse PLAKSS-II-Screening (Fox-Boyer)\n`; // Überschrift hinzufügen
            ausgabe += `Es wurden folgende phonetisch / phonologische Abweichungen beobachtet: ${PIIS_L1_Freitext}.`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
         default:
            ausgabe += ``;
      }
   }

   // Überschrift hinzufügen
   ausgabe += `\nRezeptiver und expressiver Wortschatz\n`;

   // Rezeptiver Wortschatz: Komplexität der Anweisungen
   const auswahlRWKA_L1 = ["komplexere Anweisungen", "kurze Anweisungen", "Schlüsselwörter", "kein Sprachverständnis"];
   if (rwka_L1) {
      switch (rwka_L1) {
         case "komplexere Anweisungen":
            ausgabe += `${Er_Sie} zeigte ein sicheres Verständnis für komplexere Anweisungen.`;
            break;
         case "kurze Anweisungen":
            ausgabe += `${Er_Sie} reagierte auf kurze Anweisungen. Ein Verständnis für komplexere Anweisungen war noch nicht zu beobachten.`;
            break;
         case "Schlüsselwörter":
            ausgabe += `${Er_Sie} zeigte ein Verständnis für Schlüsselwörter (d.h. bekannter Wörter in einem Satz). Das Satzverständnis war noch eingeschränkt.`;
            break;
         case "kein Sprachverständnis":
            ausgabe += `Es erfolgte noch keine entsprechende Reaktion auf einzelne Wörter, kurze Anweisungen und / oder Fragestellungen.`;
            break;
         default:
            ausgabe += ``;
      }
   }

   // L1 Rezeptiver Wortschatz: Frageformen
   const auswahlRWF_L1 = ["W-Fragen", "Alternativfragen", "Ja- / Nein-Fragen", "[ keine Angabe ]"];
   if (rwf_L1) {
      switch (rwf_L1) {
         case "W-Fragen":
            ausgabe += ` `; // Leerzeichen hinzufügen
            ausgabe += `W-Fragen wurden von ${vorname} verstanden.`;
            break;
         case "Alternativfragen":
            ausgabe += ` `; // Leerzeichen hinzufügen
            ausgabe += `Alternativfragen wurden von ${vorname} verstanden. Ein Verständnis von W-Fragen war allerdings noch nicht zu beobachten.`;
            break;
         case "Ja- / Nein-Fragen":
            ausgabe += ` `; // Leerzeichen hinzufügen
            ausgabe += `${vorname} antwortete auf Ja- / Nein-Fragen. Eine Reaktion auf weitere Frageformen zeigte ${er_sie} noch nicht.`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
         default:
            ausgabe += ``;
      }
   }

   // L1 Rezeptiver Wortschatz: Altersnorm
   const auswahlRWA_L1 = ["altersentsprechend", "nicht altersentsprechend"];
   if (rwa_L1) {
      ausgabe += ` `; // Leerzeichen hinzufügen
      switch (rwa_L1) {
         case "altersentsprechend":
            ausgabe += `Das Sprachverständnis war altersentsprechend.`;
            break;
         case "nicht altersentsprechend":
            ausgabe += `Das Sprachverständnis war noch nicht altersentsprechend.`;
            break;
         default:
            ausgabe += ``;
      }
   }

   // L1 Expressiver Wortschatz: Art und Umfang
   const auswahlEWAU_L1 = [
      "Mehrwortäußerungen",
      "Zweiwortäußerungen",
      "einzelne Wörter",
      "keine 50 Wörter / keine Zweiwortkombinationen",
      "Lautmalereien und einzelne Wörter",
      "Laute / Lautmalereien",
      "eigene Sprache"
   ];

   if (ewau_L1) {
      ausgabe += ` `; // Leerzeichen hinzufügen
      switch (ewau_L1) {
         case "Mehrwortäußerungen":
            ausgabe += `${Er_Sie} verwendete Mehrwortäußerungen.`;
            break;
         case "Zweiwortäußerungen":
            ausgabe += `${Er_Sie} verwendete Zweiwortäußerungen.`;
            break;
         case "einzelne Wörter":
            ausgabe += `${vorname} äußerte einzelne Wörter.`;
            break;
         case "keine 50 Wörter / keine Zweiwortkombinationen":
            ausgabe += `${Er_Sie} äußerte einzelne Wörter, aber noch keine Zweiwortkombinationen.`;
            break;
         case "Lautmalereien und einzelne Wörter":
            ausgabe += `${Er_Sie} äußerte Lautmalereien und einzelne Wörter.`;
            break;
         case "Laute / Lautmalereien":
            ausgabe += `${Er_Sie} äußerte Laute / Lautmalereien.`;
            break;
         case "eigene Sprache":
            ausgabe += `${vorname} verwendete ${seine_ihre} "eigene Sprache", die für Außenstehende nicht zu verstehen war.`;
            break;
         default:
            ausgabe += ``;
      }
   }

   // L1 Expressiver Wortschatz: Differenziertheit / Altersnorm
   const auswahlEWDA_L1 = ["altersentsprechend / ausreichend differenziert", "nicht altersentsprechend / gering / wenig differenziert"];

   if (ewda_L1) {
      ausgabe += ` `; // Leerzeichen hinzufügen
      switch (ewda_L1) {
         case "altersentsprechend / ausreichend differenziert":
            ausgabe += `Der expressive Wortschatz von ${vorname} war altersentsprechend und ausreichend differenziert.`;
            break;
         case "nicht altersentsprechend / gering / wenig differenziert":
            ausgabe += `Der expressive Wortschatz von ${vorname} war nicht altersentsprechend. Er war noch gering und wenig differenziert.`;
            break;
         default:
            ausgabe += ``;
      }
   }

   // Überschrift hinzufügen
   ausgabe += `\nSatzbau und Wortbildung\n`;

   // L1 Syntax (Satzbau)
   const auswahlSS_L1 = [
      "Satzbau korrekt (Verbzweitstellung und Verbendstellung)",
      "Satzbau korrekt (Verbzweitstellung)",
      "Satzbau korrekt / unflexible Satzstrukturen",
      "Satzbau nicht korrekt (Verbendstellung)",
      "[ keine Angabe ]"
   ];

   if (ss_L1) {
      switch (ss_L1) {
         case "Satzbau korrekt (Verbzweitstellung und Verbendstellung)":
            ausgabe += `Der Satzbau war korrekt. Die Verbzweitstellung im Hauptsatz, sowie die Verbendstellung im Nebensatz wurden von ${ihm_ihr} beachtet.`;
            break;
         case "Satzbau korrekt (Verbzweitstellung)":
            ausgabe += `Der Satzbau war korrekt. Die Verbzweitstellung im Hauptsatz wurde von ${ihm_ihr} beachtet.`;
            break;
         case "Satzbau korrekt / unflexible Satzstrukturen":
            ausgabe += `${vorname} beachtete zwar die Verbzweitstellung im Hauptsatz, allerdings waren die Satzstrukturen insgesamt noch wenig flexibel.`;
            break;
         case "Satzbau nicht korrekt (Verbendstellung)":
            ausgabe += `Der Satzbau war nicht korrekt. ${vorname} verwendete noch die Verbendstellung im Hauptsatz.`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
         default:
            ausgabe += ``;
      }
   }

   // L1 Morphologie (Wortbildung): Genus
   const auswahlMG_L1 = ["sicher", "unsicher", "keine Artikelverwendung", "[ keine Angabe ]"];

   if (mg_L1) {
      switch (mg_L1) {
         case "sicher":
            ausgabe += ` `; // Leerzeichen hinzufügen
            ausgabe += `Die Artikelverwendung war sicher.`;
            break;
         case "unsicher":
            ausgabe += ` `; // Leerzeichen hinzufügen
            ausgabe += `Die Artikelverwendung war noch unsicher.`;
            break;
         case "keine Artikelverwendung":
            ausgabe += ` `; // Leerzeichen hinzufügen
            ausgabe += `${vorname} verwendete noch gar keine Artikel.`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
         default:
            ausgabe += ``;
      }
   }

   // L1 Morphologie (Wortbildung): Numerus
   const auswahlMN_L1 = ["erworben", "unsicher", "nicht erworben", "[ keine Angabe ]"];

   if (mn_L1) {
      switch (mn_L1) {
         case "erworben":
            ausgabe += ` `; // Leerzeichen hinzufügen
            ausgabe += `${vorname} konnte Pluralformen regelgeleitet bilden.`;
            break;
         case "unsicher":
            ausgabe += ` `; // Leerzeichen hinzufügen
            ausgabe += `${vorname} zeigte eine noch unsichere Bildung des Plurals.`;
            break;
         case "nicht erworben":
            ausgabe += ` `; // Leerzeichen hinzufügen
            ausgabe += `${vorname} bildete noch gar keine Pluralformen.`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
         default:
            ausgabe += ``;
      }
   }

   // L1 Morphologie (Wortbildung): Kasus (Akkusativ, Dativ)
   const auswahlMK_L1 = [
      "vollständig erworben",
      "Akkusativ erworben / Dativ unsicher (nicht markiert)",
      "Akkusativ unsicher",
      "Dativ unsicher",
      "nicht erworben",
      "[ keine Angabe ]"
   ];

   if (mk_L1) {
      switch (mk_L1) {
         case "vollständig erworben":
            ausgabe += ` `; // Leerzeichen hinzufügen
            ausgabe += `${Er_Sie} war in der Lage, die Kasus Akkusativ und Dativ korrekt zu markieren.`;
            break;
         case "Akkusativ erworben / Dativ unsicher (nicht markiert)":
            ausgabe += ` `; // Leerzeichen hinzufügen
            ausgabe += `${Er_Sie} hatte den Akkusativ bereits sicher erworben. Der Dativ wurde noch nicht (sicher) markiert.`;
            break;
         case "Akkusativ unsicher":
            ausgabe += ` `; // Leerzeichen hinzufügen
            ausgabe += `${Er_Sie} zeigte noch Unsicherheiten in der Verwendung des Akkusativ.`;
            break;
         case "Dativ unsicher":
            ausgabe += ` `; // Leerzeichen hinzufügen
            ausgabe += `${Er_Sie} zeigte noch Unsicherheiten in der Verwendung des Dativ.`;
            break;
         case "nicht erworben":
            ausgabe += ` `; // Leerzeichen hinzufügen
            ausgabe += `${Er_Sie} hatte das Kasussystem (Akkusativ und / oder Dativ) noch gar nicht erworben.`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
         default:
            ausgabe += ``;
      }
   }

   // L1 Morphologie (Wortbildung): Personalformen (Subjekt-Verb-Kongruenz, Verbflexion)
   const auswahlMP_L1 = ["erworben (-st)", "nur Infinitivform", "unsicher", "[ keine Angabe ]"];

   if (mp_L1) {
      switch (mp_L1) {
         case "erworben (-st)":
            ausgabe += ` `; // Leerzeichen hinzufügen
            ausgabe += `Die Subjekt-Verb-Kongruenz wurde durchgängig von ${ihm_ihr} beachtet.`;
            break;
         case "nur Infinitivform":
            ausgabe += ` `; // Leerzeichen hinzufügen
            ausgabe += `${vorname} verwendete noch aussschließlich die Infinitivform des Verbs.`;
            break;
         case "unsicher":
            ausgabe += ` `; // Leerzeichen hinzufügen
            ausgabe += `Im Ansatz war zu beobachten, dass ${vorname} die Subjekt-Verb-Kongruenz beachtete. ${Seine_Ihre} diesbezüglichen morphologischen Fähigkeiten waren allerdings noch sehr unsicher.`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
         default:
            ausgabe += ``;
      }
   }

   // Überschrift hinzufügen
   // ausgabe += `\nSprachkompetenzen in der Zweitsprache (L2)\n`;

   // ######
   // ######   Ende Ausgabe füllen
   // ######
   // ########################################################################################################################
   // ########################################################################################################################
   // ########################################################################################################################

   // ###############################################
   // ###############################################
   // ###
   // ###   Stichpunteliste unterhalb der Ausgabe
   // ###

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
${titelZUG}: ${zug !== "auffällig (+ Freitext)" ? zug || "---" : zug.replace("+ Freitext", ZUGFreitext)}
${titelEoM}: ${eom ? eom.replace("Sprachen s.u.", EoMFreitext).replace("Sprache s.u.", EoMFreitext) : "---"}
${titelAV_L1}: ${av_L1 || "---"}
${titelAAA_L1}: ${aaa_L1 ? aaa_L1 + ": " + AAA_L1_Freitext : "---"}
${titelAAN_L1}: ${aan_L1 || "---"}
${titelPIIS_L1}: ${
      pIIs_L1 === "Phonetisch / Phonologische Abweichungen (Prozesse s.u.)" ? pIIs_L1.replace("Prozesse s.u.", PIIS_L1_Freitext) : pIIs_L1 || "---"
   }
${titelRWKA_L1}: ${rwka_L1 || "---"}
${titelRWF_L1}: ${rwf_L1 || "---"}
${titelRWA_L1}: ${rwa_L1 || "---"}
${titelEWAU_L1}: ${ewau_L1 || "---"}
${titelEWDA_L1}: ${ewda_L1 || "---"}
${titelSS_L1}: ${ss_L1 || "---"}
${titelMG_L1}: ${mg_L1 || "---"}
${titelMN_L1}: ${mn_L1 || "---"}
${titelMK_L1}: ${mk_L1 || "---"}
${titelMP_L1}: ${mp_L1 || "---"}`;

   // #################################################
   // #################################################
   // ###
   // ###   Endergebnis auf dem Bildschirm anzeigen
   // ###

   return (
      <div className="h-screen grid md:grid-cols-2 gap-3 md:gap-5 p-4 md:p-6 max-w-screen-2xl mx-auto">
         <div className="h-full overflow-auto bg-white shadow-lg rounded-md p-3 border border-gray-300">
            <Hauptblock text="Allgemeines">
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
            <Hauptblock text="Sprachen">
               <Radio value={eom} onChange={setEoM} title={titelEoM} auswahl={auswahlEoM} />
               <InputFreitext
                  value={EoMFreitext}
                  onChange={setEoMFreitext}
                  title={titelEoM + " (Freitext)"}
                  placeholder="Beispiel: deutsch, englisch"
                  width="w-8/12"
               />
            </Hauptblock>
            <Hauptblock text="Sprachkompetenzen in der Erstsprache (L1)">
               <Radio value={av_L1} onChange={setAV_L1} title={titelAV_L1} auswahl={auswahlAV_L1} />
               <Radio value={aaa_L1} onChange={setAAA_L1} title={titelAAA_L1} auswahl={auswahlAAA_L1} />
               <InputFreitext
                  value={AAA_L1_Freitext}
                  onChange={setAAA_L1_Freitext}
                  title={titelAAA_L1 + " (Freitext)"}
                  placeholder={aaa_L1 === "Lautersetzungen / -auslassungen (phonologisch)" ? "Prozesse" : "betroffene Laute"}
                  width="w-8/12"
               />
               <Radio value={aan_L1} onChange={setAAN_L1} title={titelAAN_L1} auswahl={auswahlAAN_L1} />
               <Radio value={pIIs_L1} onChange={setPIIS_L1} title={titelPIIS_L1} auswahl={auswahlPIIS_L1} />
               {pIIs_L1 === "Phonetisch / Phonologische Abweichungen (Prozesse s.u.)" && (
                  <InputFreitext
                     value={PIIS_L1_Freitext}
                     onChange={setPIIS_L1_Freitext}
                     title={titelPIIS_L1 + " (Freitext)"}
                     placeholder="Beispiel: Vorverlagerung /sch/ (phonologische Störung)"
                     width="w-8/12"
                  />
               )}
               <Radio value={rwka_L1} onChange={setRWKA_L1} title={titelRWKA_L1} auswahl={auswahlRWKA_L1} />
               <Radio value={rwf_L1} onChange={setRWF_L1} title={titelRWF_L1} auswahl={auswahlRWF_L1} />
               <Radio value={rwa_L1} onChange={setRWA_L1} title={titelRWA_L1} auswahl={auswahlRWA_L1} />
               <Radio value={ewau_L1} onChange={setEWAU_L1} title={titelEWAU_L1} auswahl={auswahlEWAU_L1} />
               <Radio value={ewda_L1} onChange={setEWDA_L1} title={titelEWDA_L1} auswahl={auswahlEWDA_L1} />
               <Radio value={ss_L1} onChange={setSS_L1} title={titelSS_L1} auswahl={auswahlSS_L1} />
               <Radio value={mg_L1} onChange={setMG_L1} title={titelMG_L1} auswahl={auswahlMG_L1} />
               <Radio value={mn_L1} onChange={setMN_L1} title={titelMN_L1} auswahl={auswahlMN_L1} />
               <Radio value={mk_L1} onChange={setMK_L1} title={titelMK_L1} auswahl={auswahlMK_L1} />
               <Radio value={mp_L1} onChange={setMP_L1} title={titelMP_L1} auswahl={auswahlMP_L1} />
            </Hauptblock>
            <Hauptblock text="Sprachkompetenzen in der Zweitsprache (L2)" show={showL2} onToggle={toggleL2Handler}></Hauptblock>
         </div>

         <Ausgabebereich ausgabe={ausgabe} resetAll={resetAll} />
      </div>
   );
};

export default App;

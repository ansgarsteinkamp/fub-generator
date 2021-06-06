import { useState } from "react";

import Input from "./components/Input.js";
import InputFreitext from "./components/InputFreitext.js";
import Radio from "./components/Radio.js";
import Ausgabebereich from "./components/Ausgabebereich.js";
import { Ueberschrift1 } from "./components/Ueberschriften.js";

const App = () => {
   const titelVorname = "Vorname";
   const titelGeschlecht = "Geschlecht";
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
   const titelZungenruhelage = "Zungenruhelage";
   const titelZBUK = "Zungenbeweglichkeit und -koordination";
   const titelLBUK = "Lippenbeweglichkeit und -koordination";
   const titelEUTV = "Ess- und Trinkverhalten";
   const titelKDK = "Konsistenzen der Kost";
   const titelOraleHabits = "Orale Habits";
   const titelSchnuller = "Schnuller";
   const titelTMS = "Trinkflasche mit Sauger";
   const titelDaumenlutschen = "Daumenlutschen";
   const titelFNK = "Fingernägelkauen";

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

   const [begleitetVonFreitext, setBegleitetVonFreitext] = useState(localStorage.getItem(titelBegleitetVon + " (Freitext)") || "");
   const [kdkFreitext, setKdkFreitext] = useState(localStorage.getItem(titelKDK + " (Freitext)") || "");
   const [schnullerFreitext, setSchnullerFreitext] = useState(localStorage.getItem(titelSchnuller + " (Freitext)") || "");

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

      setBegleitetVonFreitext("");
      setKdkFreitext("");
      setSchnullerFreitext("");

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
      ausgabe += "\n\n";
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
      ausgabe += "\n\n";
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
   }

   // Reaktion auf Ansprache
   const auswahlRAA = ["reagiert", "reagiert nicht"];

   if (raa) {
      ausgabe += `\n\n`;
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
   }

   // Orofazialer Tonus
   const auswahlOFT = ["reguliert", "nicht ausreichend reguliert"];

   if (oft) {
      ausgabe += `\n\n`;
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

   // Zungenruhelage
   const auswahlZungenruhelage = ["möglich", "nicht möglich", "[ keine Angabe ]"];

   if (zungenruhelage) {
      switch (zungenruhelage) {
         case "möglich":
            ausgabe += `${Er_Sie} konnte die Zungenruhelage einnehmen und kurz halten.`;
            ausgabe += ` `;
            break;
         case "nicht möglich":
            ausgabe += `${Er_Sie} konnte die Zungenruhelage noch nicht einnehmen und halten.`;
            ausgabe += ` `;
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
            ausgabe += `Die Zungenbeweglichkeit und -koordination war unauffällig.`;
            ausgabe += ` `;
            break;
         case "eingeschränkt":
            ausgabe += `Die Zungenbeweglichkeit und -koordination war eingeschränkt.`;
            ausgabe += ` `;
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
            ausgabe += `Eine ausreichende Lippenbeweglichkeit und -koordination war gegeben.`;
            break;
         case "eingeschränkt":
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
      ausgabe += "\n\n";
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
      ausgabe += ` `;
   }

   // Konsistenzen der Kost
   const auswahlKDK = ["alle Konsistenzen", "v.a. weiche/breiige Kost", "v.a. harte Kost", "[ Sonstiges ]"];

   if (kdk) {
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
         case "[ Sonstiges ]":
            ausgabe += `${kdkFreitext}`;
            break;
         default:
            ausgabe += ``;
      }
   }

   // Orale Habits
   const auswahlOraleHabits = ["nicht vorhanden", "vorhanden"];

   if (oraleHabits) {
      ausgabe += "\n\n";
      switch (oraleHabits) {
         case "nicht vorhanden":
            ausgabe += `Orale Habits seien nicht vorhanden.`;
            ausgabe += ` `;
            break;
         case "vorhanden":
            ausgabe += `Orale Habits seien vorhanden.`;
            ausgabe += ` `;
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
      ausgabe += ` `;
   }

   // Trinkflasche mit Sauger
   const auswahlTMS = ["trinkt noch aus einer", "[ keine Angabe ]"];

   if (tms) {
      switch (tms) {
         case "trinkt noch aus einer":
            ausgabe += `${Er_Sie} trinke noch aus einer Trinkflasche mit Sauger.`;
            ausgabe += ` `;
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
            ausgabe += `Es werde Daumenlutschen beobachtet.`;
            ausgabe += ` `;
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
            ausgabe += `Es werde Fingernägelkauen beobachtet.`;
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
${titelKDK}: ${kdk !== "[ Sonstiges ]" ? kdk || "---" : kdkFreitext}
${titelOraleHabits}: ${oraleHabits || "---"}
${titelSchnuller}: ${schnuller !== "bis zum..." ? schnuller || "---" : "bis zum " + schnullerFreitext}
${titelTMS}: ${tms || "---"}
${titelDaumenlutschen}: ${daumenlutschen || "---"}
${titelFNK}: ${fnk || "---"}`;

   let i = 0;

   return (
      <div className="h-95v grid md:grid-cols-2 gap-2 md:gap-4 px-3 pt-3 pb-10 md:px-6 md:pt-6">
         <div className="h-full overflow-auto bg-white shadow-sm rounded-md p-3 border border-gray-300">
            <Ueberschrift1 text={++i + ".) Allgemeines"} />
            <Input value={vorname} onChange={setVorname} title={titelVorname} />
            <Radio value={geschlecht} onChange={setGeschlecht} title={titelGeschlecht} auswahl={auswahlGeschlecht} />
            <Radio value={begleitetVon} onChange={setBegleitetVon} title={titelBegleitetVon} auswahl={auswahlBegleitetVon} />
            {begleitetVon === "begleitet von..." && (
               <InputFreitext value={begleitetVonFreitext} onChange={setBegleitetVonFreitext} title={titelBegleitetVon + " (Freitext)"} />
            )}
            <Ueberschrift1 text={++i + ".) Kontaktverhalten"} />
            <Radio value={blickkontakt} onChange={setBlickkontakt} title={titelBlickkontakt} auswahl={auswahlBlickkontakt} />
            <Ueberschrift1 text={++i + ".) Spiel und Konzentration"} />
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
            <Radio value={zungenruhelage} onChange={setZungenruhelage} title={titelZungenruhelage} auswahl={auswahlZungenruhelage} />
            <Radio value={zubk} onChange={setZBUK} title={titelZBUK} auswahl={auswahlZBUK} />
            <Radio value={lbuk} onChange={setLBUK} title={titelLBUK} auswahl={auswahlLBUK} />
            <Ueberschrift1 text={++i + ".) Essen und Trinken"} />
            <Radio value={eutv} onChange={setEUTV} title={titelEUTV} auswahl={auswahlEUTV} />
            <Radio value={kdk} onChange={setKDK} title={titelKDK} auswahl={auswahlKDK} />
            {kdk === "[ Sonstiges ]" && <InputFreitext value={kdkFreitext} onChange={setKdkFreitext} title={titelKDK + " (Freitext)"} />}
            <Ueberschrift1 text={++i + ".) Orale Habits"} />
            <Radio value={oraleHabits} onChange={setOraleHabits} title={titelOraleHabits} auswahl={auswahlOraleHabits} />
            <Radio value={schnuller} onChange={setSchnuller} title={titelSchnuller} auswahl={auswahlSchnuller} />
            {schnuller === "bis zum..." && <InputFreitext value={schnullerFreitext} onChange={setSchnullerFreitext} title={titelSchnuller + " (Freitext)"} />}
            <Radio value={tms} onChange={setTMS} title={titelTMS} auswahl={auswahlTMS} />
            <Radio value={daumenlutschen} onChange={setDaumenlutschen} title={titelDaumenlutschen} auswahl={auswahlDaumenlutschen} />
            <Radio value={fnk} onChange={setFNK} title={titelFNK} auswahl={auswahlFNK} />
         </div>

         <Ausgabebereich ausgabe={ausgabe} resetAll={resetAll} />
      </div>
   );
};

export default App;

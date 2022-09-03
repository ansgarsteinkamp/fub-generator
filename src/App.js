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

// ########################################################
// ########################################################
// ###
// ###   Titel der Unterblöcke
// ###
// ###   d.h. Überschriften auf der linken Seite der GUI
// ###

let i = 0; // Zähler der Unterblöcke

const titelVorname = ++i + ".) Vorname";
const titelGeschlecht = ++i + ".) Geschlecht";
const titelBegleitetVon = ++i + ".) Begleitet von";
const titelPersoenlichkeit = ++i + ".) Persönlichkeit";
const titelBlickkontakt = ++i + ".) Blickkontakt";
const titelArtDerDiagnostik = ++i + ".) Art der Diagnostik";
const titelSpielverhalten = ++i + ".) Spielverhalten";
const titelSpielformen = ++i + ".) Spielformen";
const titelKonzentration = ++i + ".) Konzentrationsfähigkeit und Aufmerksamkeitslenkung";
const titelRAA = ++i + ".) Reaktion auf Ansprache";
const titelRAG = ++i + ".) Reaktion auf Geräusche";
const titelLUIVG = ++i + ".) Lokalisation und Identifikation von Geräuschen";
const titelAMS = ++i + ".) Auditive Merkspanne";
const titelSUV = ++i + ".) Stillen und Flaschennahrung";
const titelSchnuller = ++i + ".) Schnuller";
const titelEUTV = ++i + ".) Ess- und Trinkverhalten";
const titelTMS = ++i + ".) Trinkflasche mit Sauger";
const titelKDK = ++i + ".) Konsistenzen der Kost";
// const titelOraleHabits = ++i + ".) Orale Habits";
const titelDaumenlutschen = ++i + ".) Daumenlutschen";
const titelFNK = ++i + ".) Fingernägelkauen";
const titelZUG = ++i + ".) Zahn- und Gebissstatus";
const titelOFT = ++i + ".) Orofazialer Tonus";
const titelMundschluss = ++i + ".) Mundschluss";
const titelOraleErkundung = ++i + ".) Orale Erkundung";
const titelSpeichelfluss = ++i + ".) Speichelfluss";
const titelPusten = ++i + ".) Pusten";
const titelAnsaugen = ++i + ".) Ansaugen";
const titelZungenruhelage = ++i + ".) Zungenruhelage";
const titelZBUK = ++i + ".) Zungenbeweglichkeit und -koordination";
const titelLBUK = ++i + ".) Lippenbeweglichkeit und -koordination";
const titelEoM = ++i + ".) Ein- oder mehrsprachige Erziehung";
const titelSasde_L1 = ++i + ".) Erstsprache aus Sicht der Eltern";
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
const titelPDSS_L1 = ++i + ".) L1 Testergebnisse PDSS (Kauschke & Siegmüller)";
const titelPPE_L1 = ++i + ".) L1 Phonetisch-phonologische Ebene";
const titelSLE_L1 = ++i + ".) L1 Semantisch-lexikalische Ebene";
const titelSME_L1 = ++i + ".) L1 Syntaktisch-morphologische Ebene";
const titelRS_L1 = ++i + ".) L1 Redefluss (Stottern)";
const titelRP_L1 = ++i + ".) L1 Redefluss (Poltern)";
const titelAV_L2 = ++i + ".) L2 Aussprache: Verständlichkeit";
const titelAAA_L2 = ++i + ".) L2 Aussprache: Art der Abweichung";
const titelAAN_L2 = ++i + ".) L2 Aussprache: Altersnorm";
const titelPIIS_L2 = ++i + ".) L2 Testergebnisse PLAKSS-II-Screening (Fox-Boyer)";
const titelRWKA_L2 = ++i + ".) L2 Rezeptiver Wortschatz: Komplexität der Anweisungen";
const titelRWF_L2 = ++i + ".) L2 Rezeptiver Wortschatz: Frageformen";
const titelRWA_L2 = ++i + ".) L2 Rezeptiver Wortschatz: Altersnorm";
const titelEWAU_L2 = ++i + ".) L2 Expressiver Wortschatz: Art und Umfang";
const titelEWDA_L2 = ++i + ".) L2 Expressiver Wortschatz: Differenziertheit / Altersnorm";
const titelSS_L2 = ++i + ".) L2 Syntax (Satzbau)";
const titelMG_L2 = ++i + ".) L2 Morphologie (Wortbildung): Genus";
const titelMN_L2 = ++i + ".) L2 Morphologie (Wortbildung): Numerus";
const titelMK_L2 = ++i + ".) L2 Morphologie (Wortbildung): Kasus (Akkusativ, Dativ)";
const titelMP_L2 = ++i + ".) L2 Morphologie (Wortbildung): Personalformen (Subjekt-Verb-Kongruenz, Verbflexion)";
const titelPDSS_L2 = ++i + ".) L2 Testergebnisse PDSS (Kauschke & Siegmüller)";
const titelPPE_L2 = ++i + ".) L2 Phonetisch-phonologische Ebene";
const titelSLE_L2 = ++i + ".) L2 Semantisch-lexikalische Ebene";
const titelSME_L2 = ++i + ".) L2 Syntaktisch-morphologische Ebene";
const titelRS_L2 = ++i + ".) L2 Redefluss (Stottern)";
const titelRP_L2 = ++i + ".) L2 Redefluss (Poltern)";
const titelStimmgebung = ++i + ".) Stimmgebung";
const titelMedienkonsum = ++i + ".) Medienkonsum: Dauer";
const titelMFF = ++i + ".) Fernsehen / Filme";
const titelMST = ++i + ".) Smartphone / Tablet";
const titelMAG = ++i + ".) Audiogerät";
const titelMSK = ++i + ".) Spielekonsole";
const titelMBB = ++i + ".) Bilderbücher";
const titelMLC = ++i + ".) Lerncomputer";
const titelWInf = ++i + ".) Weitere Informationen, Erwartungen / Fragen";
const titelIfL = ++i + ".) Indikation für Logopädie";
const titelWiedervorstellung = ++i + ".) Wiedervorstellung";
const titelKRF = ++i + ".) Kontrolluntersuchung im Rahmen der Frühförderung";
const titelLB = ++i + ".) Logopädische Begleitung";
const titelZielKomF = ++i + ".) Kommunikative Fähigkeiten";
const titelZielBvS = ++i + ".) Bedeutung von Sprache";
const titelZielSpF = ++i + ".) Sprechfreude";
const titelZielREW = ++i + ".) Rezeptiver / Expressiver Wortschatz";
const titelZielGF = ++i + ".) Grammatikalische Fähigkeiten";
const titelZielAussprache = ++i + ".) Aussprache";
const titelZielAW = ++i + ".) Auditive Wahrnehmung";
const titelZielOT = ++i + ".) Orofazialer Tonus";
const titelZielOW = ++i + ".) Orofaziale Wahrnehmung";
const titelZielOF = ++i + ".) Orofaziale Fähigkeiten";

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
   const [persoenlichkeit, setPersoenlichkeit] = useState(localStorage.getItem(titelPersoenlichkeit));
   const [blickkontakt, setBlickkontakt] = useState(localStorage.getItem(titelBlickkontakt));
   const [artDerDiagnostik, setArtDerDiagnostik] = useState(localStorage.getItem(titelArtDerDiagnostik));
   const [spielverhalten, setSpielverhalten] = useState(localStorage.getItem(titelSpielverhalten));
   const [spielformen, setSpielformen] = useState(localStorage.getItem(titelSpielformen));
   const [konzentration, setKonzentration] = useState(localStorage.getItem(titelKonzentration));
   const [raa, setRAA] = useState(localStorage.getItem(titelRAA));
   const [rag, setRAG] = useState(localStorage.getItem(titelRAG));
   const [luivg, setLUIVG] = useState(localStorage.getItem(titelLUIVG));
   const [ams, setAMS] = useState(localStorage.getItem(titelAMS));
   const [oft, setOFT] = useState(localStorage.getItem(titelOFT));
   const [mundschluss, setMundschluss] = useState(localStorage.getItem(titelMundschluss));
   const [oraleErkundung, setOraleErkundung] = useState(localStorage.getItem(titelOraleErkundung));
   const [speichelfluss, setSpeichelfluss] = useState(localStorage.getItem(titelSpeichelfluss));
   const [pusten, setPusten] = useState(localStorage.getItem(titelPusten));
   const [ansaugen, setAnsaugen] = useState(localStorage.getItem(titelAnsaugen));
   const [zungenruhelage, setZungenruhelage] = useState(localStorage.getItem(titelZungenruhelage));
   const [zubk, setZBUK] = useState(localStorage.getItem(titelZBUK));
   const [lbuk, setLBUK] = useState(localStorage.getItem(titelLBUK));
   const [eutv, setEUTV] = useState(localStorage.getItem(titelEUTV));
   const [kdk, setKDK] = useState(localStorage.getItem(titelKDK));
   // const [oraleHabits, setOraleHabits] = useState(localStorage.getItem(titelOraleHabits));
   const [schnuller, setSchnuller] = useState(localStorage.getItem(titelSchnuller));
   const [tms, setTMS] = useState(localStorage.getItem(titelTMS));
   const [daumenlutschen, setDaumenlutschen] = useState(localStorage.getItem(titelDaumenlutschen));
   const [fnk, setFNK] = useState(localStorage.getItem(titelFNK));
   const [suv, setSUV] = useState(localStorage.getItem(titelSUV));
   const [zug, setZUG] = useState(localStorage.getItem(titelZUG));
   const [eom, setEoM] = useState(localStorage.getItem(titelEoM));
   const [sasde_L1, setSasde_L1] = useState(localStorage.getItem(titelSasde_L1));
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
   const [pdss_L1, setPDSS_L1] = useState(localStorage.getItem(titelPDSS_L1));
   const [ppe_L1, setPPE_L1] = useState(localStorage.getItem(titelPPE_L1));
   const [sle_L1, setSLE_L1] = useState(localStorage.getItem(titelSLE_L1));
   const [sme_L1, setSME_L1] = useState(localStorage.getItem(titelSME_L1));
   const [rs_L1, setRS_L1] = useState(localStorage.getItem(titelRS_L1));
   const [rp_L1, setRP_L1] = useState(localStorage.getItem(titelRP_L1));
   const [av_L2, setAV_L2] = useState(localStorage.getItem(titelAV_L2));
   const [aaa_L2, setAAA_L2] = useState(localStorage.getItem(titelAAA_L2));
   const [aan_L2, setAAN_L2] = useState(localStorage.getItem(titelAAN_L2));
   const [pIIs_L2, setPIIS_L2] = useState(localStorage.getItem(titelPIIS_L2));
   const [rwka_L2, setRWKA_L2] = useState(localStorage.getItem(titelRWKA_L2));
   const [rwf_L2, setRWF_L2] = useState(localStorage.getItem(titelRWF_L2));
   const [rwa_L2, setRWA_L2] = useState(localStorage.getItem(titelRWA_L2));
   const [ewau_L2, setEWAU_L2] = useState(localStorage.getItem(titelEWAU_L2));
   const [ewda_L2, setEWDA_L2] = useState(localStorage.getItem(titelEWDA_L2));
   const [ss_L2, setSS_L2] = useState(localStorage.getItem(titelSS_L2));
   const [mg_L2, setMG_L2] = useState(localStorage.getItem(titelMG_L2));
   const [mn_L2, setMN_L2] = useState(localStorage.getItem(titelMN_L2));
   const [mk_L2, setMK_L2] = useState(localStorage.getItem(titelMK_L2));
   const [mp_L2, setMP_L2] = useState(localStorage.getItem(titelMP_L2));
   const [pdss_L2, setPDSS_L2] = useState(localStorage.getItem(titelPDSS_L2));
   const [ppe_L2, setPPE_L2] = useState(localStorage.getItem(titelPPE_L2));
   const [sle_L2, setSLE_L2] = useState(localStorage.getItem(titelSLE_L2));
   const [sme_L2, setSME_L2] = useState(localStorage.getItem(titelSME_L2));
   const [rs_L2, setRS_L2] = useState(localStorage.getItem(titelRS_L2));
   const [rp_L2, setRP_L2] = useState(localStorage.getItem(titelRP_L2));
   const [stimmgebung, setStimmgebung] = useState(localStorage.getItem(titelStimmgebung));
   const [medienkonsum, setMedienkonsum] = useState(localStorage.getItem(titelMedienkonsum));
   const [mff, setMFF] = useState(localStorage.getItem(titelMFF));
   const [mst, setMST] = useState(localStorage.getItem(titelMST));
   const [mag, setMAG] = useState(localStorage.getItem(titelMAG));
   const [msk, setMSK] = useState(localStorage.getItem(titelMSK));
   const [mbb, setMBB] = useState(localStorage.getItem(titelMBB));
   const [mlc, setMLC] = useState(localStorage.getItem(titelMLC));
   const [winf, setWInf] = useState(localStorage.getItem(titelWInf));
   const [ifl, setIfL] = useState(localStorage.getItem(titelIfL));
   const [wiedervorstellung, setWiedervorstellung] = useState(localStorage.getItem(titelWiedervorstellung));
   const [krf, setKRF] = useState(localStorage.getItem(titelKRF));
   const [lb, setLB] = useState(localStorage.getItem(titelLB));
   const [zielKomf, setZielKomF] = useState(localStorage.getItem(titelZielKomF));
   const [zielBvs, setZielBvS] = useState(localStorage.getItem(titelZielBvS));
   const [zielSpf, setZielSpF] = useState(localStorage.getItem(titelZielSpF));
   const [zielRew, setZielREW] = useState(localStorage.getItem(titelZielREW));
   const [zielGf, setZielGF] = useState(localStorage.getItem(titelZielGF));
   const [zielAussprache, setZielAussprache] = useState(localStorage.getItem(titelZielAussprache));
   const [zielAW, setZielAW] = useState(localStorage.getItem(titelZielAW));
   const [zielOT, setZielOT] = useState(localStorage.getItem(titelZielOT));
   const [zielOW, setZielOW] = useState(localStorage.getItem(titelZielOW));
   const [zielOF, setZielOF] = useState(localStorage.getItem(titelZielOF));

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
   const [sasde_L1_Freitext, setSasde_L1_Freitext] = useState(localStorage.getItem(titelSasde_L1 + " (Freitext)") || "");
   const [EoM_L1_Freitext, setEoM_L1_Freitext] = useState(localStorage.getItem(titelEoM + " (Freitext L1)") || "");
   const [EoM_L2_Freitext, setEoM_L2_Freitext] = useState(localStorage.getItem(titelEoM + " (Freitext L2)") || "");
   const [AAA_L1_Freitext, setAAA_L1_Freitext] = useState(localStorage.getItem(titelAAA_L1 + " (Freitext)") || "");
   const [PIIS_L1_Freitext, setPIIS_L1_Freitext] = useState(localStorage.getItem(titelPIIS_L1 + " (Freitext)") || "");
   const [PPE_L1_Freitext, setPPE_L1_Freitext] = useState(localStorage.getItem(titelPPE_L1 + " (Freitext)") || "");
   const [SLE_L1_Freitext, setSLE_L1_Freitext] = useState(localStorage.getItem(titelSLE_L1 + " (Freitext)") || "");
   const [SME_L1_Freitext, setSME_L1_Freitext] = useState(localStorage.getItem(titelSME_L1 + " (Freitext)") || "");
   const [AAA_L2_Freitext, setAAA_L2_Freitext] = useState(localStorage.getItem(titelAAA_L2 + " (Freitext)") || "");
   const [PIIS_L2_Freitext, setPIIS_L2_Freitext] = useState(localStorage.getItem(titelPIIS_L2 + " (Freitext)") || "");
   const [PPE_L2_Freitext, setPPE_L2_Freitext] = useState(localStorage.getItem(titelPPE_L2 + " (Freitext)") || "");
   const [SLE_L2_Freitext, setSLE_L2_Freitext] = useState(localStorage.getItem(titelSLE_L2 + " (Freitext)") || "");
   const [SME_L2_Freitext, setSME_L2_Freitext] = useState(localStorage.getItem(titelSME_L2 + " (Freitext)") || "");
   const [MedienkonsumFreitext, setMedienkonsumFreitext] = useState(localStorage.getItem(titelMedienkonsum + " (Freitext)") || "");
   const [WInfFreitext, setWInfFreitext] = useState(localStorage.getItem(titelWInf + " (Freitext)") || "");

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
      setPersoenlichkeit(null);
      setBlickkontakt(null);
      setArtDerDiagnostik(null);
      setSpielverhalten(null);
      setSpielformen(null);
      setKonzentration(null);
      setRAA(null);
      setRAG(null);
      setLUIVG(null);
      setAMS(null);
      setOFT(null);
      setMundschluss(null);
      setOraleErkundung(null);
      setSpeichelfluss(null);
      setPusten(null);
      setAnsaugen(null);
      setZungenruhelage(null);
      setZBUK(null);
      setLBUK(null);
      setEUTV(null);
      setKDK(null);
      // setOraleHabits(null);
      setSchnuller(null);
      setTMS(null);
      setDaumenlutschen(null);
      setFNK(null);
      setSUV(null);
      setZUG(null);
      setEoM(null);
      setSasde_L1(null);
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
      setPDSS_L1(null);
      setPPE_L1(null);
      setSLE_L1(null);
      setSME_L1(null);
      setRS_L1(null);
      setRP_L1(null);
      setAV_L2(null);
      setAAA_L2(null);
      setAAN_L2(null);
      setPIIS_L2(null);
      setRWKA_L2(null);
      setRWF_L2(null);
      setRWA_L2(null);
      setEWAU_L2(null);
      setEWDA_L2(null);
      setSS_L2(null);
      setMG_L2(null);
      setMN_L2(null);
      setMK_L2(null);
      setMP_L2(null);
      setPDSS_L2(null);
      setPPE_L2(null);
      setSLE_L2(null);
      setSME_L2(null);
      setRS_L2(null);
      setRP_L2(null);
      setStimmgebung(null);
      setMedienkonsum(null);
      setMFF(null);
      setMST(null);
      setMAG(null);
      setMSK(null);
      setMLC(null);
      setMBB(null);
      setWInf(null);
      setIfL(null);
      setWiedervorstellung(null);
      setKRF(null);
      setLB(null);
      setZielKomF(null);
      setZielBvS(null);
      setZielSpF(null);
      setZielREW(null);
      setZielGF(null);
      setZielAussprache(null);
      setZielAW(null);
      setZielOT(null);
      setZielOW(null);
      setZielOF(null);

      setBegleitetVonFreitext("");
      setKdkFreitext("");
      setSchnullerFreitext("");
      setSUVFreitext("");
      setZUGFreitext("");
      setSasde_L1_Freitext("");
      setEoM_L1_Freitext("");
      setEoM_L2_Freitext("");
      setAAA_L1_Freitext("");
      setPIIS_L1_Freitext("");
      setPPE_L1_Freitext("");
      setSLE_L1_Freitext("");
      setSME_L1_Freitext("");
      setAAA_L2_Freitext("");
      setPIIS_L2_Freitext("");
      setPPE_L2_Freitext("");
      setSLE_L2_Freitext("");
      setSME_L2_Freitext("");
      setMedienkonsumFreitext("");
      setWInfFreitext("");

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
   ausgabe += `Allgemeines / Kontaktverhalten:`;

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
   ausgabe += ` `; // Leerzeichen hinzufügen

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
      }
   }

   // Persönlichkeit
   const auswahlPersoenlichkeit = ["aufgeschlossen", "zurückhaltend", "im Verlauf aufgeschlossener"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (persoenlichkeit) {
      switch (persoenlichkeit) {
         case "aufgeschlossen":
            ausgabe += `${Er_Sie} wirkte aufgeschlossen`;
            break;
         case "zurückhaltend":
            ausgabe += `${Er_Sie} wirkte zurückhaltend`;
            break;
         case "im Verlauf aufgeschlossener":
            ausgabe += `${Er_Sie} wurde im Verlauf der Diagnostik aufgeschlossener`;
            break;
      }
   }

   // Blickkontakt
   const auswahlBlickkontakt = ["dialogisch", "dialogisch und triangulär", "kein Blickkontakt"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (blickkontakt) {
      switch (blickkontakt) {
         case "dialogisch":
            ausgabe += `und zeigte einen dialogischen Blickkontakt.`;
            break;
         case "dialogisch und triangulär":
            ausgabe += `und zeigte einen dialogischen und triangulären Blickkontakt.`;
            break;
         case "kein Blickkontakt":
            ausgabe += `und nahm noch keinen Blickkontakt auf.`;
            break;
      }
   }

   // Art der Diagnostik
   const auswahlArtDerDiagnostik = ["standardisierte Diagnostik", "Spontansprachbeurteilung im Freispiel"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (artDerDiagnostik) {
      switch (artDerDiagnostik) {
         case "Spontansprachbeurteilung im Freispiel":
            ausgabe += `Entwicklungsbedingt wurde eine Spontansprachbeurteilung im Freispiel durchgeführt.`;
            break;
         case "standardisierte Diagnostik":
            ausgabe += ``;
            break;
      }
   }

   // Spielverhalten
   const auswahlSpielverhalten = ["wechselhaft", "ausdauernd", "kein Spielverhalten"];
   ausgabe += ` `; // Leerzeichen hinzufügen

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
      }
   }

   // Spielformen
   const auswahlSpielformen = ["Explorationsspiel", "Funktionsspiel", "Symbolspiel"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (spielformen) {
      switch (spielformen) {
         case "Explorationsspiel":
            ausgabe += `Es war ein Explorationsspiel zu beobachten.`;
            break;
         case "Funktionsspiel":
            ausgabe += `Das Spiel war funktionsorientiert.`;
            break;
         case "Symbolspiel":
            ausgabe += `Es war ein Symbolspiel zu beobachten.`;
            break;
      }
   }

   // Konzentrationsfähigkeit und Aufmerksamkeitslenkung
   const auswahlKonzentration = ["angemessen", "nicht angemessen"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (konzentration) {
      switch (konzentration) {
         case "angemessen":
            ausgabe += `Die Konzentrationsfähigkeit und Aufmerksamkeitslenkung waren angemessen.`;
            break;
         case "nicht angemessen":
            ausgabe += `Die Konzentrationsfähigkeit und Aufmerksamkeitslenkung waren noch nicht angemessen.`;
            break;
      }
   }

   // Überschrift hinzufügen
   ausgabe += `\nAuditive Wahrnehmung:`;

   // Reaktion auf Ansprache
   const auswahlRAA = ["reagiert", "reagiert nicht"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (raa) {
      switch (raa) {
         case "reagiert":
            ausgabe += `Auf Ansprache reagierte ${vorname}.`;
            break;
         case "reagiert nicht":
            ausgabe += `Auf Ansprache reagierte ${vorname} nicht.`;
            break;
      }
   }

   // Reaktion auf Geräusche
   const auswahlRAG = ["reagiert", "reagiert nicht"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (rag) {
      switch (rag) {
         case "reagiert":
            ausgabe += `Geräusche in ${seiner_ihrer} Umgebung nahm ${er_sie} wahr.`;
            break;
         case "reagiert nicht":
            ausgabe += `Geräusche in ${seiner_ihrer} Umgebung nahm ${er_sie} nicht wahr.`;
            break;
      }
   }

   // Lokalisation und Identifikation von Geräuschen
   const auswahlLUIVG = ["sicher", "nicht ausreichend zu beurteilen", "nur Identifikation sicher", "nur Lokalisation sicher"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (luivg) {
      switch (luivg) {
         case "sicher":
            ausgabe += `Die Lokalisation und Identifikation von Geräuschen gelangen ${ihm_ihr} sicher.`;
            break;
         case "nicht ausreichend zu beurteilen":
            ausgabe += `${Seine_Ihre} Fähigkeit zur Lokalisation und Identifikation von Geräuschen konnte noch nicht ausreichend beurteilt werden.`;
            break;
         case "nur Identifikation sicher":
            ausgabe += `${vorname} identifizierte Geräusche sicher. Die Lokalisation von Geräuschen war noch unsicher.`;
            break;
         case "nur Lokalisation sicher":
            ausgabe += `Die Lokalisation von Geräuschen gelang ${vorname} sicher. Die Identifikation von Geräuschen war noch unsicher.`;
            break;
      }
   }

   // Auditive Merkspanne
   const auswahlAMS = ["altersentsprechend", "nicht altersentsprechend", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (ams) {
      switch (ams) {
         case "altersentsprechend":
            ausgabe += `Die auditive Merkspanne war altersentsprechend.`;
            break;
         case "nicht altersentsprechend":
            ausgabe += `Die auditive Merkspanne war noch nicht altersentsprechend.`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // Überschrift hinzufügen
   ausgabe += `\nMundmotorik:`;

   // Stillen und Flaschennahrung
   const auswahlSUV = ["Stillen bis zum (s.u.)", "Flaschennahrung bis zum (s.u.)", "Stillen bis zum (s.u.), dann Flaschennahrung", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (suv) {
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
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // Schnuller
   const auswahlSchnuller = ["noch nie", "bis heute", "bis zum...", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

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
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // Ess- und Trinkverhalten
   const auswahlEUTV = ["unauffällig", "auffällig"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (eutv) {
      switch (eutv) {
         case "unauffällig":
            ausgabe += `${Sein_Ihr} Ess- und Trinkverhalten sei unauffällig.`;
            break;
         case "auffällig":
            ausgabe += `${Sein_Ihr} Ess- und Trinkverhalten sei auffällig.`;
            break;
      }
   }

   // Trinkflasche mit Sauger
   const auswahlTMS = ["trinkt noch aus einer", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (tms) {
      switch (tms) {
         case "trinkt noch aus einer":
            ausgabe += `${Er_Sie} trinke noch aus einer Trinkflasche mit Sauger.`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // Konsistenzen der Kost
   const auswahlKDK = ["alle Konsistenzen", "v.a. weiche/breiige Kost", "v.a. harte Kost", "Freitext eingeben..."];
   ausgabe += ` `; // Leerzeichen hinzufügen

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
         case "Freitext eingeben...":
            ausgabe += `${kdkFreitext}`;
            break;
      }
   }

   // Orale Habits
   // const auswahlOraleHabits = ["nicht vorhanden", "vorhanden"];
   // ausgabe += ` `; // Leerzeichen hinzufügen

   // if (oraleHabits) {
   //    switch (oraleHabits) {
   //       case "nicht vorhanden":
   //          ausgabe += `Orale Habits seien nicht vorhanden.`;
   //          break;
   //       case "vorhanden":
   //          ausgabe += `Orale Habits seien vorhanden.`;
   //          break;
   //       case "[ keine Angabe ]":
   //          ausgabe += ``;
   //          break;
   //    }
   // }

   // Daumenlutschen
   const auswahlDaumenlutschen = ["wird beobachtet", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (daumenlutschen) {
      switch (daumenlutschen) {
         case "wird beobachtet":
            ausgabe += `Es werde Daumenlutschen beobachtet.`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // Fingernägelkauen
   const auswahlFNK = ["wird beobachtet", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (fnk) {
      switch (fnk) {
         case "wird beobachtet":
            ausgabe += `Es werde Fingernägelkauen beobachtet.`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // Zahn- und Gebissstatus
   const auswahlZUG = ["unauffällig", "auffällig (+ Freitext)"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (zug) {
      switch (zug) {
         case "unauffällig":
            ausgabe += `${Sein_Ihr} Zahn- und Gebissstatus sei unauffällig.`;
            break;
         case "auffällig (+ Freitext)":
            ausgabe += `${Sein_Ihr} Zahn- und Gebissstatus sei auffällig. ${ZUGFreitext}`;
            break;
      }
   }

   // Orofazialer Tonus
   const auswahlOFT = ["reguliert", "nicht ausreichend reguliert"];
   ausgabe += "\n"; // Zeilenumbruch hinzufügen

   if (oft) {
      switch (oft) {
         case "reguliert":
            ausgabe += `Der orofaziale Tonus erschien ausreichend reguliert.`;
            break;
         case "nicht ausreichend reguliert":
            ausgabe += `Der orofaziale Tonus erschien noch nicht ausreichend reguliert.`;
            break;
      }
   }

   // Mundschluss
   const auswahlMundschluss = ["konstant", "offen"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (mundschluss) {
      switch (mundschluss) {
         case "konstant":
            ausgabe += `Es wurde ein konstanter Mundschluss beobachtet.`;
            break;
         case "offen":
            ausgabe += `Es wurde eine offene Mundhaltung beobachtet.`;
            break;
      }
   }

   // Orale Erkundung
   const auswahlOraleErkundung = ["verstärkt", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (oraleErkundung) {
      switch (oraleErkundung) {
         case "verstärkt":
            ausgabe += `${vorname} erkundete Gegenstände noch häufig oral.`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // Speichelfluss
   const auswahlSpeichelfluss = ["vermehrter Speichelfluss", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (speichelfluss) {
      switch (speichelfluss) {
         case "vermehrter Speichelfluss":
            ausgabe += `Es trat ein vermehrter Speichelfluss auf.`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // Pusten
   const auswahlPusten = ["möglich", "nicht möglich", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (pusten) {
      switch (pusten) {
         case "möglich":
            ausgabe += `${vorname} pustete Seifenblasen mit dosiertem Luftstrom.`;
            break;
         case "nicht möglich":
            ausgabe += `${vorname} konnte noch keine Seifenblasen mit dosiertem Luftstrom pusten.`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // Ansaugen
   const auswahlAnsaugen = ["möglich", "nicht möglich", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (ansaugen) {
      switch (ansaugen) {
         case "möglich":
            ausgabe += `Das Ansaugen mit einem Strohhalm gelang ${ihm_ihr}.`;
            break;
         case "nicht möglich":
            ausgabe += `Das Ansaugen mit einem Strohhalm gelang ${ihm_ihr} noch nicht.`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // Zungenruhelage
   const auswahlZungenruhelage = ["möglich", "nicht möglich", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (zungenruhelage) {
      switch (zungenruhelage) {
         case "möglich":
            ausgabe += `${Er_Sie} konnte die Zungenruhelage einnehmen und kurz halten.`;
            break;
         case "nicht möglich":
            ausgabe += `${Er_Sie} konnte die Zungenruhelage noch nicht einnehmen und halten.`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // Zungenbeweglichkeit und -koordination
   const auswahlZBUK = ["unauffällig", "eingeschränkt", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (zubk) {
      switch (zubk) {
         case "unauffällig":
            ausgabe += `Die Zungenbeweglichkeit und -koordination war unauffällig.`;
            break;
         case "eingeschränkt":
            ausgabe += `Die Zungenbeweglichkeit und -koordination war eingeschränkt.`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // Lippenbeweglichkeit und -koordination
   const auswahlLBUK = ["unauffällig", "eingeschränkt", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

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
      }
   }

   // Überschrift hinzufügen
   ausgabe += `\nSprachen:`;

   // Ein- oder mehrsprachige Erziehung
   const auswahlEoM = ["einsprachig (Sprache s.u.)", "mehrsprachig (Sprachen s.u.)"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (eom) {
      switch (eom) {
         case "einsprachig (Sprache s.u.)":
            ausgabe += `${Er_Sie} wurde einsprachig (${EoM_L1_Freitext}) erzogen.`;
            break;
         case "mehrsprachig (Sprachen s.u.)":
            ausgabe += `${Er_Sie} wurde mehrsprachig (L1: ${EoM_L1_Freitext}, L2: ${EoM_L2_Freitext}) erzogen.`;
            break;
      }
   }

   // mehrsprachig erzogen?
   const mehrsprachig = eom === "mehrsprachig (Sprachen s.u.)";

   // Erstsprache deutsch?
   const erstspracheDeutsch = EoM_L1_Freitext === "deutsch";

   // Überschrift hinzufügen
   if (mehrsprachig) {
      ausgabe += `\nSprachkompetenzen in der Erstsprache (${EoM_L1_Freitext})\n`;
   }

   // Aussprache: Art der Abweichung
   const auswahlSasde_L1 = ["unauffällig", "auffällig"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (sasde_L1 && mehrsprachig) {
      switch (sasde_L1) {
         case "unauffällig":
            ausgabe += "Die Sprachkompetenzen in der Erstsprache seien unauffällig.";
            break;
         case "auffällig":
            ausgabe += "Die Sprachkompetenzen in der Erstsprache seien auffällig (betroffene Bereiche: " + sasde_L1_Freitext + ").";
            break;
      }
   }

   // Überschrift hinzufügen
   if (!mehrsprachig) {
      ausgabe += `\nAussprache:`;
   }

   // Aussprache: Verständlichkeit
   const auswahlAV_L1 = ["deutlich", "undeutlich"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (av_L1) {
      switch (av_L1) {
         case "deutlich":
            ausgabe += erstspracheDeutsch ? `Die Aussprache von ${vorname} war deutlich.` : `Die Aussprache von ${vorname} sei deutlich.`;
            break;
         case "undeutlich":
            ausgabe += erstspracheDeutsch ? `Die Aussprache von ${vorname} war undeutlich.` : `Die Aussprache von ${vorname} sei undeutlich.`;
            break;
      }
   }

   // Aussprache: Art der Abweichung
   const auswahlAAA_L1 = ["Lautersetzungen / -auslassungen (phonologisch)", "Lautveränderungen (phonetisch)"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (aaa_L1 && !mehrsprachig) {
      switch (aaa_L1) {
         case "Lautersetzungen / -auslassungen (phonologisch)":
            ausgabe += erstspracheDeutsch
               ? `Es wurden Lautersetzungen und -auslassungen ${AAA_L1_Freitext ? "(Prozesse: " + AAA_L1_Freitext + ") " : ""}beobachtet.`
               : `Es seien Lautersetzungen und -auslassungen ${AAA_L1_Freitext ? "(Prozesse: " + AAA_L1_Freitext + ") " : ""}beobachtet worden.`;
            break;
         case "Lautveränderungen (phonetisch)":
            ausgabe += erstspracheDeutsch
               ? `Es wurden Lautveränderungen ${AAA_L1_Freitext ? "(betroffene Laute: " + AAA_L1_Freitext + ") " : ""}beobachtet.`
               : `Es seien Lautveränderungen ${AAA_L1_Freitext ? "(betroffene Laute: " + AAA_L1_Freitext + ") " : ""}beobachtet worden.`;
            break;
      }
   }

   // Aussprache: Altersnorm
   const auswahlAAN_L1 = ["altersentsprechend", "nicht altersentsprechend"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (aan_L1) {
      switch (aan_L1) {
         case "altersentsprechend":
            ausgabe += erstspracheDeutsch
               ? `${Seine_Ihre} Aussprachefähigkeiten waren altersentsprechend.`
               : `${Seine_Ihre} Aussprachefähigkeiten seien altersentsprechend.`;
            break;
         case "nicht altersentsprechend":
            ausgabe += erstspracheDeutsch
               ? `${Seine_Ihre} Aussprachefähigkeiten waren noch nicht altersentsprechend.`
               : `${Seine_Ihre} Aussprachefähigkeiten seien noch nicht altersentsprechend.`;
            break;
      }
   }

   // Testergebnisse PLAKSS-II-Screening (Fox-Boyer)
   const auswahlPIIS_L1 = ["Phonetisch / Phonologische Abweichungen (Prozesse s.u.)", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (pIIs_L1) {
      switch (pIIs_L1) {
         case "Phonetisch / Phonologische Abweichungen (Prozesse s.u.)":
            ausgabe += `\nTestergebnisse PLAKSS-II-Screening (Fox-Boyer)\n`; // Überschrift hinzufügen
            ausgabe += `Es wurden folgende phonetisch / phonologische Abweichungen beobachtet: ${PIIS_L1_Freitext}`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // Überschrift hinzufügen
   if (!mehrsprachig) {
      ausgabe += `\nRezeptiver und expressiver Wortschatz:`;
   }

   // Rezeptiver Wortschatz: Komplexität der Anweisungen
   const auswahlRWKA_L1 = ["komplexere Anweisungen", "kurze Anweisungen", "Schlüsselwörter", "kein Sprachverständnis"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (rwka_L1) {
      switch (rwka_L1) {
         case "komplexere Anweisungen":
            ausgabe += erstspracheDeutsch
               ? `${Er_Sie} zeigte ein sicheres Verständnis für komplexere Anweisungen.`
               : `${Er_Sie} zeige ein sicheres Verständnis für komplexere Anweisungen.`;
            break;
         case "kurze Anweisungen":
            ausgabe += erstspracheDeutsch
               ? `${Er_Sie} reagierte auf kurze Anweisungen. Ein Verständnis für komplexere Anweisungen war noch nicht zu beobachten.`
               : `${Er_Sie} reagiere auf kurze Anweisungen.`;
            break;
         case "Schlüsselwörter":
            ausgabe += erstspracheDeutsch
               ? `${Er_Sie} zeigte ein Verständnis für Schlüsselwörter (d.h. bekannter Wörter in einem Satz).`
               : `${Er_Sie} zeige ein Verständnis für Schlüsselwörter (d.h. bekannter Wörter in einem Satz).`;
            break;
         case "kein Sprachverständnis":
            ausgabe += erstspracheDeutsch
               ? `Es erfolgte noch keine entsprechende Reaktion auf einzelne Wörter, kurze Anweisungen und / oder Fragestellungen.`
               : `Es erfolge noch keine entsprechende Reaktion auf einzelne Wörter, kurze Anweisungen und / oder Fragestellungen.`;
            break;
      }
   }

   // L1 Rezeptiver Wortschatz: Frageformen
   const auswahlRWF_L1 = ["W-Fragen", "Alternativfragen", "Ja- / Nein-Fragen", "kein Verständnis", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (rwf_L1) {
      switch (rwf_L1) {
         case "W-Fragen":
            ausgabe += erstspracheDeutsch ? `W-Fragen wurden von ${vorname} verstanden.` : `W-Fragen würden von ${vorname} verstanden werden.`;
            break;
         case "Alternativfragen":
            ausgabe += erstspracheDeutsch
               ? `Alternativfragen wurden von ${vorname} verstanden. Ein Verständnis von W-Fragen war allerdings noch nicht zu beobachten.`
               : `Alternativfragen würden von ${vorname} verstanden werden.`;
            break;
         case "Ja- / Nein-Fragen":
            ausgabe += erstspracheDeutsch
               ? `${vorname} antwortete auf Ja- / Nein-Fragen. Eine Reaktion auf weitere Frageformen zeigte ${er_sie} noch nicht.`
               : `${vorname} antworte auf Ja- / Nein-Fragen. Eine Reaktion auf weitere Frageformen zeige ${er_sie} noch nicht.`;
            break;
         case "kein Verständnis":
            ausgabe += erstspracheDeutsch
               ? `Eine Reaktion auf geschlossene und / oder offene Frageformen zeigte ${er_sie} noch nicht.`
               : `Eine Reaktion auf geschlossene und / oder offene Frageformen zeige ${er_sie} noch nicht.`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // L1 Rezeptiver Wortschatz: Altersnorm
   const auswahlRWA_L1 = ["altersentsprechend", "nicht altersentsprechend"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (rwa_L1) {
      switch (rwa_L1) {
         case "altersentsprechend":
            ausgabe += erstspracheDeutsch ? `Das Sprachverständnis war altersentsprechend.` : `Das Sprachverständnis sei altersentsprechend.`;
            break;
         case "nicht altersentsprechend":
            ausgabe += erstspracheDeutsch
               ? `Das Sprachverständnis war noch nicht altersentsprechend.`
               : `Das Sprachverständnis sei noch nicht altersentsprechend.`;
            break;
      }
   }

   // L1 Expressiver Wortschatz: Art und Umfang
   const auswahlEWAU_L1 = [
      "Mehrwortäußerungen",
      "Zweiwortäußerungen",
      "einzelne Wörter",
      "keine 50 Wörter / keine Zweiwortkombinationen",
      "Lautmalereien und einzelne Wörter",
      "Laute",
      "eigene Sprache"
   ];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (ewau_L1) {
      switch (ewau_L1) {
         case "Mehrwortäußerungen":
            ausgabe += erstspracheDeutsch ? `${Er_Sie} verwendete Mehrwortäußerungen.` : `${Er_Sie} verwende Mehrwortäußerungen.`;
            break;
         case "Zweiwortäußerungen":
            ausgabe += erstspracheDeutsch ? `${Er_Sie} verwendete Zweiwortäußerungen.` : `${Er_Sie} verwende Zweiwortäußerungen.`;
            break;
         case "einzelne Wörter":
            ausgabe += erstspracheDeutsch ? `${vorname} äußerte einzelne Wörter.` : `${vorname} äußere einzelne Wörter.`;
            break;
         case "keine 50 Wörter / keine Zweiwortkombinationen":
            ausgabe += erstspracheDeutsch
               ? `${Er_Sie} äußerte einzelne Wörter, aber noch keine Zweiwortkombinationen.`
               : `${Er_Sie} äußere einzelne Wörter, aber noch keine Zweiwortkombinationen.`;
            break;
         case "Lautmalereien und einzelne Wörter":
            ausgabe += erstspracheDeutsch ? `${Er_Sie} äußerte Lautmalereien und einzelne Wörter.` : `${Er_Sie} äußere Lautmalereien und einzelne Wörter.`;
            break;
         case "Laute":
            ausgabe += erstspracheDeutsch ? `${Er_Sie} äußerte einzelne Laute.` : `${Er_Sie} äußere einzelne Laute.`;
            break;
         case "eigene Sprache":
            ausgabe += erstspracheDeutsch
               ? `${vorname} verwendete ${seine_ihre} "eigene Sprache", die für Außenstehende nicht zu verstehen war.`
               : `${vorname} verwende ${seine_ihre} "eigene Sprache", die für Außenstehende nicht zu verstehen sei.`;
            break;
      }
   }

   // L1 Expressiver Wortschatz: Differenziertheit / Altersnorm
   const auswahlEWDA_L1 = ["ausreichend differenziert / altersentsprechend", "gering / nicht altersentsprechend"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (ewda_L1) {
      switch (ewda_L1) {
         case "ausreichend differenziert / altersentsprechend":
            ausgabe += erstspracheDeutsch
               ? `Der expressive Wortschatz von ${vorname} war ausreichend differenziert und altersentsprechend.`
               : `Der expressive Wortschatz von ${vorname} sei ausreichend differenziert und altersentsprechend.`;
            break;
         case "gering / nicht altersentsprechend":
            ausgabe += erstspracheDeutsch
               ? `Der expressive Wortschatz von ${vorname} war noch gering und nicht altersentsprechend.`
               : `Der expressive Wortschatz von ${vorname} sei noch gering und nicht altersentsprechend.`;
            break;
      }
   }

   // Überschrift hinzufügen
   if (!mehrsprachig) {
      ausgabe += `\nSatzbau und Wortbildung:`;
   }

   // L1 Syntax (Satzbau)
   const auswahlSS_L1 = [
      "Satzbau korrekt",
      "Satzbau und Wortbildung korrekt (insbesondere, wenn L1: nicht deutsch",
      "Satzbau nicht korrekt",
      "Satzbau und Wortbildung nicht korrekt (insbesondere, wenn L1: nicht deutsch",
      "keine Wortkombinationen",
      "[ keine Angabe ]"
   ];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (ss_L1) {
      switch (ss_L1) {
         case "Satzbau korrekt":
            ausgabe += erstspracheDeutsch
               ? `Der Satzbau war korrekt. Die Verbzweitstellung im Hauptsatz, sowie die Verbendstellung im Nebensatz wurden von ${ihm_ihr} beachtet.`
               : `Der Satzbau sei korrekt.`;
            break;
         case "Satzbau und Wortbildung korrekt (insbesondere, wenn L1: nicht deutsch":
            ausgabe += erstspracheDeutsch ? `Der Satzbau und die Wortbildung waren korrekt.` : `Der Satzbau und die Wortbildung seien korrekt.`;
            break;
         case "Satzbau nicht korrekt":
            ausgabe += erstspracheDeutsch
               ? `Der Satzbau war nicht korrekt. ${vorname} verwendete noch die Verbendstellung im Hauptsatz.`
               : `Der Satzbau sei noch nicht korrekt.`;
            break;
         case "Satzbau und Wortbildung nicht korrekt (insbesondere, wenn L1: nicht deutsch":
            ausgabe += erstspracheDeutsch
               ? `Der Satzbau und die Wortbildung waren noch nicht korrekt.`
               : `Der Satzbau und die Wortbildung seien noch nicht korrekt.`;
            break;
         case "keine Wortkombinationen":
            ausgabe += erstspracheDeutsch ? `${Er_Sie} verwendete noch keine Wortkombinationen.` : `${Er_Sie} verwende noch keine Wortkombinationen.`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // L1 Morphologie (Wortbildung): Genus
   const auswahlMG_L1 = ["sicher", "unsicher", "keine Artikelverwendung", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (mg_L1) {
      switch (mg_L1) {
         case "sicher":
            ausgabe += erstspracheDeutsch ? `Die Artikelverwendung war sicher.` : `Die Artikelverwendung sei sicher.`;
            break;
         case "unsicher":
            ausgabe += erstspracheDeutsch ? `Die Artikelverwendung war noch unsicher.` : `Die Artikelverwendung sei noch unsicher.`;
            break;
         case "keine Artikelverwendung":
            ausgabe += erstspracheDeutsch ? `${vorname} verwendete noch gar keine Artikel.` : `${vorname} verwende noch gar keine Artikel.`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // L1 Morphologie (Wortbildung): Numerus
   const auswahlMN_L1 = ["erworben", "unsicher", "nicht erworben", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (mn_L1) {
      switch (mn_L1) {
         case "erworben":
            ausgabe += erstspracheDeutsch ? `${vorname} konnte Pluralformen regelgeleitet bilden.` : `${vorname} könne Pluralformen regelgeleitet bilden.`;
            break;
         case "unsicher":
            ausgabe += erstspracheDeutsch
               ? `${vorname} zeigte eine noch unsichere Bildung des Plurals.`
               : `${vorname} zeige eine noch unsichere Bildung des Plurals.`;
            break;
         case "nicht erworben":
            ausgabe += erstspracheDeutsch ? `${vorname} bildete noch gar keine Pluralformen.` : `${vorname} bilde noch gar keine Pluralformen.`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // L1 Morphologie (Wortbildung): Kasus (Akkusativ, Dativ)
   const auswahlMK_L1 = [
      "vollständig erworben",
      "Akkusativ erworben / Dativ unsicher (nicht markiert / nur wenn L1: deutsch)",
      "Akkusativ unsicher (nur wenn L1: deutsch)",
      "Dativ unsicher (nur wenn L1: deutsch)",
      "nicht erworben",
      "[ keine Angabe ]"
   ];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (mk_L1) {
      switch (mk_L1) {
         case "vollständig erworben":
            ausgabe += erstspracheDeutsch
               ? `${Er_Sie} war in der Lage, die Kasus Akkusativ und Dativ korrekt zu markieren.`
               : `${Er_Sie} sei in der Lage die Kasus korrekt zu markieren.`;
            break;
         case "Akkusativ erworben / Dativ unsicher (nicht markiert / nur wenn L1: deutsch)":
            ausgabe += `${Er_Sie} hatte den Akkusativ bereits sicher erworben. Der Dativ wurde noch nicht (sicher) markiert.`;
            break;
         case "Akkusativ unsicher (nur wenn L1: deutsch)":
            ausgabe += `${Er_Sie} zeigte noch Unsicherheiten in der Verwendung des Akkusativ.`;
            break;
         case "Dativ unsicher (nur wenn L1: deutsch)":
            ausgabe += `${Er_Sie} zeigte noch Unsicherheiten in der Verwendung des Dativ.`;
            break;
         case "nicht erworben":
            ausgabe += erstspracheDeutsch
               ? `${Er_Sie} hatte das Kasussystem (Akkusativ und / oder Dativ) noch gar nicht erworben.`
               : `${Er_Sie} habe das Kasussystem noch gar nicht erworben.`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // L1 Morphologie (Wortbildung): Personalformen (Subjekt-Verb-Kongruenz, Verbflexion)
   const auswahlMP_L1 = ["erworben (-st)", "nur Infinitivform (nur wenn L1: deutsch)", "unsicher", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (mp_L1) {
      switch (mp_L1) {
         case "erworben (-st)":
            ausgabe += erstspracheDeutsch
               ? `Die Subjekt-Verb-Kongruenz wurde durchgängig von ${ihm_ihr} beachtet.`
               : `Die Subjekt-Verb-Kongruenz werde durchgängig von ${ihm_ihr} beachtet.`;
            break;
         case "nur Infinitivform (nur wenn L1: deutsch)":
            ausgabe += `${vorname} verwendete noch ausschließlich die Infinitivform des Verbs.`;
            break;
         case "unsicher":
            ausgabe += erstspracheDeutsch
               ? `${Seine_Ihre} morphologischen Fähigkeiten waren noch unsicher.`
               : `${Seine_Ihre} morphologischen Fähigkeiten seien noch unsicher.`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // L1 Testergebnisse PDSS (Kauschke & Siegmüller)
   const auswahlPDSS_L1 = ["anteilig durchgeführt", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (pdss_L1) {
      switch (pdss_L1) {
         case "anteilig durchgeführt":
            ausgabe += `\nTestergebnisse PDSS (Kauschke & Siegmüller)\n`; // Überschrift hinzufügen
            ausgabe += `Es wurden ausgewählte Untertests der Diagnostik durchgeführt.\n`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // L1 Phonetisch-phonologische Ebene
   const auswahlPPE_L1 = ["durchgeführt (Testergebnisse s.u.)", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (ppe_L1) {
      switch (ppe_L1) {
         case "durchgeführt (Testergebnisse s.u.)":
            ausgabe += `Phonetisch-phonologische Ebene: ${PPE_L1_Freitext}\n`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // L1 Semantisch-lexikalische Ebene
   const auswahlSLE_L1 = ["durchgeführt (Testergebnisse s.u.)", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (sle_L1) {
      switch (sle_L1) {
         case "durchgeführt (Testergebnisse s.u.)":
            ausgabe += `Semantisch-lexikalische Ebene: ${SLE_L1_Freitext}\n`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // L1 Syntaktisch-morphologische Ebene
   const auswahlSME_L1 = ["durchgeführt (Testergebnisse s.u.)", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (sme_L1) {
      switch (sme_L1) {
         case "durchgeführt (Testergebnisse s.u.)":
            ausgabe += `Syntaktisch-morphologische Ebene: ${SME_L1_Freitext}\n`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // Sammeln der Ausgabe für den Redefluss
   // Falls diese Sammlung leer bleibt (weil überall [ keine Angabe ] geklickt wurde), soll die Überschrift "Redefluss:" entfallen.
   let ausgabeTEMP = ``;

   // L1 Redefluss (Stottern)
   const auswahlRS_L1 = ["Wiederholungen", "Dehnungen", "Blockaden", "[ keine Angabe ]"];
   ausgabeTEMP += ` `; // Leerzeichen hinzufügen

   if (rs_L1) {
      switch (rs_L1) {
         case "Wiederholungen":
            ausgabeTEMP += erstspracheDeutsch
               ? `Der Redefluss war unterbrochen. Beim Sprechen zeigten sich Unflüssigkeiten in Form von Wiederholungen.`
               : `Der Redefluss sei unterbrochen. Beim Sprechen würden sich Unflüssigkeiten in Form von Wiederholungen zeigen.`;
            break;
         case "Dehnungen":
            ausgabeTEMP += erstspracheDeutsch
               ? `Der Redefluss war unterbrochen. Beim Sprechen zeigten sich Unflüssigkeiten in Form von Dehnungen.`
               : `Der Redefluss sei unterbrochen. Beim Sprechen würden sich Unflüssigkeiten in Form von Dehnungen zeigen.`;
            break;
         case "Blockaden":
            ausgabeTEMP += erstspracheDeutsch
               ? `Der Redefluss war unterbrochen. Beim Sprechen zeigten sich Unflüssigkeiten in Form von Blockaden.`
               : `Der Redefluss sei unterbrochen. Beim Sprechen würden sich Unflüssigkeiten in Form von Blockaden zeigen.`;
            break;
         case "[ keine Angabe ]":
            ausgabeTEMP += ``;
            break;
      }
   }

   // L1 Redefluss (Poltern)
   const auswahlRP_L1 = [
      "Auslassungen / Verschmelzungen / Lautersetzungen und -veränderungen gehäuft",
      "Laut-, Silben-, Wort- und Satzteilwiederholungen",
      "erhöhtes Sprechtempo",
      "[ keine Angabe ]"
   ];
   ausgabeTEMP += ` `; // Leerzeichen hinzufügen

   if (rp_L1) {
      switch (rp_L1) {
         case "Auslassungen / Verschmelzungen / Lautersetzungen und -veränderungen gehäuft":
            ausgabeTEMP += erstspracheDeutsch
               ? `Der Redefluss war verändert. Beim Sprechen zeigten sich gehäuft Auslassungen und Verschmelzungen von Lauten und Silben, sowie Lautersetzungen und -veränderungen bei erhöhter und / oder irregulärer Artikulationsrate.`
               : `Der Redefluss sei verändert. Beim Sprechen würden sich gehäuft Auslassungen und Verschmelzungen von Lauten und Silben, sowie Lautersetzungen und -veränderungen bei erhöhter und / oder irregulärer Artikulationsrate zeigen.`;
            break;
         case "Laut-, Silben-, Wort- und Satzteilwiederholungen":
            ausgabeTEMP += erstspracheDeutsch
               ? `Der Redefluss war unterbrochen. Es traten Unflüssigkeiten in Form von Laut-, Silben-, Wort- und Satzteilwiederholungen auf.`
               : `Der Redefluss sei unterbrochen. Es würden Unflüssigkeiten in Form von Laut-, Silben-, Wort- und Satzteilwiederholungen auftreten.`;
            break;
         case "erhöhtes Sprechtempo":
            ausgabeTEMP += erstspracheDeutsch
               ? `Der Redefluss war verändert. ${Sein_Ihr} Sprechtempo war erhöht und / oder irregulär.`
               : `Der Redefluss sei verändert. ${Sein_Ihr} Sprechtempo sei erhöht und / oder irregulär.`;
            break;
         case "[ keine Angabe ]":
            ausgabeTEMP += ``;
            break;
      }
   }

   if (ausgabeTEMP.trim() !== ``) {
      ausgabe += `\nRedefluss:` + ausgabeTEMP;
   }

   // Überschrift hinzufügen
   if (mehrsprachig) {
      ausgabe += `\nSprachkompetenzen in der Zweitsprache (${EoM_L2_Freitext})`;
   }

   if (mehrsprachig) {
      // Überschrift hinzufügen
      ausgabe += `\nAussprache:`;
   }

   // Aussprache: Verständlichkeit
   const auswahlAV_L2 = ["deutlich", "undeutlich"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (av_L2) {
      switch (av_L2) {
         case "deutlich":
            ausgabe += `Die Aussprache von ${vorname} war deutlich.`;
            break;
         case "undeutlich":
            ausgabe += `Die Aussprache von ${vorname} war undeutlich.`;
            break;
      }
   }

   // Aussprache: Art der Abweichung
   const auswahlAAA_L2 = ["Lautersetzungen / -auslassungen (phonologisch)", "Lautveränderungen (phonetisch)"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (aaa_L2) {
      switch (aaa_L2) {
         case "Lautersetzungen / -auslassungen (phonologisch)":
            ausgabe += `Es wurden Lautersetzungen und -auslassungen ${AAA_L2_Freitext ? "(Prozesse: " + AAA_L2_Freitext + ") " : ""}beobachtet.`;
            break;
         case "Lautveränderungen (phonetisch)":
            ausgabe += `Es wurden Lautveränderungen ${AAA_L2_Freitext ? "(betroffene Laute: " + AAA_L2_Freitext + ") " : ""}beobachtet.`;
            break;
      }
   }

   // Aussprache: Altersnorm
   const auswahlAAN_L2 = ["altersentsprechend", "nicht altersentsprechend"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (aan_L2) {
      switch (aan_L2) {
         case "altersentsprechend":
            ausgabe += `${Seine_Ihre} Aussprachefähigkeiten waren altersentsprechend.`;
            break;
         case "nicht altersentsprechend":
            ausgabe += `${Seine_Ihre} Aussprachefähigkeiten waren noch nicht altersentsprechend.`;
            break;
      }
   }

   // Testergebnisse PLAKSS-II-Screening (Fox-Boyer)
   const auswahlPIIS_L2 = ["Phonetisch / Phonologische Abweichungen (Prozesse s.u.)", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (pIIs_L2) {
      switch (pIIs_L2) {
         case "Phonetisch / Phonologische Abweichungen (Prozesse s.u.)":
            ausgabe += `\nTestergebnisse PLAKSS-II-Screening (Fox-Boyer)\n`; // Überschrift hinzufügen
            ausgabe += `Es wurden folgende phonetisch / phonologische Abweichungen beobachtet: ${PIIS_L2_Freitext}`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   if (mehrsprachig) {
      // Überschrift hinzufügen
      ausgabe += `\nRezeptiver und expressiver Wortschatz:`;
   }

   // Rezeptiver Wortschatz: Komplexität der Anweisungen
   const auswahlRWKA_L2 = ["komplexere Anweisungen", "kurze Anweisungen", "Schlüsselwörter", "kein Sprachverständnis"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (rwka_L2) {
      switch (rwka_L2) {
         case "komplexere Anweisungen":
            ausgabe += `${Er_Sie} zeigte ein sicheres Verständnis für komplexere Anweisungen.`;
            break;
         case "kurze Anweisungen":
            ausgabe += `${Er_Sie} reagierte auf kurze Anweisungen.`;
            break;
         case "Schlüsselwörter":
            ausgabe += `${Er_Sie} zeigte ein Verständnis für Schlüsselwörter (d.h. bekannter Wörter in einem Satz).`;
            break;
         case "kein Sprachverständnis":
            ausgabe += `Es erfolgte noch keine entsprechende Reaktion auf einzelne Wörter, kurze Anweisungen und / oder Fragestellungen.`;
            break;
      }
   }

   // L2 Rezeptiver Wortschatz: Frageformen
   const auswahlRWF_L2 = ["W-Fragen", "Alternativfragen", "Ja- / Nein-Fragen", "kein Verständnis", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (rwf_L2) {
      switch (rwf_L2) {
         case "W-Fragen":
            ausgabe += `W-Fragen wurden von ${vorname} verstanden.`;
            break;
         case "Alternativfragen":
            ausgabe += `Alternativfragen wurden von ${vorname} verstanden. Ein Verständnis von W-Fragen war allerdings noch nicht zu beobachten.`;
            break;
         case "Ja- / Nein-Fragen":
            ausgabe += `${vorname} antwortete auf Ja- / Nein-Fragen.`;
            break;
         case "kein Verständnis":
            ausgabe += `Eine Reaktion auf geschlossene und / oder offene Frageformen zeigte ${er_sie} noch nicht.`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // L2 Rezeptiver Wortschatz: Altersnorm
   const auswahlRWA_L2 = ["altersentsprechend", "nicht altersentsprechend"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (rwa_L2) {
      switch (rwa_L2) {
         case "altersentsprechend":
            ausgabe += `Das Sprachverständnis war altersentsprechend.`;
            break;
         case "nicht altersentsprechend":
            ausgabe += `Das Sprachverständnis war noch nicht altersentsprechend.`;
            break;
      }
   }

   // L2 Expressiver Wortschatz: Art und Umfang
   const auswahlEWAU_L2 = [
      "Mehrwortäußerungen",
      "Zweiwortäußerungen",
      "einzelne Wörter",
      "keine 50 Wörter / keine Zweiwortkombinationen",
      "Lautmalereien und einzelne Wörter",
      "Laute",
      "eigene Sprache"
   ];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (ewau_L2) {
      switch (ewau_L2) {
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
         case "Laute":
            ausgabe += `${Er_Sie} äußerte einzelne Laute.`;
            break;
         case "eigene Sprache":
            ausgabe += `${vorname} verwendete ${seine_ihre} "eigene Sprache", die für Außenstehende nicht zu verstehen war.`;
            break;
      }
   }

   // L2 Expressiver Wortschatz: Differenziertheit / Altersnorm
   const auswahlEWDA_L2 = ["ausreichend differenziert / altersentsprechend", "gering / nicht altersentsprechend"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (ewda_L2) {
      switch (ewda_L2) {
         case "ausreichend differenziert / altersentsprechend":
            ausgabe += erstspracheDeutsch
               ? `Der expressive Wortschatz von ${vorname} war ausreichend differenziert und altersentsprechend.`
               : `Der expressive Wortschatz von ${vorname} war ausreichend differenziert und altersentsprechend.`;
            break;
         case "gering / nicht altersentsprechend":
            ausgabe += erstspracheDeutsch
               ? `Der expressive Wortschatz von ${vorname} war noch gering und nicht altersentsprechend.`
               : `Der expressive Wortschatz von ${vorname} war noch gering und nicht altersentsprechend.`;
            break;
      }
   }

   if (mehrsprachig) {
      // Überschrift hinzufügen
      ausgabe += `\nSatzbau und Wortbildung:`;
   }

   // L2 Syntax (Satzbau)
   const auswahlSS_L2 = [
      "Satzbau korrekt (Verbzweitstellung und Verbendstellung)",
      "Satzbau korrekt (Verbzweitstellung)",
      "Satzbau korrekt / unflexible Satzstrukturen",
      "Satzbau nicht korrekt (Verbendstellung)",
      "[ keine Angabe ]"
   ];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (ss_L2) {
      switch (ss_L2) {
         case "Satzbau korrekt (Verbzweitstellung und Verbendstellung)":
            ausgabe += `Der Satzbau war korrekt. Die Verbzweitstellung im Hauptsatz, sowie die Verbendstellung im Nebensatz wurden von ${ihm_ihr} beachtet.`;
            break;
         case "Satzbau korrekt (Verbzweitstellung)":
            ausgabe += `Der Satzbau war korrekt. Die Verbzweitstellung im Hauptsatz wurde von ${ihm_ihr} beachtet.`;
            break;
         case "Satzbau korrekt / unflexible Satzstrukturen":
            ausgabe += `${vorname} beachtete die Verbzweitstellung im Hauptsatz, allerdings waren die Satzstrukturen insgesamt noch wenig flexibel.`;
            break;
         case "Satzbau nicht korrekt (Verbendstellung)":
            ausgabe += `Der Satzbau war nicht korrekt. ${vorname} verwendete noch die Verbendstellung im Hauptsatz.`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // L2 Morphologie (Wortbildung): Genus
   const auswahlMG_L2 = ["sicher", "unsicher", "keine Artikelverwendung", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (mg_L2) {
      switch (mg_L2) {
         case "sicher":
            ausgabe += `Die Artikelverwendung war sicher.`;
            break;
         case "unsicher":
            ausgabe += `Die Artikelverwendung war noch unsicher.`;
            break;
         case "keine Artikelverwendung":
            ausgabe += `${vorname} verwendete noch gar keine Artikel.`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // L2 Morphologie (Wortbildung): Numerus
   const auswahlMN_L2 = ["erworben", "unsicher", "nicht erworben", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (mn_L2) {
      switch (mn_L2) {
         case "erworben":
            ausgabe += `${vorname} konnte Pluralformen regelgeleitet bilden.`;
            break;
         case "unsicher":
            ausgabe += `${vorname} zeigte eine noch unsichere Bildung des Plurals.`;
            break;
         case "nicht erworben":
            ausgabe += `${vorname} bildete noch gar keine Pluralformen.`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // L2 Morphologie (Wortbildung): Kasus (Akkusativ, Dativ)
   const auswahlMK_L2 = [
      "vollständig erworben",
      "Akkusativ erworben / Dativ unsicher (nicht markiert)",
      "Akkusativ unsicher",
      "Dativ unsicher",
      "nicht erworben",
      "[ keine Angabe ]"
   ];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (mk_L2) {
      switch (mk_L2) {
         case "vollständig erworben":
            ausgabe += `${Er_Sie} war in der Lage, die Kasus Akkusativ und Dativ korrekt zu markieren.`;
            break;
         case "Akkusativ erworben / Dativ unsicher (nicht markiert)":
            ausgabe += `${Er_Sie} hatte den Akkusativ bereits sicher erworben. Der Dativ wurde noch nicht (sicher) markiert.`;
            break;
         case "Akkusativ unsicher":
            ausgabe += `${Er_Sie} zeigte noch Unsicherheiten in der Verwendung des Akkusativ.`;
            break;
         case "Dativ unsicher":
            ausgabe += `${Er_Sie} zeigte noch Unsicherheiten in der Verwendung des Dativ.`;
            break;
         case "nicht erworben":
            ausgabe += `${Er_Sie} hatte das Kasussystem (Akkusativ und / oder Dativ) noch gar nicht erworben.`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // L2 Morphologie (Wortbildung): Personalformen (Subjekt-Verb-Kongruenz, Verbflexion)
   const auswahlMP_L2 = ["erworben (-st)", "nur Infinitivform", "unsicher (V2 im Ansatz)", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (mp_L2) {
      switch (mp_L2) {
         case "erworben (-st)":
            ausgabe += `Die Subjekt-Verb-Kongruenz wurde durchgängig von ${ihm_ihr} beachtet.`;
            break;
         case "nur Infinitivform":
            ausgabe += `${vorname} verwendete noch ausschließlich die Infinitivform des Verbs.`;
            break;
         case "unsicher (V2 im Ansatz)":
            ausgabe += `Im Ansatz war zu beobachten, dass ${vorname} die Subjekt-Verb-Kongruenz beachtete. ${Seine_Ihre} diesbezüglichen morphologischen Fähigkeiten waren allerdings noch sehr unsicher.`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // L2 Testergebnisse PDSS (Kauschke & Siegmüller)
   const auswahlPDSS_L2 = ["anteilig durchgeführt", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (pdss_L2) {
      switch (pdss_L2) {
         case "anteilig durchgeführt":
            ausgabe += `\nTestergebnisse PDSS (Kauschke & Siegmüller)\n`; // Überschrift hinzufügen
            ausgabe += `Es wurden ausgewählte Untertests der Diagnostik durchgeführt.\n`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // L2 Phonetisch-phonologische Ebene
   const auswahlPPE_L2 = ["durchgeführt (Testergebnisse s.u.)", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (ppe_L2) {
      switch (ppe_L2) {
         case "durchgeführt (Testergebnisse s.u.)":
            ausgabe += `Phonetisch-phonologische Ebene: ${PPE_L2_Freitext}\n`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // L2 Semantisch-lexikalische Ebene
   const auswahlSLE_L2 = ["durchgeführt (Testergebnisse s.u.)", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (sle_L2) {
      switch (sle_L2) {
         case "durchgeführt (Testergebnisse s.u.)":
            ausgabe += `Semantisch-lexikalische Ebene: ${SLE_L2_Freitext}\n`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // L2 Syntaktisch-morphologische Ebene
   const auswahlSME_L2 = ["durchgeführt (Testergebnisse s.u.)", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (sme_L2) {
      switch (sme_L2) {
         case "durchgeführt (Testergebnisse s.u.)":
            ausgabe += `Syntaktisch-morphologische Ebene: ${SME_L2_Freitext}\n`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // Sammeln der Ausgabe für den Redefluss
   // Falls diese Sammlung leer bleibt (weil überall [ keine Angabe ] geklickt wurde), soll die Überschrift "Redefluss:" entfallen.
   ausgabeTEMP = ``;

   // L2 Redefluss (Stottern)
   const auswahlRS_L2 = ["Wiederholungen", "Dehnungen", "Blockaden", "[ keine Angabe ]"];
   ausgabeTEMP += ` `; // Leerzeichen hinzufügen

   if (rs_L2) {
      switch (rs_L2) {
         case "Wiederholungen":
            ausgabeTEMP += `Der Redefluss war unterbrochen. Beim Sprechen zeigten sich Unflüssigkeiten in Form von Wiederholungen.`;
            break;
         case "Dehnungen":
            ausgabeTEMP += `Der Redefluss war unterbrochen. Beim Sprechen zeigten sich Unflüssigkeiten in Form von Dehnungen.`;
            break;
         case "Blockaden":
            ausgabeTEMP += `Der Redefluss war unterbrochen. Beim Sprechen zeigten sich Unflüssigkeiten in Form von Blockaden.`;
            break;
         case "[ keine Angabe ]":
            ausgabeTEMP += ``;
            break;
      }
   }

   // L2 Redefluss (Poltern)
   const auswahlRP_L2 = [
      "Auslassungen / Verschmelzungen / Lautersetzungen und -veränderungen gehäuft",
      "Laut-, Silben-, Wort- und Satzteilwiederholungen",
      "erhöhtes Sprechtempo",
      "[ keine Angabe ]"
   ];
   ausgabeTEMP += ` `; // Leerzeichen hinzufügen

   if (rp_L2) {
      switch (rp_L2) {
         case "Auslassungen / Verschmelzungen / Lautersetzungen und -veränderungen gehäuft":
            ausgabeTEMP += `Der Redefluss war verändert. Beim Sprechen zeigten sich gehäuft Auslassungen und Verschmelzungen von Lauten und Silben, sowie Lautersetzungen und -veränderungen bei erhöhter und / oder irregulärer Artikulationsrate.`;
            break;
         case "Laut-, Silben-, Wort- und Satzteilwiederholungen":
            ausgabeTEMP += `Der Redefluss war unterbrochen. Es traten Unflüssigkeiten in Form von Laut-, Silben-, Wort- und Satzteilwiederholungen auf.`;
            break;
         case "erhöhtes Sprechtempo":
            ausgabeTEMP += `Der Redefluss war verändert. ${Sein_Ihr} Sprechtempo war erhöht und / oder irregulär.`;
            break;
         case "[ keine Angabe ]":
            ausgabeTEMP += ``;
            break;
      }
   }

   if (mehrsprachig && ausgabeTEMP.trim() !== ``) {
      ausgabe += `\nRedefluss:` + ausgabeTEMP;
   }

   // Stimmgebung
   const auswahlStimmgebung = ["hoch", "tief", "verhaucht / heiser", "laut", "leise", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (stimmgebung) {
      switch (stimmgebung) {
         case "hoch":
            ausgabe += `\nStimmgebung: Die Stimmgebung von ${vorname} war auffällig, da die Stimme ungewöhnlich hoch klang.`;
            break;
         case "tief":
            ausgabe += `\nStimmgebung: Die Stimmgebung von ${vorname} war auffällig, da die Stimme ungewöhnlich tief klang.`;
            break;
         case "verhaucht / heiser":
            ausgabe += `\nStimmgebung: Die Stimmgebung von ${vorname} war auffällig, da die Stimme verhaucht / heiser klang.`;
            break;
         case "laut":
            ausgabe += `\nStimmgebung: ${vorname} sprach sehr laut.`;
            break;
         case "leise":
            ausgabe += `\nStimmgebung: ${vorname} sprach sehr leise.`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // Überschrift hinzufügen
   ausgabe += `\nMedienkonsum:`;

   // Medienkonsum: Dauer
   const auswahlMedienkonsum = [
      "angemessen (< 1 Std. / Tag, Gesamtnutzungsdauer pro Tag s.u.)",
      "erhöht (> 1 Std. / Tag, Gesamtnutzungsdauer pro Tag s.u.)",
      "[ keine Angabe ]"
   ];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (medienkonsum) {
      switch (medienkonsum) {
         case "angemessen (< 1 Std. / Tag, Gesamtnutzungsdauer pro Tag s.u.)":
            ausgabe += `In Bezug auf ${sein_ihr} Alter war der Medienkonsum angemessen (Gesamtnutzungsdauer aller Medien pro Tag: ${MedienkonsumFreitext}).`;
            break;
         case "erhöht (> 1 Std. / Tag, Gesamtnutzungsdauer pro Tag s.u.)":
            ausgabe += `In Bezug auf ${sein_ihr} Alter war der Medienkonsum erhöht (Gesamtnutzungsdauer aller Medien pro Tag: ${MedienkonsumFreitext}).`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }
   ausgabe += ` `; // Leerzeichen hinzufügen

   // Sammeln der Ausgabe für die Art der Medien
   // Falls diese Sammlung leer bleibt (weil überall [ keine Angabe ] geklickt wurde), soll die Überschrift "Art der Medien:" entfallen.
   ausgabeTEMP = ``;

   // Fernsehen / Filme
   const auswahlMFF = ["Nutzung", "[ keine Angabe ]"];
   ausgabeTEMP += ` `; // Leerzeichen hinzufügen

   if (mff) {
      switch (mff) {
         case "Nutzung":
            ausgabeTEMP += `Fernsehsendungen und -filme,`;
            break;
         case "[ keine Angabe ]":
            ausgabeTEMP += ``;
            break;
      }
   }

   // Smartphone / Tablet
   const auswahlMST = ["Nutzung", "[ keine Angabe ]"];
   ausgabeTEMP += ` `; // Leerzeichen hinzufügen

   if (mst) {
      switch (mst) {
         case "Nutzung":
            ausgabeTEMP += `Smartphone / Tablet,`;
            break;
         case "[ keine Angabe ]":
            ausgabeTEMP += ``;
            break;
      }
   }

   // Audiogerät
   const auswahlMAG = ["Nutzung", "[ keine Angabe ]"];
   ausgabeTEMP += ` `; // Leerzeichen hinzufügen

   if (mag) {
      switch (mag) {
         case "Nutzung":
            ausgabeTEMP += `Audiogerät (Hörbücher und / oder Lieder),`;
            break;
         case "[ keine Angabe ]":
            ausgabeTEMP += ``;
            break;
      }
   }

   // Spielekonsole
   const auswahlMSK = ["Nutzung", "[ keine Angabe ]"];
   ausgabeTEMP += ` `; // Leerzeichen hinzufügen

   if (msk) {
      switch (msk) {
         case "Nutzung":
            ausgabeTEMP += `Spielekonsole,`;
            break;
         case "[ keine Angabe ]":
            ausgabeTEMP += ``;
            break;
      }
   }

   // Bilderbücher
   const auswahlMBB = ["Nutzung", "[ keine Angabe ]"];
   ausgabeTEMP += ` `; // Leerzeichen hinzufügen

   if (mbb) {
      switch (mbb) {
         case "Nutzung":
            ausgabeTEMP += `Bilderbücher,`;
            break;
         case "[ keine Angabe ]":
            ausgabeTEMP += ``;
            break;
      }
   }

   // Lerncomputer
   const auswahlMLC = ["Nutzung", "[ keine Angabe ]"];
   ausgabeTEMP += ` `; // Leerzeichen hinzufügen

   if (mlc) {
      switch (mlc) {
         case "Nutzung":
            ausgabeTEMP += `Lerncomputer,`;
            break;
         case "[ keine Angabe ]":
            ausgabeTEMP += ``;
            break;
      }
   }

   if (ausgabeTEMP.trim() !== ``) {
      ausgabe += `Art der Medien:` + ausgabeTEMP.trimEnd().slice(0, -1); // Überflüssige Leerzeichen und das Komma am Ende löschen
   }

   // Weitere Informationen, Erwartungen / Fragen
   const auswahlWInf = ["Freitext eingeben...", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (winf) {
      switch (winf) {
         case "Freitext eingeben...":
            ausgabe += `\nSonstiges: ${WInfFreitext}`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // Überschrift hinzufügen
   ausgabe += `\nFazit:`;

   // Indikation für Logopädie
   const auswahlIfL = [
      "indiziert (mit Testergebnissen)",
      "indiziert (ohne Testergebnisse)",
      "nicht indiziert (mit Testergebnissen)",
      "nicht indiziert (ohne Testergebnisse)"
   ];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (ifl) {
      switch (ifl) {
         case "indiziert (mit Testergebnissen)":
            ausgabe += `Aufgrund der Beobachtungen und Testergebnisse ist eine logopädische Behandlung indiziert.`;
            break;
         case "indiziert (ohne Testergebnisse)":
            ausgabe += `Aufgrund der Beobachtungen und der anamnestischen Informationen ist eine logopädische Behandlung indiziert.`;
            break;
         case "nicht indiziert (mit Testergebnissen)":
            ausgabe += `Aufgrund der Beobachtungen und Testergebnisse ist eine logopädische Behandlung derzeit nicht indiziert.`;
            break;
         case "nicht indiziert (ohne Testergebnisse)":
            ausgabe += `Aufgrund der Beobachtungen und der anamnestischen Informationen ist eine logopädische Behandlung derzeit nicht indiziert.`;
            break;
      }
   }

   // Wiedervorstellung
   const auswahlWiedervorstellung = ["ja", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (wiedervorstellung) {
      switch (wiedervorstellung) {
         case "ja":
            ausgabe += `Eine Wiedervorstellung in unserer Einrichtung oder in einer logopädischen Praxis wird angeraten.`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // Kontrolluntersuchung im Rahmen der Frühförderung
   const auswahlKRF = ["ja", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (krf) {
      switch (krf) {
         case "ja":
            ausgabe += `Die Durchführung einer erneuten logopädischen Diagnostik erscheint im Rahmen der Frühförderung sinnvoll.`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // Logopädische Begleitung ("watchful waiting")
   const auswahlLB = ["ja", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (lb) {
      switch (lb) {
         case "ja":
            ausgabe += `Eine logopädische Begleitung ${seiner_ihrer} Sprachentwicklung in größeren, zeitlichen Abständen mit Beratung der Eltern, im Hinblick auf das sprachförderliche Verhalten, erscheint ratsam ("watchful waiting").`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // Kommunikative Fähigkeiten
   const auswahlZielKomF = ["ja", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen
   ausgabe += `Ziele der Therapie: `;

   if (zielKomf) {
      switch (zielKomf) {
         case "ja":
            ausgabe += `Verbesserung der kommunikativen Fähigkeiten (u.a. dialogischer / triangulärer Blickkontakt, turn taking, Imitation, Gestik),`;
            break;
         case "nicht Ziel":
            ausgabe += ``;
            break;
      }
   }

   // Bedeutung von Sprache
   const auswahlZielBvS = ["ja", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (zielBvs) {
      switch (zielBvs) {
         case "ja":
            ausgabe += `Erkennen der Bedeutung von Sprache,`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // Sprechfreude
   const auswahlZielSpF = ["ja", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (zielSpf) {
      switch (zielSpf) {
         case "ja":
            ausgabe += `Steigerung der Sprechfreude,`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // Rezeptiver / Expressiver Wortschatz
   const auswahlZielREW = ["ja", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (zielRew) {
      switch (zielRew) {
         case "ja":
            ausgabe += `Erweiterung des rezeptiven und expressiven Wortschatzes,`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // Grammatikalische Fähigkeiten
   const auswahlZielGF = ["ja", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (zielGf) {
      switch (zielGf) {
         case "ja":
            ausgabe += `Verbesserung der grammatikalischen Fähigkeiten,`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // Aussprache
   const auswahlZielAussprache = ["ja", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (zielAussprache) {
      switch (zielAussprache) {
         case "ja":
            ausgabe += `Verbesserung der Aussprache,`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // Auditive Wahrnehmung
   const auswahlZielAW = ["ja", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (zielAW) {
      switch (zielAW) {
         case "ja":
            ausgabe += `Verbesserung der auditiven Wahrnehmung,`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // Orofazialer Tonus
   const auswahlZielOT = ["ja", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (zielOT) {
      switch (zielOT) {
         case "ja":
            ausgabe += `Regulation des orofazialen Tonus,`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // Orofaziale Wahrnehmung
   const auswahlZielOW = ["ja", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (zielOW) {
      switch (zielOW) {
         case "ja":
            ausgabe += `Sensibilisierung der orofazialen Wahrnehmung,`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   // Orofaziale Fähigkeiten
   const auswahlZielOF = ["ja", "[ keine Angabe ]"];
   ausgabe += ` `; // Leerzeichen hinzufügen

   if (zielOF) {
      switch (zielOF) {
         case "ja":
            ausgabe += `Verbesserung der orofazialen Fähigkeiten,`;
            break;
         case "[ keine Angabe ]":
            ausgabe += ``;
            break;
      }
   }

   ausgabe = ausgabe.trimEnd().slice(0, -1); // Überflüssige Leerzeichen und das Komma am Ende löschen

   // ######
   // ######   Ende Ausgabe füllen
   // ######
   // ########################################################################################################################
   // ########################################################################################################################
   // ########################################################################################################################

   ausgabe = ausgabe.replaceAll("    ", " ").replaceAll("   ", " ").replaceAll("  ", " ");
   ausgabe = ausgabe.replaceAll(" \n", "\n");
   ausgabe = ausgabe.replaceAll("\n ", "\n");
   ausgabe = ausgabe.replaceAll("\n\n", "\n");

   // #################################################
   // #################################################
   // ###
   // ###   Endergebnis auf dem Bildschirm anzeigen
   // ###

   return (
      <div className="grid h-screen gap-3 p-4 mx-auto md:grid-cols-2 md:gap-5 md:p-6 max-w-screen-2xl">
         <div className="h-full p-3 overflow-auto bg-white border border-gray-300 rounded-md shadow-lg">
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
               <Radio value={persoenlichkeit} onChange={setPersoenlichkeit} title={titelPersoenlichkeit} auswahl={auswahlPersoenlichkeit} />
               <Radio value={blickkontakt} onChange={setBlickkontakt} title={titelBlickkontakt} auswahl={auswahlBlickkontakt} />
            </Hauptblock>
            <Hauptblock text="Art der Diagnostik">
               <Radio value={artDerDiagnostik} onChange={setArtDerDiagnostik} title={titelArtDerDiagnostik} auswahl={auswahlArtDerDiagnostik} />
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
            <Hauptblock text="Mundmotorik aus Sicht der Eltern">
               <Radio value={suv} onChange={setSUV} title={titelSUV} auswahl={auswahlSUV} />
               <InputFreitext value={SUVFreitext} onChange={setSUVFreitext} title={titelSUV + " (Freitext)"} placeholder="Beispiel: zehnten Monat" />
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
               {/* <Radio value={oraleHabits} onChange={setOraleHabits} title={titelOraleHabits} auswahl={auswahlOraleHabits} /> */}
               <Radio value={daumenlutschen} onChange={setDaumenlutschen} title={titelDaumenlutschen} auswahl={auswahlDaumenlutschen} />
               <Radio value={fnk} onChange={setFNK} title={titelFNK} auswahl={auswahlFNK} />
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
            <Hauptblock text="Mundmotorik">
               <Radio value={oft} onChange={setOFT} title={titelOFT} auswahl={auswahlOFT} />
               <Radio value={mundschluss} onChange={setMundschluss} title={titelMundschluss} auswahl={auswahlMundschluss} />
               <Radio value={oraleErkundung} onChange={setOraleErkundung} title={titelOraleErkundung} auswahl={auswahlOraleErkundung} />
               <Radio value={speichelfluss} onChange={setSpeichelfluss} title={titelSpeichelfluss} auswahl={auswahlSpeichelfluss} />
               <Radio value={pusten} onChange={setPusten} title={titelPusten} auswahl={auswahlPusten} />
               <Radio value={ansaugen} onChange={setAnsaugen} title={titelAnsaugen} auswahl={auswahlAnsaugen} />
               <Radio value={zungenruhelage} onChange={setZungenruhelage} title={titelZungenruhelage} auswahl={auswahlZungenruhelage} />
               <Radio value={zubk} onChange={setZBUK} title={titelZBUK} auswahl={auswahlZBUK} />
               <Radio value={lbuk} onChange={setLBUK} title={titelLBUK} auswahl={auswahlLBUK} />
            </Hauptblock>
            <Hauptblock text="Sprachen">
               <Radio value={eom} onChange={setEoM} title={titelEoM} auswahl={auswahlEoM} />
               <InputFreitext value={EoM_L1_Freitext} onChange={setEoM_L1_Freitext} title={titelEoM + " (Freitext L1)"} placeholder="L1" />
               {mehrsprachig && <InputFreitext value={EoM_L2_Freitext} onChange={setEoM_L2_Freitext} title={titelEoM + " (Freitext L2)"} placeholder="L2" />}
            </Hauptblock>
            <Hauptblock text="Sprachkompetenzen in der Erstsprache (L1)">
               {mehrsprachig && <Radio value={sasde_L1} onChange={setSasde_L1} title={titelSasde_L1} auswahl={auswahlSasde_L1} />}
               {mehrsprachig && (
                  <InputFreitext
                     value={sasde_L1_Freitext}
                     onChange={setSasde_L1_Freitext}
                     title={titelSasde_L1 + " (Freitext)"}
                     placeholder="betroffene Bereiche"
                     width="w-8/12"
                  />
               )}
               {!mehrsprachig && (
                  <>
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
                     <Radio value={pdss_L1} onChange={setPDSS_L1} title={titelPDSS_L1} auswahl={auswahlPDSS_L1} />
                     <Radio value={ppe_L1} onChange={setPPE_L1} title={titelPPE_L1} auswahl={auswahlPPE_L1} />
                     {ppe_L1 === "durchgeführt (Testergebnisse s.u.)" && (
                        <InputFreitext value={PPE_L1_Freitext} onChange={setPPE_L1_Freitext} title={titelPPE_L1 + " (Freitext)"} placeholder="Testergebnisse" />
                     )}
                     <Radio value={sle_L1} onChange={setSLE_L1} title={titelSLE_L1} auswahl={auswahlSLE_L1} />
                     {sle_L1 === "durchgeführt (Testergebnisse s.u.)" && (
                        <InputFreitext value={SLE_L1_Freitext} onChange={setSLE_L1_Freitext} title={titelSLE_L1 + " (Freitext)"} placeholder="Testergebnisse" />
                     )}
                     <Radio value={sme_L1} onChange={setSME_L1} title={titelSME_L1} auswahl={auswahlSME_L1} />
                     {sme_L1 === "durchgeführt (Testergebnisse s.u.)" && (
                        <InputFreitext value={SME_L1_Freitext} onChange={setSME_L1_Freitext} title={titelSME_L1 + " (Freitext)"} placeholder="Testergebnisse" />
                     )}
                     <Radio value={rs_L1} onChange={setRS_L1} title={titelRS_L1} auswahl={auswahlRS_L1} />
                     <Radio value={rp_L1} onChange={setRP_L1} title={titelRP_L1} auswahl={auswahlRP_L1} />
                  </>
               )}
            </Hauptblock>
            {mehrsprachig && (
               <Hauptblock text="Sprachkompetenzen in der Zweitsprache (L2)" show={showL2} onToggle={toggleL2Handler}>
                  <Radio value={av_L2} onChange={setAV_L2} title={titelAV_L2} auswahl={auswahlAV_L2} />
                  <Radio value={aaa_L2} onChange={setAAA_L2} title={titelAAA_L2} auswahl={auswahlAAA_L2} />
                  <InputFreitext
                     value={AAA_L2_Freitext}
                     onChange={setAAA_L2_Freitext}
                     title={titelAAA_L2 + " (Freitext)"}
                     placeholder={aaa_L2 === "Lautersetzungen / -auslassungen (phonologisch)" ? "Prozesse" : "betroffene Laute"}
                     width="w-8/12"
                  />
                  <Radio value={aan_L2} onChange={setAAN_L2} title={titelAAN_L2} auswahl={auswahlAAN_L2} />
                  <Radio value={pIIs_L2} onChange={setPIIS_L2} title={titelPIIS_L2} auswahl={auswahlPIIS_L2} />
                  {pIIs_L2 === "Phonetisch / Phonologische Abweichungen (Prozesse s.u.)" && (
                     <InputFreitext
                        value={PIIS_L2_Freitext}
                        onChange={setPIIS_L2_Freitext}
                        title={titelPIIS_L2 + " (Freitext)"}
                        placeholder="Beispiel: Vorverlagerung /sch/ (phonologische Störung)"
                        width="w-8/12"
                     />
                  )}
                  <Radio value={rwka_L2} onChange={setRWKA_L2} title={titelRWKA_L2} auswahl={auswahlRWKA_L2} />
                  <Radio value={rwf_L2} onChange={setRWF_L2} title={titelRWF_L2} auswahl={auswahlRWF_L2} />
                  <Radio value={rwa_L2} onChange={setRWA_L2} title={titelRWA_L2} auswahl={auswahlRWA_L2} />
                  <Radio value={ewau_L2} onChange={setEWAU_L2} title={titelEWAU_L2} auswahl={auswahlEWAU_L2} />
                  <Radio value={ewda_L2} onChange={setEWDA_L2} title={titelEWDA_L2} auswahl={auswahlEWDA_L2} />
                  <Radio value={ss_L2} onChange={setSS_L2} title={titelSS_L2} auswahl={auswahlSS_L2} />
                  <Radio value={mg_L2} onChange={setMG_L2} title={titelMG_L2} auswahl={auswahlMG_L2} />
                  <Radio value={mn_L2} onChange={setMN_L2} title={titelMN_L2} auswahl={auswahlMN_L2} />
                  <Radio value={mk_L2} onChange={setMK_L2} title={titelMK_L2} auswahl={auswahlMK_L2} />
                  <Radio value={mp_L2} onChange={setMP_L2} title={titelMP_L2} auswahl={auswahlMP_L2} />
                  <Radio value={pdss_L2} onChange={setPDSS_L2} title={titelPDSS_L2} auswahl={auswahlPDSS_L2} />
                  <Radio value={ppe_L2} onChange={setPPE_L2} title={titelPPE_L2} auswahl={auswahlPPE_L2} />
                  {ppe_L2 === "durchgeführt (Testergebnisse s.u.)" && (
                     <InputFreitext value={PPE_L2_Freitext} onChange={setPPE_L2_Freitext} title={titelPPE_L2 + " (Freitext)"} placeholder="Testergebnisse" />
                  )}
                  <Radio value={sle_L2} onChange={setSLE_L2} title={titelSLE_L2} auswahl={auswahlSLE_L2} />
                  {sle_L2 === "durchgeführt (Testergebnisse s.u.)" && (
                     <InputFreitext value={SLE_L2_Freitext} onChange={setSLE_L2_Freitext} title={titelSLE_L2 + " (Freitext)"} placeholder="Testergebnisse" />
                  )}
                  <Radio value={sme_L2} onChange={setSME_L2} title={titelSME_L2} auswahl={auswahlSME_L2} />
                  {sme_L2 === "durchgeführt (Testergebnisse s.u.)" && (
                     <InputFreitext value={SME_L2_Freitext} onChange={setSME_L2_Freitext} title={titelSME_L2 + " (Freitext)"} placeholder="Testergebnisse" />
                  )}
                  <Radio value={rs_L2} onChange={setRS_L2} title={titelRS_L2} auswahl={auswahlRS_L2} />
                  <Radio value={rp_L2} onChange={setRP_L2} title={titelRP_L2} auswahl={auswahlRP_L2} />
               </Hauptblock>
            )}
            <Hauptblock text="Stimmgebung">
               <Radio value={stimmgebung} onChange={setStimmgebung} title={titelStimmgebung} auswahl={auswahlStimmgebung} />
            </Hauptblock>
            <Hauptblock text="Medienkonsum">
               <Radio value={medienkonsum} onChange={setMedienkonsum} title={titelMedienkonsum} auswahl={auswahlMedienkonsum} />
               <InputFreitext
                  value={MedienkonsumFreitext}
                  onChange={setMedienkonsumFreitext}
                  title={titelMedienkonsum + " (Freitext)"}
                  placeholder="Beispiel: drei Stunden"
               />
               <Radio value={mff} onChange={setMFF} title={titelMFF} auswahl={auswahlMFF} />
               <Radio value={mst} onChange={setMST} title={titelMST} auswahl={auswahlMST} />
               <Radio value={mag} onChange={setMAG} title={titelMAG} auswahl={auswahlMAG} />
               <Radio value={msk} onChange={setMSK} title={titelMSK} auswahl={auswahlMSK} />
               <Radio value={mbb} onChange={setMBB} title={titelMBB} auswahl={auswahlMBB} />
               <Radio value={mlc} onChange={setMLC} title={titelMLC} auswahl={auswahlMLC} />
            </Hauptblock>
            <Hauptblock text="Sonstiges">
               <Radio value={winf} onChange={setWInf} title={titelWInf} auswahl={auswahlWInf} />
               {winf === "Freitext eingeben..." && (
                  <InputFreitext
                     type="textarea"
                     value={WInfFreitext}
                     onChange={setWInfFreitext}
                     title={titelWInf + " (Freitext)"}
                     placeholder="Weitere Informationen, Erwartungen / Fragen, familiäre Disposition, Hörf., erste Wörter, Kontakt zu Bekannten / Unbekannten"
                     width="w-10/12"
                  />
               )}
            </Hauptblock>
            <Hauptblock text="Fazit">
               <Radio value={ifl} onChange={setIfL} title={titelIfL} auswahl={auswahlIfL} />
               <Radio value={wiedervorstellung} onChange={setWiedervorstellung} title={titelWiedervorstellung} auswahl={auswahlWiedervorstellung} />
               <Radio value={krf} onChange={setKRF} title={titelKRF} auswahl={auswahlKRF} />
               <Radio value={lb} onChange={setLB} title={titelLB} auswahl={auswahlLB} />
            </Hauptblock>
            <Hauptblock text="Ziele der Therapie">
               <Radio value={zielKomf} onChange={setZielKomF} title={titelZielKomF} auswahl={auswahlZielKomF} />
               <Radio value={zielBvs} onChange={setZielBvS} title={titelZielBvS} auswahl={auswahlZielBvS} />
               <Radio value={zielSpf} onChange={setZielSpF} title={titelZielSpF} auswahl={auswahlZielSpF} />
               <Radio value={zielRew} onChange={setZielREW} title={titelZielREW} auswahl={auswahlZielREW} />
               <Radio value={zielGf} onChange={setZielGF} title={titelZielGF} auswahl={auswahlZielGF} />
               <Radio value={zielAussprache} onChange={setZielAussprache} title={titelZielAussprache} auswahl={auswahlZielAussprache} />
               <Radio value={zielAW} onChange={setZielAW} title={titelZielAW} auswahl={auswahlZielAW} />
               <Radio value={zielOT} onChange={setZielOT} title={titelZielOT} auswahl={auswahlZielOT} />
               <Radio value={zielOW} onChange={setZielOW} title={titelZielOW} auswahl={auswahlZielOW} />
               <Radio value={zielOF} onChange={setZielOF} title={titelZielOF} auswahl={auswahlZielOF} />
            </Hauptblock>
         </div>

         <Ausgabebereich ausgabe={ausgabe} resetAll={resetAll} />
      </div>
   );
};

export default App;

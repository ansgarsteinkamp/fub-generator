// Überschrift hinzufügen
ausgabe += `\nTestergebnisse PDSS (Kauschke & Siegmüller)\n`;

// Testergebnisse PDSS (Kauschke & Siegmüller)
const XXXXX = ["anteilig durchgeführt", "[ keine Angabe ]"];
ausgabe += ` `; // Leerzeichen hinzufügen

if (XXXXX) {
   switch (XXXXX) {
      case "anteilig durchgeführt":
         ausgabe += `Es wurden ausgewählte Untertests der Diagnostik durchgeführt.`;
         break;
      case "[ keine Angabe ]":
         ausgabe += ``;
         break;
   }
}

// Achtung offene Fragestellung
// Frage an dich: "Freitext eingeben..." als case ODER "durchgeführt (Testergebnisse s.u.)"?, bezieht sich auf alle mit "Ebene"

// Phonetisch-phonologische Ebene
const XXXXX = ["Freitext eingeben...", "nicht durchgeführt"];
ausgabe += ` `; // Leerzeichen hinzufügen

if (XXXXX) {
   switch (XXXXX) {
      case "durchgeführt (Testergebnisse s.u.)":
         ausgabe += `\nPhonetisch-phonologische Ebene: ${Freitext}.`; // Placeholder: Testergebnisse
         break;
      case "nicht durchgeführt":
         ausgabe += ``;
         break;
   }
}

// Semantisch-lexikalische Ebene
const XXXXX = ["Freitext eingeben...", "nicht durchgeführt"];
ausgabe += ` `; // Leerzeichen hinzufügen

if (XXXXX) {
   switch (XXXXX) {
      case "durchgeführt (Testergebnisse s.u.)":
         ausgabe += `\nSemantisch-lexikalische Ebene: ${Freitext}.`; // Placeholder: Testergebnisse
         break;
      case "nicht durchgeführt":
         ausgabe += ``;
         break;
   }
}

// Syntaktisch-morphologische Ebene
const XXXXX = ["Freitext eingeben...", "nicht durchgeführt"];
ausgabe += ` `; // Leerzeichen hinzufügen

if (XXXXX) {
   switch (XXXXX) {
      case "durchgeführt (Testergebnisse s.u.)":
         ausgabe += `\nSyntaktisch-morphologische Ebene: ${Freitext}.\n`; // Placeholder: Testergebnisse
         break;
      case "nicht durchgeführt":
         ausgabe += ``;
         break;
   }
}

// Redefluss (Stottern)
const XXXXX = ["nicht unterbrochen", "Wiederholungen", "Dehnungen", "Blockaden"];
ausgabe += ` `; // Leerzeichen hinzufügen

if (XXXXX) {
   switch (XXXXX) {
      case "nicht unterbrochen":
         ausgabe += ``;
         break;
      case "Wiederholungen":
         ausgabe += `Der Redefluss war unterbrochen. Beim Sprechen zeigten sich Unflüssigkeiten in Form von Wiederholungen.`;
         break;
      case "Dehnungen":
         ausgabe += `Der Redefluss war unterbrochen. Beim Sprechen zeigten sich Unflüssigkeiten in Form von Dehnungen.`;
         break;
      case "Blockaden":
         ausgabe += `Der Redefluss war unterbrochen. Beim Sprechen zeigten sich Unflüssigkeiten in Form von Blockaden.`;
         break;
   }
}

// Redefluss (Poltern)
const XXXXX = [
   "nicht verändert",
   "Auslassungen / Verschmelzungen / Lautersetzungen und -veränderungen gehäuft",
   "Laut-, Silben-, Wort- und Satzteilwiederholungen",
   "erhöhtes Sprechtempo"
];
ausgabe += ` `; // Leerzeichen hinzufügen

if (XXXXX) {
   switch (XXXXX) {
      case "nicht verändert":
         ausgabe += ``;
         break;
      case "Auslassungen / Verschmelzungen / Lautersetzungen und -veränderungen gehäuft":
         ausgabe += `Der Redefluss war verändert. Beim Sprechen zeigten sich gehäuft Auslassungen und Verschmelzungen von Lauten und Silben, sowie Lautersetzungen und -veränderungen bei erhöhter und / oder irregulärer Artikulationsrate.`;
         break;
      case "Laut-, Silben-, Wort- und Satzteilwiederholungen":
         ausgabe += `Der Redefluss war unterbrochen. Es traten Unflüssigkeiten in Form von Laut-, Silben-, Wort- und Satzteilwiederholungen.`;
         break;
      case "erhöhtes Sprechtempo":
         ausgabe += `Der Redefluss war verändert. ${Sein_Ihr} Sprechtempo war erhöht und / oder irregulär.`;
         break;
   }
}

// Überschrift hinzufügen
ausgabe += `\nStimmgebung\n`;

//Stimmgebung
const XXXXX = ["unauffällig", "hoch", "tief", "verhaucht / heiser"];
ausgabe += ` `; // Leerzeichen hinzufügen

if (XXXXX) {
   switch (XXXXX) {
      case "unauffällig":
         ausgabe += ``;
         break;
      case "hoch":
         ausgabe += `Die Stimmgebung von ${vorname} war auffällig, da die Stimme ungewöhnlich hoch klang.`;
         break;
      case "tief":
         ausgabe += `Die Stimmgebung von ${vorname} war auffällig, da die Stimme ungewöhnlich tief klang.`;
         break;
      case "verhaucht / heiser":
         ausgabe += `Die Stimmgebung von ${vorname} war auffällig, da die Stimme verhaucht / heiser klang.`;
         break;
   }
}

// Überschrift hinzufügen
ausgabe += `\nMedienkonsum\n`;

// Medienkonsum: Dauer
const XXXXX = ["angemessen", "erhöht", "Freitext eingeben..."];
ausgabe += ` `; // Leerzeichen hinzufügen

if (XXXXX) {
   switch (XXXXX) {
      case "angemessen (< 1 Std. / Tag, Gesamtnutzungsdauer s.u.)":
         ausgabe += `In Bezug auf ${sein_ihr} Alter war der Medienkonsum angemessen (Gesamtnutzungsdauer aller Medien pro Tag: ${Freitext}).`; // Placeholder: Gesamtnutzungsdauer aller Medien pro Tag
         break;
      case "erhöht (> 1 Std. / Tag, Gesamtnutzungsdauer s.u.)":
         ausgabe += `In Bezug auf ${sein_ihr} Alter war der Medienkonsum erhöht (Gesamtnutzungsdauer aller Medien pro Tag: ${Freitext}).`; // Placeholder: Gesamtnutzungsdauer aller Medien pro Tag
         break;
   }
}

// Achtung offene Fragestellung
// Art der Medien (Mehrfachnennung) sollen nur hintereinander aufgelistet werden, eigentlich nicht überall komplette Sätze in ausgabe

// Medienkonsum: Art der Medien
const XXXXX = ["Fernsehen / Filme", "[ keine Angabe ]"];
ausgabe += ` `; // Leerzeichen hinzufügen
ausgabe += `Art der Medien: `;

if (XXXXX) {
   switch (XXXXX) {
      case "Fernsehen / Filme":
         ausgabe += `Fersehsendungen und -filme, `;
         break;
      case "[ keine Angabe ]":
         ausgabe += ``;
         break;
   }
}

// Medienkonsum: Art der Medien
const XXXXX = ["Smartphone / Tablet", "[ keine Angabe ]"];
ausgabe += ` `; // Leerzeichen hinzufügen

if (XXXXX) {
   switch (XXXXX) {
      case "Smartphone / Tablet":
         ausgabe += `Smartphone / Tablet, `;
         break;
      case "[ keine Angabe ]":
         ausgabe += ``;
         break;
   }
}

// Medienkonsum: Art der Medien
const XXXXX = ["Audiogerät", "[ keine Angabe ]"];
ausgabe += ` `; // Leerzeichen hinzufügen

if (XXXXX) {
   switch (XXXXX) {
      case "Audiogerät":
         ausgabe += `Audiogerät (Hörbücher und / oder Lieder), `;
         break;
      case "[ keine Angabe ]":
         ausgabe += ``;
         break;
   }
}

// Medienkonsum: Art der Medien
const XXXXX = ["Spielekonsole", "[ keine Angabe ]"];
ausgabe += ` `; // Leerzeichen hinzufügen

if (XXXXX) {
   switch (XXXXX) {
      case "Spielekonsole":
         ausgabe += `Spielekonsole, `;
         break;
      case "[ keine Angabe ]":
         ausgabe += ``;
         break;
   }
}

// Medienkonsum: Art der Medien
const XXXXX = ["Bilderbücher", "[ keine Angabe ]"];
ausgabe += ` `; // Leerzeichen hinzufügen

if (XXXXX) {
   switch (XXXXX) {
      case "Bilderbücher":
         ausgabe += `Bilderbücher, `;
         break;
      case "[ keine Angabe ]":
         ausgabe += ``;
         break;
   }
}

// Medienkonsum: Art der Medien
const XXXXX = ["Lerncomputer", "[ keine Angabe ]"];
ausgabe += ` `; // Leerzeichen hinzufügen

if (XXXXX) {
   switch (XXXXX) {
      case "Lerncomputer":
         ausgabe += `Lerncomputer, `;
         break;
      case "[ keine Angabe ]":
         ausgabe += ``;
         break;
   }
}

// Hier muss das letzte ", " entfernt werden.

// Überschrift hinzufügen
ausgabe += `\nSonstiges\n`;

// Weitere Informationen
const xxxxxxx = ["Freitext eingeben...", "[ keine Angabe ]"];
ausgabe += ` `; // Leerzeichen hinzufügen

if (xxxxxxx) {
   switch (xxxxxxx) {
      case "Freitext eingeben...":
         ausgabe += `${Freitext}`; // Placeholder: Weitere Informationen
         break;
      case "[ keine Angabe ]":
         ausgabe += ``;
         break;
   }
}

// Erwartungen / Fragen
const xxxxxxx = ["Freitext eingeben...", "[ keine Angabe ]"];
ausgabe += ` `; // Leerzeichen hinzufügen

if (xxxxxxx) {
   switch (xxxxxxx) {
      case "Freitext eingeben...":
         ausgabe += `${Freitext}`; // Placeholder: Erwartungen / Fragen
         break;
      case "[ keine Angabe ]":
         ausgabe += ``;
         break;
   }
}

// Überschrift hinzufügen
ausgabe += `\nFazit / Ziele der Therapie\n`;

// Indikation für Logopädie
const xxxxxxx = [
   "indiziert (mit Testergebnissen)",
   "indiziert (ohne Testergebnisse)",
   "nicht indiziert (mit Testergebnissen)",
   "nicht indiziert (ohne Testergebnisse)"
];
ausgabe += ` `; // Leerzeichen hinzufügen

if (XXXXXXX) {
   switch (XXXXXXX) {
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
const XXXXX = ["ja", "[ keine Angabe ]"];
ausgabe += ` `; // Leerzeichen hinzufügen

if (XXXXX) {
   switch (XXXXX) {
      case "ja":
         ausgabe += `Eine Wiedervorstellung in unserer Einrichtung oder in einer logopädischen Praxis wird angeraten.`;
         break;
      case "[ keine Angabe ]":
         ausgabe += ``;
         break;
   }
}

// Kontrolluntersuchung im Rahmen der Frühförderung
const XXXXX = ["ja", "[ keine Angabe ]"];
ausgabe += ` `; // Leerzeichen hinzufügen

if (XXXXX) {
   switch (XXXXX) {
      case "ja":
         ausgabe += `Die Durchführung einer erneuten logopädischen Diagnostik erscheint im Rahmen der Frühförderung sinnvoll.`;
         break;
      case "[ keine Angabe ]":
         ausgabe += ``;
         break;
   }
}

// Logopädische Begleitung
const XXXXX = ["ja", "[ keine Angabe ]"];
ausgabe += ` `; // Leerzeichen hinzufügen

if (XXXXX) {
   switch (XXXXX) {
      case "ja":
         ausgabe += `Eine logopädische Begleitung ${seiner_ihrer} Sprachentwicklung in größeren, zeitlichen Abständen mit wenigen Therapieeinheiten erscheint ratsam ("watchful waiting").`;
         break;
      case "[ keine Angabe ]":
         ausgabe += ``;
         break;
   }
}

// Noch keine Lösung gefunden für:
// Ziele der Logopädie
ausgabe += `Ziele der Therapie: `;

// Ziele der Logopädie
const xxxxxxx = ["Kommunikative Fähigkeiten", "[ keine Angabe ]"];
ausgabe += ` `; // Leerzeichen hinzufügen

if (xxxxxxx) {
   switch (xxxxxxx) {
      case "Kommunikative Fähigkeiten":
         ausgabe += `Verbesserung der kommunikativen Fähigkeiten (u.a. dialogischer / triangulärer Blickkontakt, TurnTaking, Imitation, Gestik), `;
         break;
      case "[ keine Angabe ]":
         ausgabe += ``;
         break;
   }
}

// Ziele der Logopädie
const xxxxxxx = ["Bedeutung von Sprache", "[ keine Angabe ]"];
ausgabe += ` `; // Leerzeichen hinzufügen

if (xxxxxxx) {
   switch (xxxxxxx) {
      case "Bedeutung von Sprache":
         ausgabe += `Erkennen der Bedeutung von Sprache, `;
         break;
      case "[ keine Angabe ]":
         ausgabe += ``;
         break;
   }
}

// Ziele der Logopädie
const xxxxxxx = ["Sprechfreude", "[ keine Angabe ]"];
ausgabe += ` `; // Leerzeichen hinzufügen

if (xxxxxxx) {
   switch (xxxxxxx) {
      case "Sprechfreude":
         ausgabe += `Steigerung der Sprechfreude, `;
         break;
      case "[ keine Angabe ]":
         ausgabe += ``;
         break;
   }
}

// Ziele der Logopädie
const xxxxxxx = ["Rezeptiver / Expressiver Wortschatz", "[ keine Angabe ]"];
ausgabe += ` `; // Leerzeichen hinzufügen

if (xxxxxxx) {
   switch (xxxxxxx) {
      case "Rezeptiver / Expressiver Wortschatz":
         ausgabe += `Erweiterung des rezeptiven und expressiven Wortschatzes, `;
         break;
      case "[ keine Angabe ]":
         ausgabe += ``;
         break;
   }
}

// Ziele der Logopädie
const xxxxxxx = ["Grammatikalische Fähigkeiten", "[ keine Angabe ]"];
ausgabe += ` `; // Leerzeichen hinzufügen

if (xxxxxxx) {
   switch (xxxxxxx) {
      case "Grammatikalische Fähigkeiten":
         ausgabe += `Verbesserung der grammatikalischen Fähigkeiten, `;
         break;
      case "[ keine Angabe ]":
         ausgabe += ``;
         break;
   }
}

// Ziele der Logopädie
const xxxxxxx = ["Aussprache", "[ keine Angabe ]"];
ausgabe += ` `; // Leerzeichen hinzufügen

if (xxxxxxx) {
   switch (xxxxxxx) {
      case "Aussprache":
         ausgabe += `Verbesserung der Aussprache, `;
         break;
      case "[ keine Angabe ]":
         ausgabe += ``;
         break;
   }
}

// Ziele der Logopädie
const xxxxxxx = ["Auditive Wahrnehmung", "[ keine Angabe ]"];
ausgabe += ` `; // Leerzeichen hinzufügen

if (xxxxxxx) {
   switch (xxxxxxx) {
      case "Auditive Wahrnehmung":
         ausgabe += `Verbesserung der auditiven Wahrnehmung, `;
         break;
      case "[ keine Angabe ]":
         ausgabe += ``;
         break;
   }
}

// Ziele der Logopädie
const xxxxxxx = ["Orofazialer Tonus", "[ keine Angabe ]"];
ausgabe += ` `; // Leerzeichen hinzufügen

if (xxxxxxx) {
   switch (xxxxxxx) {
      case "Orofazialer Tonus":
         ausgabe += `Regulation des orofazialen Tonus, `;
         break;
      case "[ keine Angabe ]":
         ausgabe += ``;
         break;
   }
}

// Ziele der Logopädie
const xxxxxxx = ["Orofaziale Wahrnehmung", "[ keine Angabe ]"];
ausgabe += ` `; // Leerzeichen hinzufügen

if (xxxxxxx) {
   switch (xxxxxxx) {
      case "Orofaziale Wahrnehmung":
         ausgabe += `Sensibilisierung der orofazialen Wahrnehmung, `;
         break;
      case "[ keine Angabe ]":
         ausgabe += ``;
         break;
   }
}

// Ziele der Logopädie
const xxxxxxx = ["Orofaziale Fähigkeiten", "[ keine Angabe ]"];
ausgabe += ` `; // Leerzeichen hinzufügen

if (xxxxxxx) {
   switch (xxxxxxx) {
      case "Orofaziale Fähigkeiten":
         ausgabe += `Verbesserung der orofazialen Fähigkeiten, `;
         break;
      case "[ keine Angabe ]":
         ausgabe += ``;
         break;
   }
}

// Hier muss das letzte ", " entfernt werden.

// ###
// ###  Bis hierhin ist alles fertig!
// ###
// ##################################

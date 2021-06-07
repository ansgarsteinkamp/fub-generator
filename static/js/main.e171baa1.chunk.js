(this["webpackJsonpfub-generator"]=this["webpackJsonpfub-generator"]||[]).push([[0],{11:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(4),l=a.n(i),s=(a(11),a(2)),r=a(1),o=function(e){return Object(n.useEffect)((function(){e.value&&localStorage.setItem(e.title,e.value)}),[e.title,e.value]),Object(r.jsxs)("div",{className:"mt-3 mx-4",children:[Object(r.jsx)("label",{htmlFor:e.title,className:"text-gray-500 text-sm font-bold",children:e.title}),Object(r.jsx)("div",{className:"mt-1",children:Object(r.jsx)("input",{onChange:function(t){return e.onChange(t.target.value)},value:e.value,type:"text",id:e.title,className:"text-gray-700 text-sm py-1 px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"})})]})},u=function(e){return Object(n.useEffect)((function(){e.value&&localStorage.setItem(e.title,e.value)}),[e.title,e.value]),Object(r.jsx)("input",{onChange:function(t){return e.onChange(t.target.value)},value:e.value,type:"text",id:e.title,className:"text-gray-700 text-sm italic py-1 px-2 ml-11 mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"})},h=a(3),g=function(e){return Object(n.useEffect)((function(){e.value&&localStorage.setItem(e.title,e.value)}),[e.title,e.value]),Object(r.jsxs)(h.a,{className:"mt-3 mx-4",value:e.value,onChange:e.onChange,children:[Object(r.jsx)(h.a.Label,{className:"text-gray-500 text-sm font-bold",children:e.title}),Object(r.jsx)("div",{className:"mt-1 space-y-1",children:e.auswahl.map((function(e){return Object(r.jsx)(h.a.Option,{value:e,className:"ml-1 flex items-center",children:function(t){var a=t.active,n=t.checked;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("span",{className:"\n                            ".concat(n?"bg-indigo-600 border-transparent":"bg-white border-gray-300","\n                            ").concat(a?"ring-2 ring-offset-2 ring-indigo-500":"","\n                            h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center"),children:Object(r.jsx)("span",{className:"rounded-full bg-white w-1.5 h-1.5"})}),Object(r.jsx)(h.a.Label,{as:"span",className:"text-gray-700 text-sm ml-2",children:e})]})}},e)}))})]})},b=a(6),d=function(e){return Object(r.jsxs)("div",{className:"relative",children:[Object(r.jsx)("textarea",{readOnly:!0,value:e.ausgabe,rows:"5",className:"text-xs h-full w-full pl-5 pr-3 py-14 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block border-gray-300 rounded-md"}),Object(r.jsxs)("div",{className:"absolute top-4 flex justify-between w-full",children:[Object(r.jsx)(b.CopyToClipboard,{text:e.ausgabe,children:Object(r.jsx)("button",{className:"rounded-full bg-green-200 hover:bg-green-400 p-1 ml-4",children:Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"text-gray-400 h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})})})}),Object(r.jsx)("button",{className:"rounded-full bg-red-200 hover:bg-red-400 p-1 mr-4",onClick:e.resetAll,children:Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"text-gray-400 h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]})]})},j=function(e){return Object(r.jsxs)(n.Fragment,{children:[Object(r.jsxs)("div",{onClick:e.onToggle,className:"text-gray-500 font-bold mt-6 px-4 py-2 bg-gray-200 flex justify-between",children:[Object(r.jsx)("h1",{children:e.text}),e.onToggle&&!e.show&&Object(r.jsx)("button",{children:Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor",children:Object(r.jsx)("path",{fillRule:"evenodd",d:"M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),e.onToggle&&e.show&&Object(r.jsx)("button",{children:Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor",children:Object(r.jsx)("path",{fillRule:"evenodd",d:"M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z",clipRule:"evenodd"})})})]}),(!e.onToggle||e.show)&&e.children]})},k=0,f=++k+".) Vorname",m=++k+".) Geschlecht",w=++k+".) Begleitet von",O=++k+".) Blickkontakt",v=++k+".) Spielverhalten",x=++k+".) Spielformen",S=++k+".) Konzentrationsf\xe4higkeit und Aufmerksamkeitslenkung",p=++k+".) Reaktion auf Ansprache",C=++k+".) Reaktion auf Ger\xe4usche",I=++k+".) Lokalisation und Identifikation von Ger\xe4uschen",A=++k+".) Auditive Merkspanne",z=++k+".) Orofazialer Tonus",y=++k+".) Mundschluss",N=++k+".) Speichelfluss",L=++k+".) Pusten",F=++k+".) Ansaugen",E=++k+".) Zungenruhelage",M=++k+".) Zungenbeweglichkeit und -koordination",K=++k+".) Lippenbeweglichkeit und -koordination",D=++k+".) Ess- und Trinkverhalten",T=++k+".) Konsistenzen der Kost",B=++k+".) Orale Habits",G=++k+".) Schnuller",J=++k+".) Trinkflasche mit Sauger",P=++k+".) Daumenlutschen",H=++k+".) Fingern\xe4gelkauen",R=function(){var e=Object(n.useState)(localStorage.getItem(f)||""),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(localStorage.getItem(m)),l=Object(s.a)(i,2),h=l[0],b=l[1],k=Object(n.useState)(localStorage.getItem(w)),R=Object(s.a)(k,2),V=R[0],Z=R[1],W=Object(n.useState)(localStorage.getItem(O)),U=Object(s.a)(W,2),q=U[0],Q=U[1],X=Object(n.useState)(localStorage.getItem(v)),Y=Object(s.a)(X,2),$=Y[0],_=Y[1],ee=Object(n.useState)(localStorage.getItem(x)),te=Object(s.a)(ee,2),ae=te[0],ne=te[1],ce=Object(n.useState)(localStorage.getItem(S)),ie=Object(s.a)(ce,2),le=ie[0],se=ie[1],re=Object(n.useState)(localStorage.getItem(p)),oe=Object(s.a)(re,2),ue=oe[0],he=oe[1],ge=Object(n.useState)(localStorage.getItem(C)),be=Object(s.a)(ge,2),de=be[0],je=be[1],ke=Object(n.useState)(localStorage.getItem(I)),fe=Object(s.a)(ke,2),me=fe[0],we=fe[1],Oe=Object(n.useState)(localStorage.getItem(A)),ve=Object(s.a)(Oe,2),xe=ve[0],Se=ve[1],pe=Object(n.useState)(localStorage.getItem(z)),Ce=Object(s.a)(pe,2),Ie=Ce[0],Ae=Ce[1],ze=Object(n.useState)(localStorage.getItem(y)),ye=Object(s.a)(ze,2),Ne=ye[0],Le=ye[1],Fe=Object(n.useState)(localStorage.getItem(N)),Ee=Object(s.a)(Fe,2),Me=Ee[0],Ke=Ee[1],De=Object(n.useState)(localStorage.getItem(L)),Te=Object(s.a)(De,2),Be=Te[0],Ge=Te[1],Je=Object(n.useState)(localStorage.getItem(F)),Pe=Object(s.a)(Je,2),He=Pe[0],Re=Pe[1],Ve=Object(n.useState)(localStorage.getItem(E)),Ze=Object(s.a)(Ve,2),We=Ze[0],Ue=Ze[1],qe=Object(n.useState)(localStorage.getItem(M)),Qe=Object(s.a)(qe,2),Xe=Qe[0],Ye=Qe[1],$e=Object(n.useState)(localStorage.getItem(K)),_e=Object(s.a)($e,2),et=_e[0],tt=_e[1],at=Object(n.useState)(localStorage.getItem(D)),nt=Object(s.a)(at,2),ct=nt[0],it=nt[1],lt=Object(n.useState)(localStorage.getItem(T)),st=Object(s.a)(lt,2),rt=st[0],ot=st[1],ut=Object(n.useState)(localStorage.getItem(B)),ht=Object(s.a)(ut,2),gt=ht[0],bt=ht[1],dt=Object(n.useState)(localStorage.getItem(G)),jt=Object(s.a)(dt,2),kt=jt[0],ft=jt[1],mt=Object(n.useState)(localStorage.getItem(J)),wt=Object(s.a)(mt,2),Ot=wt[0],vt=wt[1],xt=Object(n.useState)(localStorage.getItem(P)),St=Object(s.a)(xt,2),pt=St[0],Ct=St[1],It=Object(n.useState)(localStorage.getItem(H)),At=Object(s.a)(It,2),zt=At[0],yt=At[1],Nt=Object(n.useState)(localStorage.getItem(w+" (Freitext)")||""),Lt=Object(s.a)(Nt,2),Ft=Lt[0],Et=Lt[1],Mt=Object(n.useState)(localStorage.getItem(T+" (Freitext)")||""),Kt=Object(s.a)(Mt,2),Dt=Kt[0],Tt=Kt[1],Bt=Object(n.useState)(localStorage.getItem(G+" (Freitext)")||""),Gt=Object(s.a)(Bt,2),Jt=Gt[0],Pt=Gt[1],Ht=Object(n.useState)(!0),Rt=Object(s.a)(Ht,2),Vt=Rt[0],Zt=Rt[1],Wt="Junge"===h?"Er":"Sie",Ut="Junge"===h?"er":"sie",qt="Junge"===h?"Sein":"Ihr",Qt="Junge"===h?"Seine":"Ihre",Xt="Junge"===h?"ihm":"ihr",Yt="Junge"===h?"seiner":"ihrer",$t="Junge"===h?"seinem":"ihrem",_t="Junge"===h?"seinen":"ihren",ea="";if(V&&a)switch(V){case"Mutter":ea+="".concat(a," wurde von ").concat(Yt," Mutter begleitet.");break;case"Vater":ea+="".concat(a," wurde von ").concat($t," Vater begleitet.");break;case"Eltern":ea+="".concat(a," wurde von ").concat(_t," Eltern begleitet.");break;case"Pflegemutter":ea+="".concat(a," wurde von ").concat(Yt," Pflegemutter begleitet.");break;case"Pflegevater":ea+="".concat(a," wurde von ").concat($t," Pflegevater begleitet.");break;case"Pflegeeltern":ea+="".concat(a," wurde von ").concat(_t," Pflegeeltern begleitet.");break;case"Familienhelferin":ea+="".concat(a," wurde von ").concat(Yt," Familienhelferin begleitet.");break;case"Familienhelfer":ea+="".concat(a," wurde von ").concat($t," Familienhelfer begleitet.");break;case"begleitet von...":ea+="".concat(a," wurde von ").concat(Ft," begleitet.");break;default:ea+=""}if(q)switch(ea+="\n\n",q){case"dialogisch":ea+="".concat(Wt," zeigte einen dialogischen Blickkontakt.");break;case"dialogisch und triangul\xe4r":ea+="".concat(Wt," zeigte einen dialogischen und triangul\xe4ren Blickkontakt.");break;case"kein Blickkontakt":ea+="".concat(Wt," nahm noch keinen Blickkontakt auf.");break;default:ea+=""}if($)switch(ea+="\n\n",$){case"wechselhaft":ea+="".concat(qt," Spielverhalten war wechselhaft.");break;case"ausdauernd":ea+="".concat(qt," Spielverhalten war ausdauernd.");break;case"kein Spielverhalten":ea+="Mit dem Spielmaterial konnte ".concat(Ut," sich noch nicht allein besch\xe4ftigen.");break;default:ea+=""}if(ae)switch(ea+=" ",ae){case"Funktionsspiel":ea+="Das Spiel war funktionsorientiert.";break;case"Symbolspiel":ea+="Es war ein Symbolspiel zu beobachten.";break;default:ea+=""}if(le)switch(ea+=" ",le){case"angemessen":ea+="Die Konzentrationsf\xe4higkeit und Aufmerksamkeitslenkung waren angemessen.";break;case"nicht angemessen":ea+="Die Konzentrationsf\xe4higkeit und Aufmerksamkeitslenkung waren noch nicht angemessen.";break;default:ea+=""}if(ue)switch(ea+="\n\n",ue){case"reagiert":ea+="Auf Ansprache reagierte ".concat(a,".");break;case"reagiert nicht":ea+="Auf Ansprache reagierte ".concat(a," nicht.");break;default:ea+=""}if(de)switch(ea+=" ",de){case"reagiert":ea+="Ger\xe4usche in ".concat(Yt," Umgebung nahm ").concat(Ut," wahr.");break;case"reagiert nicht":ea+="Ger\xe4usche in ".concat(Yt," Umgebung nahm ").concat(Ut," nicht wahr.");break;default:ea+=""}if(me)switch(ea+=" ",me){case"sicher":ea+="Die Lokalisation und Identifikation von Ger\xe4uschen gelang ".concat(Xt," sicher.");break;case"nicht ausreichend zu beurteilen":ea+="".concat(Qt," F\xe4higkeit zur Lokalisation und Identifikation von Ger\xe4uschen konnte noch nicht ausreichend beurteilt werden.");break;case"nur Identifikation sicher":ea+="".concat(a," identifizierte Ger\xe4usche sicher. ").concat(Qt," F\xe4higkeit zur Lokalisation von Ger\xe4uschen war aber noch nicht ausreichend zu beurteilen.");break;case"nur Lokalisation sicher":ea+="Die Lokalisation von Ger\xe4uschen gelang ".concat(a," sicher. ").concat(Qt," F\xe4higkeit zur Identifikation von Ger\xe4uschen allerdings noch nicht.");break;default:ea+=""}if(xe)switch(ea+=" ",xe){case"altersentsprechend":ea+="Die auditive Merkspanne war altersentsprechend.";break;case"nicht altersentsprechend":ea+="Die auditive Merkspanne war noch nicht altersentsprechend.";break;default:ea+=""}if(Ie)switch(ea+="\n\n",Ie){case"reguliert":ea+="Der orofaziale Tonus erschien ausreichend reguliert.";break;case"nicht ausreichend reguliert":ea+="Der orofaziale Tonus erschien noch nicht ausreichend reguliert.";break;default:ea+=""}if(Ne)switch(ea+=" ",Ne){case"konstant":ea+="Es wurde ein konstanter Mundschluss beobachtet.";break;case"offen":ea+="Es wurde eine offene Mundhaltung beobachtet.";break;default:ea+=""}if(Me)switch(Me){case"vermehrter Speichelfluss":ea+=" ",ea+="Es trat ein vermehrter Speichelfluss auf.";break;case"[ keine Angabe ]":ea+="";break;default:ea+=""}if(Be)switch(Be){case"m\xf6glich":ea+=" ",ea+="".concat(a," pustete Seifenblasen mit dosiertem Luftstrom.");break;case"nicht m\xf6glich":ea+=" ",ea+="".concat(a," konnte noch keine Seifenblasen mit dosiertem Luftstrom pusten.");break;case"[ keine Angabe ]":ea+="";break;default:ea+=""}if(He)switch(He){case"m\xf6glich":ea+=" ",ea+="Das Ansaugen mit einem Strohhalm gelang ".concat(Xt,".");break;case"nicht m\xf6glich":ea+=" ",ea+="Das Ansaugen mit einem Strohhalm gelang ".concat(Xt," noch nicht.");break;case"[ keine Angabe ]":ea+="";break;default:ea+=""}if(We)switch(We){case"m\xf6glich":ea+=" ",ea+="".concat(Wt," konnte die Zungenruhelage einnehmen und kurz halten.");break;case"nicht m\xf6glich":ea+=" ",ea+="".concat(Wt," konnte die Zungenruhelage noch nicht einnehmen und halten.");break;case"[ keine Angabe ]":ea+="";break;default:ea+=""}if(Xe)switch(Xe){case"unauff\xe4llig":ea+=" ",ea+="Die Zungenbeweglichkeit und -koordination war unauff\xe4llig.";break;case"eingeschr\xe4nkt":ea+=" ",ea+="Die Zungenbeweglichkeit und -koordination war eingeschr\xe4nkt.";break;case"[ keine Angabe ]":ea+="";break;default:ea+=""}if(et)switch(et){case"unauff\xe4llig":ea+=" ",ea+="Eine ausreichende Lippenbeweglichkeit und -koordination war gegeben.";break;case"eingeschr\xe4nkt":ea+=" ",ea+="Die Lippenbeweglichkeit und -koordination war eingeschr\xe4nkt.";break;case"[ keine Angabe ]":ea+="";break;default:ea+=""}if(ct)switch(ea+="\n\n",ct){case"unauff\xe4llig":ea+="".concat(qt," Ess- und Trinkverhalten war unauff\xe4llig.");break;case"auff\xe4llig":ea+="".concat(qt," Ess- und Trinkverhalten war auff\xe4llig.");break;default:ea+=""}if(rt)switch(ea+=" ",rt){case"alle Konsistenzen":ea+="".concat(a," esse alle Konsistenzen (harte und weiche Kost).");break;case"v.a. weiche/breiige Kost":ea+="".concat(a," bevorzuge weiche Kost.");break;case"v.a. harte Kost":ea+="".concat(a," bevorzuge harte Kost.");break;case"[ Sonstiges ]":ea+="".concat(Dt);break;default:ea+=""}if(gt)switch(ea+="\n\n",gt){case"nicht vorhanden":ea+="Orale Habits seien nicht vorhanden.";break;case"vorhanden":ea+="Orale Habits seien vorhanden.";break;case"[ keine Angabe ]":ea+="";break;default:ea+=""}if(kt)switch(ea+=" ",kt){case"noch nie":ea+="".concat(Wt," habe noch nie einen Schnuller erhalten.");break;case"bis heute":ea+="".concat(Wt," erhalte noch einen Schnuller.");break;case"bis zum...":ea+="Bis zum ".concat(Jt," habe ").concat(Ut," einen Schnuller erhalten.");break;default:ea+=""}if(Ot)switch(Ot){case"trinkt noch aus einer":ea+=" ",ea+="".concat(Wt," trinke noch aus einer Trinkflasche mit Sauger.");break;case"[ keine Angabe ]":ea+="";break;default:ea+=""}if(pt)switch(pt){case"wird beobachtet":ea+=" ",ea+="Es werde Daumenlutschen beobachtet.";break;case"[ keine Angabe ]":ea+="";break;default:ea+=""}if(zt)switch(zt){case"wird beobachtet":ea+=" ",ea+="Es werde Fingern\xe4gelkauen beobachtet.";break;case"[ keine Angabe ]":ea+="";break;default:ea+=""}ea+="\n\n-----------------------------\n\n".concat(f,": ").concat(a||"---","\n").concat(m,": ").concat(h||"---","\n").concat(w,": ").concat("begleitet von..."!==V?V||"---":Ft,"\n").concat(O,": ").concat(q||"---","\n").concat(v,": ").concat($||"---","\n").concat(x,": ").concat(ae||"---","\n").concat(S,": ").concat(le||"---","\n").concat(p,": ").concat(ue||"---","\n").concat(C,": ").concat(de||"---","\n").concat(I,": ").concat(me||"---","\n").concat(A,": ").concat(xe||"---","\n").concat(z,": ").concat(Ie||"---","\n").concat(y,": ").concat(Ne||"---","\n").concat(N,": ").concat(Me||"---","\n").concat(L,": ").concat(Be||"---","\n").concat(F,": ").concat(He||"---","\n").concat(E,": ").concat(We||"---","\n").concat(M,": ").concat(Xe||"---","\n").concat(K,": ").concat(et||"---","\n").concat(D,": ").concat(ct||"---","\n").concat(T,": ").concat("[ Sonstiges ]"!==rt?rt||"---":Dt,"\n").concat(B,": ").concat(gt||"---","\n").concat(G,": ").concat("bis zum..."!==kt?kt||"---":"bis zum "+Jt,"\n").concat(J,": ").concat(Ot||"---","\n").concat(P,": ").concat(pt||"---","\n").concat(H,": ").concat(zt||"---");return Object(r.jsxs)("div",{className:"h-95v grid md:grid-cols-2 gap-2 md:gap-4 px-3 pt-3 pb-10 md:px-6 md:pt-6",children:[Object(r.jsxs)("div",{className:"h-full overflow-auto bg-white shadow-sm rounded-md p-3 border border-gray-300",children:[Object(r.jsxs)(j,{text:"Allgemeines",show:Vt,onToggle:function(){return Zt((function(e){return!e}))},children:[Object(r.jsx)(o,{value:a,onChange:c,title:f}),Object(r.jsx)(g,{value:h,onChange:b,title:m,auswahl:["Junge","M\xe4dchen"]}),Object(r.jsx)(g,{value:V,onChange:Z,title:w,auswahl:["Mutter","Vater","Eltern","Pflegemutter","Pflegevater","Pflegeeltern","Familienhelferin","Familienhelfer","begleitet von..."]}),"begleitet von..."===V&&Object(r.jsx)(u,{value:Ft,onChange:Et,title:w+" (Freitext)"})]}),Object(r.jsx)(j,{text:"Kontaktverhalten",children:Object(r.jsx)(g,{value:q,onChange:Q,title:O,auswahl:["dialogisch","dialogisch und triangul\xe4r","kein Blickkontakt"]})}),Object(r.jsxs)(j,{text:"Spiel und Konzentration",children:[Object(r.jsx)(g,{value:$,onChange:_,title:v,auswahl:["wechselhaft","ausdauernd","kein Spielverhalten"]}),Object(r.jsx)(g,{value:ae,onChange:ne,title:x,auswahl:["Funktionsspiel","Symbolspiel"]}),Object(r.jsx)(g,{value:le,onChange:se,title:S,auswahl:["angemessen","nicht angemessen"]})]}),Object(r.jsxs)(j,{text:"Auditive Wahrnehmung",children:[Object(r.jsx)(g,{value:ue,onChange:he,title:p,auswahl:["reagiert","reagiert nicht"]}),Object(r.jsx)(g,{value:de,onChange:je,title:C,auswahl:["reagiert","reagiert nicht"]}),Object(r.jsx)(g,{value:me,onChange:we,title:I,auswahl:["sicher","nicht ausreichend zu beurteilen","nur Identifikation sicher","nur Lokalisation sicher"]}),Object(r.jsx)(g,{value:xe,onChange:Se,title:A,auswahl:["altersentsprechend","nicht altersentsprechend"]})]}),Object(r.jsxs)(j,{text:"Mundmotorik",children:[Object(r.jsx)(g,{value:Ie,onChange:Ae,title:z,auswahl:["reguliert","nicht ausreichend reguliert"]}),Object(r.jsx)(g,{value:Ne,onChange:Le,title:y,auswahl:["konstant","offen"]}),Object(r.jsx)(g,{value:Me,onChange:Ke,title:N,auswahl:["vermehrter Speichelfluss","[ keine Angabe ]"]}),Object(r.jsx)(g,{value:Be,onChange:Ge,title:L,auswahl:["m\xf6glich","nicht m\xf6glich","[ keine Angabe ]"]}),Object(r.jsx)(g,{value:He,onChange:Re,title:F,auswahl:["m\xf6glich","nicht m\xf6glich","[ keine Angabe ]"]}),Object(r.jsx)(g,{value:We,onChange:Ue,title:E,auswahl:["m\xf6glich","nicht m\xf6glich","[ keine Angabe ]"]}),Object(r.jsx)(g,{value:Xe,onChange:Ye,title:M,auswahl:["unauff\xe4llig","eingeschr\xe4nkt","[ keine Angabe ]"]}),Object(r.jsx)(g,{value:et,onChange:tt,title:K,auswahl:["unauff\xe4llig","eingeschr\xe4nkt","[ keine Angabe ]"]})]}),Object(r.jsxs)(j,{text:"Essen und Trinken",children:[Object(r.jsx)(g,{value:ct,onChange:it,title:D,auswahl:["unauff\xe4llig","auff\xe4llig"]}),Object(r.jsx)(g,{value:rt,onChange:ot,title:T,auswahl:["alle Konsistenzen","v.a. weiche/breiige Kost","v.a. harte Kost","[ Sonstiges ]"]}),"[ Sonstiges ]"===rt&&Object(r.jsx)(u,{value:Dt,onChange:Tt,title:T+" (Freitext)"})]}),Object(r.jsxs)(j,{text:"Orale Habits",children:[Object(r.jsx)(g,{value:gt,onChange:bt,title:B,auswahl:["nicht vorhanden","vorhanden"]}),Object(r.jsx)(g,{value:kt,onChange:ft,title:G,auswahl:["noch nie","bis heute","bis zum..."]}),"bis zum..."===kt&&Object(r.jsx)(u,{value:Jt,onChange:Pt,title:G+" (Freitext)"}),Object(r.jsx)(g,{value:Ot,onChange:vt,title:J,auswahl:["trinkt noch aus einer","[ keine Angabe ]"]}),Object(r.jsx)(g,{value:pt,onChange:Ct,title:P,auswahl:["wird beobachtet","[ keine Angabe ]"]}),Object(r.jsx)(g,{value:zt,onChange:yt,title:H,auswahl:["wird beobachtet","[ keine Angabe ]"]})]})]}),Object(r.jsx)(d,{ausgabe:ea,resetAll:function(){c(""),b(null),Z(null),Q(null),_(null),ne(null),se(null),he(null),je(null),we(null),Se(null),Ae(null),Le(null),Ke(null),Ge(null),Re(null),Ue(null),Ye(null),tt(null),it(null),ot(null),bt(null),ft(null),vt(null),Ct(null),yt(null),Et(""),Tt(""),Pt(""),Zt(!0),localStorage.clear()}})]})};l.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(R,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e171baa1.chunk.js.map
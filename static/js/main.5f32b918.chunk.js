(this["webpackJsonpfub-generator"]=this["webpackJsonpfub-generator"]||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),l=a(4),s=a.n(l),c=(a(9),a(2)),r=a(0),d=function(e){return Object(r.jsxs)("div",{className:"my-4 mx-8",children:[Object(r.jsx)("label",{htmlFor:e.label,className:"block text-base font-medium text-gray-900",children:e.label}),Object(r.jsx)("div",{className:"mt-1",children:Object(r.jsx)("input",{onChange:function(t){return e.onChange(t.target.value)},type:"text",id:e.label,className:"shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-300 rounded-md"})})]})},o=function(e){return Object(r.jsxs)("fieldset",{onChange:function(t){return e.onChange(t.target.id)},className:"my-4 mx-8",children:[Object(r.jsx)("div",{children:Object(r.jsx)("legend",{className:"text-base font-medium text-gray-900",children:e.title})}),Object(r.jsx)("div",{className:"mt-2 space-y-2",children:e.auswahl.map((function(t){return Object(r.jsxs)("div",{className:"flex items-center",children:[Object(r.jsx)("input",{id:t,name:e.title,type:"radio",className:"focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"}),Object(r.jsx)("label",{htmlFor:t,className:"ml-3 block text-sm font-medium text-gray-700",children:t})]},t)}))})]})},u=function(){var e=Object(n.useState)(null),t=Object(c.a)(e,2),a=t[0],i=t[1],l=Object(n.useState)(null),s=Object(c.a)(l,2),u=s[0],h=s[1],g=Object(n.useState)(null),b=Object(c.a)(g,2),j=b[0],m=b[1],f=Object(n.useState)(null),k=Object(c.a)(f,2),x=k[0],O=k[1],v=Object(n.useState)(null),p=Object(c.a)(v,2),w=p[0],y=p[1],N="";if(a&&(N+=a+" wurde von "),j){switch(j){case"Mutter":case"Pflegemutter":case"Familienhelferin":N+="Junge"===u?"seiner "+j:"ihrer "+j;break;case"Vater":case"Pflegevater":case"Familienhelfer":N+="Junge"===u?"seinem "+j:"ihrem "+j;break;case"Eltern":case"Pflegeeltern":N+="Junge"===u?"seinen "+j:"ihren "+j;break;default:N+="XXXX"}N+=" begleitet. "}if(x)switch(N+="Junge"===u?"Er ":"Sie ",x){case"dialogisch":N+="zeigte einen dialogischen Blickkontakt. ";break;case"triangul\xe4r":N+="zeigte einen triangul\xe4ren Blickkontakt. ";break;case"dialogisch und triangul\xe4r":N+="zeigte einen dialogischen und triangul\xe4ren Blickkontakt. ";break;case"kein Blickkontakt":N+="nahm keinen Blickkontakt auf. ";break;default:N+="zeigte einen XXXX Blickkontakt. "}if(w)switch(w){case"wechselhaft":case"ausdauernd":N+="Junge"===u?"Sein ":"Ihr ",N+="Spielverhalten war "+w+". ";break;case"kein Spielverhalten":N+="Mit dem Spielmaterial konnte ",N+="Junge"===u?"er ":"sie ",N+="sich noch nicht alleine besch\xe4ftigen. ";break;default:N+="Spielverhalten: XXXX "}return Object(r.jsxs)("div",{className:"h-screen grid grid-cols-2 gap-10 px-20 py-10 bg-gray-100",children:[Object(r.jsxs)("div",{className:"h-full overflow-auto bg-white shadow-sm rounded-md p-5 border-gray-300",children:[Object(r.jsxs)("div",{className:"flex",children:[Object(r.jsx)(o,{onChange:h,title:"Geschlecht",auswahl:["Junge","M\xe4dchen"]}),Object(r.jsx)(d,{onChange:i,label:"Vorname"})]}),Object(r.jsxs)("div",{className:"flex",children:[Object(r.jsx)(o,{onChange:m,title:"Begleitet von",auswahl:["Mutter","Vater","Eltern","Pflegemutter","Pflegevater","Pflegeeltern","Familienhelferin","Familienhelfer","(sonstiges)"]}),Object(r.jsxs)("div",{className:"flex flex-col",children:[Object(r.jsx)(o,{onChange:O,title:"Blickkontakt",auswahl:["dialogisch","triangul\xe4r","dialogisch und triangul\xe4r","kein Blickkontakt"]}),Object(r.jsx)(o,{onChange:y,title:"Spielverhalten",auswahl:["wechselhaft","ausdauernd","kein Spielverhalten"]})]})]})]}),Object(r.jsx)("textarea",{readOnly:!0,value:N,className:"h-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block border-gray-300 rounded-md px-8 py-6"})]})};s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(u,{})}),document.getElementById("root"))},9:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.5f32b918.chunk.js.map
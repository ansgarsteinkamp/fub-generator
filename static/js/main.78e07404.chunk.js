(this["webpackJsonpfub-generator"]=this["webpackJsonpfub-generator"]||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),i=a(4),s=a.n(i),c=(a(9),a(2)),r=a(0),o=function(e){return Object(r.jsxs)("div",{className:"my-3 mx-8",children:[Object(r.jsx)("label",{htmlFor:e.label,className:"block text-base text-red-800 font-bold",children:e.label}),Object(r.jsx)("div",{className:"mt-1",children:Object(r.jsx)("input",{onChange:function(t){return e.onChange(t.target.value)},type:"text",id:e.label,className:"shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-300 rounded-md"})})]})},d=function(e){return Object(r.jsxs)("fieldset",{onChange:function(t){return e.onChange(t.target.id)},className:"my-3 mx-8",children:[Object(r.jsx)("div",{children:Object(r.jsx)("legend",{className:"text-base text-red-800 font-bold",children:e.title})}),Object(r.jsx)("div",{className:"mt-2 space-y-2",children:e.auswahl.map((function(t){return Object(r.jsxs)("div",{className:"flex items-center",children:[Object(r.jsx)("input",{id:t,name:e.title,type:"radio",className:"focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"}),Object(r.jsx)("label",{htmlFor:t,className:"ml-3 block text-sm font-medium text-gray-700",children:t})]},t)}))})]})},u=function(){var e=Object(n.useState)(null),t=Object(c.a)(e,2),a=t[0],l=t[1],i=Object(n.useState)(null),s=Object(c.a)(i,2),u=s[0],g=s[1],h=Object(n.useState)(null),b=Object(c.a)(h,2),j=b[0],f=b[1],m=Object(n.useState)(null),x=Object(c.a)(m,2),k=x[0],O=x[1],p=Object(n.useState)(null),v=Object(c.a)(p,2),w=v[0],N=v[1],y="";if(a&&(y+=a+" wurde von "),j){switch(j){case"Mutter":case"Pflegemutter":case"Familienhelferin":y+="Junge"===u?"seiner "+j:"ihrer "+j;break;case"Vater":case"Pflegevater":case"Familienhelfer":y+="Junge"===u?"seinem "+j:"ihrem "+j;break;case"Eltern":case"Pflegeeltern":y+="Junge"===u?"seinen "+j:"ihren "+j;break;default:y+="XXXX"}y+=" begleitet. "}if(k)switch(y+="Junge"===u?"Er ":"Sie ",k){case"dialogisch":y+="zeigte einen dialogischen Blickkontakt. ";break;case"triangul\xe4r":y+="zeigte einen triangul\xe4ren Blickkontakt. ";break;case"dialogisch und triangul\xe4r":y+="zeigte einen dialogischen und triangul\xe4ren Blickkontakt. ";break;case"kein Blickkontakt":y+="nahm keinen Blickkontakt auf. ";break;default:y+="zeigte einen XXXX Blickkontakt. "}if(w)switch(w){case"wechselhaft":case"ausdauernd":y+="Junge"===u?"Sein ":"Ihr ",y+="Spielverhalten war "+w+". ";break;case"kein Spielverhalten":y+="Mit dem Spielmaterial konnte ",y+="Junge"===u?"er ":"sie ",y+="sich noch nicht alleine besch\xe4ftigen. ";break;default:y+="Spielverhalten: XXXX "}return Object(r.jsxs)("div",{className:"h-screen grid lg:grid-cols-3 lg:gap-10 gap-2 lg:px-20 lg:py-10 px-3 pt-3 pb-10 bg-gray-100",children:[Object(r.jsxs)("div",{className:"h-full overflow-auto bg-white shadow-sm rounded-md p-5 border-gray-300 lg:col-span-2",children:[Object(r.jsxs)("div",{className:"flex lg:flex-row flex-col",children:[Object(r.jsx)(d,{onChange:g,title:"Geschlecht",auswahl:["Junge","M\xe4dchen"]}),Object(r.jsx)(o,{onChange:l,label:"Vorname"})]}),Object(r.jsxs)("div",{className:"flex lg:flex-row flex-col",children:[Object(r.jsx)(d,{onChange:f,title:"Begleitet von",auswahl:["Mutter","Vater","Eltern","Pflegemutter","Pflegevater","Pflegeeltern","Familienhelferin","Familienhelfer","(sonstiges)"]}),Object(r.jsxs)("div",{className:"flex flex-col",children:[Object(r.jsx)(d,{onChange:O,title:"Blickkontakt",auswahl:["dialogisch","triangul\xe4r","dialogisch und triangul\xe4r","kein Blickkontakt"]}),Object(r.jsx)(d,{onChange:N,title:"Spielverhalten",auswahl:["wechselhaft","ausdauernd","kein Spielverhalten"]})]})]})]}),Object(r.jsx)("textarea",{readOnly:!0,value:y,rows:"5",className:"h-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block border-gray-300 rounded-md px-8 py-6"})]})};s.a.render(Object(r.jsx)(l.a.StrictMode,{children:Object(r.jsx)(u,{})}),document.getElementById("root"))},9:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.78e07404.chunk.js.map
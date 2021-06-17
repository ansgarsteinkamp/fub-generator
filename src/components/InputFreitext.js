import { useEffect } from "react";

const InputFreitext = props => {
   useEffect(() => {
      if (props.value) {
         localStorage.setItem(props.title, props.value);
      }
   }, [props.title, props.value]);

   const myClassNames =
      props.ml +
      " " +
      "text-gray-700 text-sm italic font-semibold py-1 px-2 mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md placeholder-gray-300";

   const myClassNamesInput = myClassNames + " " + props.width + "block";

   if (props.type === "textarea") {
      return (
         <textarea
            cols="40"
            rows="10"
            className={myClassNames}
            onChange={e => props.onChange(e.target.value)}
            value={props.value}
            placeholder={props.placeholder}
         ></textarea>
      );
   } else {
      return (
         <input className={myClassNamesInput} onChange={e => props.onChange(e.target.value)} value={props.value} type="text" placeholder={props.placeholder} />
      );
   }
};

InputFreitext.defaultProps = {
   ml: "ml-11",
   placeholder: "Freitext",
   type: "input"
};

export default InputFreitext;

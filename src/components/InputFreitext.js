import { useEffect } from "react";

const InputFreitext = props => {
   useEffect(() => {
      if (props.value) {
         localStorage.setItem(props.title, props.value);
      }
   }, [props.title, props.value]);

   const myClassNames =
      `${props.ml} ${props.width} ` +
      "text-gray-700 text-sm italic font-semibold py-1 px-2 mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md placeholder-gray-300";

   return <input className={myClassNames} onChange={e => props.onChange(e.target.value)} value={props.value} type="text" placeholder={props.placeholder} />;
};

InputFreitext.defaultProps = {
   ml: "ml-11",
   placeholder: "Freitext"
};

export default InputFreitext;

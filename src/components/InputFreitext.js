import { useEffect } from "react";

const InputFreitext = props => {
   useEffect(() => {
      if (props.value) {
         localStorage.setItem(props.title, props.value);
      }
   }, [props.title, props.value]);

   return (
      <input
         onChange={e => props.onChange(e.target.value)}
         value={props.value}
         type="text"
         id={props.title}
         className="text-gray-700 text-sm italic py-1 px-2 ml-11 mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
      />
   );
};

export default InputFreitext;

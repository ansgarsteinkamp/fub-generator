import { useEffect } from "react";

const Input = props => {
   useEffect(() => {
      if (props.value) {
         localStorage.setItem(props.title, props.value);
      }
   }, [props.title, props.value]);

   return (
      <div className="my-3 mx-6">
         <label htmlFor={props.title} className="text-gray-500 text-sm font-bold">
            {props.title}
         </label>
         <div className="mt-1">
            <input
               onChange={e => props.onChange(e.target.value)}
               value={props.value}
               type="text"
               id={props.title}
               className="text-gray-700 text-sm py-1 px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
            />
         </div>
      </div>
   );
};

export default Input;

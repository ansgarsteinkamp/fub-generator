import React from "react";

const Radio = props => {
   return (
      <fieldset onChange={e => props.onChange(e.target.id)} className="my-4 mx-8">
         <div>
            <legend className="text-base font-medium text-gray-900">{props.title}</legend>
         </div>
         <div className="mt-2 space-y-2">
            {props.auswahl.map(el => (
               <div key={el} className="flex items-center">
                  <input id={el} name={props.title} type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                  <label htmlFor={el} className="ml-3 block text-sm font-medium text-gray-700">
                     {el}
                  </label>
               </div>
            ))}
         </div>
      </fieldset>
   );
};

export default Radio;

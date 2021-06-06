import { useEffect } from "react";
import { RadioGroup } from "@headlessui/react";

const Radio = props => {
   useEffect(() => {
      if (props.value) {
         localStorage.setItem(props.title, props.value);
      }
   }, [props.title, props.value]);

   return (
      <RadioGroup className="my-3 mx-4" value={props.value} onChange={props.onChange}>
         <RadioGroup.Label className="text-gray-500 text-sm font-bold">{props.title}</RadioGroup.Label>
         <div className="mt-1 space-y-1">
            {props.auswahl.map(el => (
               <RadioGroup.Option key={el} value={el} className="ml-1 flex items-center">
                  {({ active, checked }) => (
                     <>
                        <span
                           className={`
                            ${checked ? "bg-indigo-600 border-transparent" : "bg-white border-gray-300"}
                            ${active ? "ring-2 ring-offset-2 ring-indigo-500" : ""}
                            h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center`}
                        >
                           <span className="rounded-full bg-white w-1.5 h-1.5" />
                        </span>
                        <RadioGroup.Label as="span" className="text-gray-700 text-sm ml-2">
                           {el}
                        </RadioGroup.Label>
                     </>
                  )}
               </RadioGroup.Option>
            ))}
         </div>
      </RadioGroup>
   );
};

export default Radio;

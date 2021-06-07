import { Fragment } from "react";

// "default: ausblenden"
// "default: ausblenden"

const Hauptblock = props => {
   return (
      <Fragment>
         <div onClick={props.onToggle} className="text-gray-500 font-bold mt-6 px-4 py-2 bg-gray-200 flex justify-between">
            <h1>{props.text}</h1>
            {props.onToggle && !props.show && (
               <button>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                     <path
                        fillRule="evenodd"
                        d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                     />
                  </svg>
               </button>
            )}
            {props.onToggle && props.show && (
               <button>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                     <path
                        fillRule="evenodd"
                        d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
                        clipRule="evenodd"
                     />
                  </svg>
               </button>
            )}
         </div>
         {props.show && props.children}
      </Fragment>
   );
};

export default Hauptblock;

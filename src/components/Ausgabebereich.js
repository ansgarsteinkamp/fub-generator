import { CopyToClipboard } from "react-copy-to-clipboard";

const Ausgabebereich = props => {
   return (
      <div className="relative">
         <textarea
            readOnly
            value={props.ausgabe}
            rows="5"
            className="text-xs h-full w-full pl-5 pr-3 py-14 shadow-lg focus:ring-indigo-500 focus:border-indigo-500 block border-gray-300 rounded-md"
         ></textarea>
         <div className="absolute top-4 flex justify-between w-full">
            <CopyToClipboard text={props.ausgabe} options={{ format: "text/plain" }}>
               <button className="rounded-full bg-green-200 hover:bg-green-400 p-1 ml-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-400 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                     />
                  </svg>
               </button>
            </CopyToClipboard>
            <button className="rounded-full bg-red-200 hover:bg-red-400 p-1 mr-4" onClick={props.resetAll}>
               <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-400 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth={2}
                     d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
               </svg>
            </button>
         </div>
      </div>
   );
};

export default Ausgabebereich;

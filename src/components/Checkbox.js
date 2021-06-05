const Checkbox = props => {
   return (
      <div className="my-3 mx-6">
         <div>
            <h2 className="text-base text-red-800 font-bold">{props.title}</h2>
         </div>
         <div className="mt-2 flex items-center h-5">
            <input id={props.title} type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
            <label htmlFor={props.title} className="ml-3 block text-sm font-medium text-gray-700">
               {props.text}
            </label>
         </div>
      </div>

      //    <div className="my-3 mx-6">
      //       <label htmlFor={props.title} className="block text-base text-red-800 font-bold">
      //          {props.title}
      //       </label>
      //       <div className="mt-1">
      //          <input
      //             onChange={e => {
      //                props.onChange(e.target.value);
      //                localStorage.setItem(props.title, e.target.value);
      //             }}
      //             type="text"
      //             id={props.title}
      //             className="text-sm py-1.5 px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block border-gray-300 rounded-md text-"
      //          />
      //       </div>
      //    </div>
   );
};

export default Checkbox;

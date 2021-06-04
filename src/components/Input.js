const Input = props => {
   return (
      <div className="my-3 mx-8">
         <label htmlFor={props.label} className="block text-base text-red-800 font-bold">
            {props.label}
         </label>
         <div className="mt-1">
            <input
               onChange={e => props.onChange(e.target.value)}
               type="text"
               id={props.label}
               className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full max-w-xs border-gray-300 rounded-md"
            />
         </div>
      </div>
   );
};

export default Input;

const Input = props => {
   return (
      <div className="my-4 mx-8">
         <label htmlFor={props.label} className="block text-base font-medium text-gray-900">
            {props.label}
         </label>
         <div className="mt-1">
            <input
               onChange={e => props.onChange(e.target.value)}
               type="text"
               id={props.label}
               className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-300 rounded-md"
            />
         </div>
      </div>
   );
};

export default Input;

const Input = props => {
   return (
      <div className="my-3">
         <label htmlFor="input" className="block text-sm font-medium text-gray-700">
            {props.label}
         </label>
         <div className="mt-1">
            <input
               onChange={e => props.onChange(e.target.value)}
               type="text"
               id="input"
               className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-300 rounded-md"
            />
         </div>
      </div>
   );
};

export default Input;

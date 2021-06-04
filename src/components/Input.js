const Input = props => {
   return (
      <div className="my-3 mx-8">
         <label htmlFor={props.title} className="block text-base text-red-800 font-bold">
            {props.title}
         </label>
         <div className="mt-1">
            <input
               onChange={e => {
                  props.onChange(e.target.value);
                  localStorage.setItem(props.title, e.target.value);
               }}
               type="text"
               id={props.title}
               className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block border-gray-300 rounded-md"
            />
         </div>
      </div>
   );
};

export default Input;

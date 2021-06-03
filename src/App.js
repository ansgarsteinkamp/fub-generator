import { useState } from "react";

import Input from "./components/Input.js";

const App = () => {
   const [vorname, setVorname] = useState("");

   return (
      <div className="grid grid-cols-2 gap-10 m-10 p-10 bg-gray-50">
         <Input onChange={setVorname} label="Vorname" />
         <textarea /* value={vorname} */ className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block border-gray-300 rounded-md"></textarea>
      </div>
   );
};

export default App;

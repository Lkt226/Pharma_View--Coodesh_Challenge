import {UserList} from "./components/userListing"
import "tailwindcss/tailwind.css"
import { BtsList } from "./components/bts-table.jsx";
import {Table} from "./components/pagTable"


const App = () => {

  return (
    <div>
      <h1>
        Hello World
      </h1>
      <BtsList/>

    </div>
  );
}

export default App;

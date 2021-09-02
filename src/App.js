import {UserList} from "./components/userListing"
import "tailwindcss/tailwind.css"
import { BtsList } from "./components/bts-table.jsx";
import {UserTable} from "./components/pagTable"


const App = () => {

  return (
    <div>
      <h1>
        Hello World
      </h1>
      <BtsList/>
      <UserTable/>

    </div>
  );
}

export default App;

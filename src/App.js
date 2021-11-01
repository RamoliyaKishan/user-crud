import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from "./components/About";
import Header from "./components/Header";
import AddUser from "./views/userForm/AddUser";
import UserTable from "./views/userList/UserTable";
toast.configure();

function App() {
  return (

    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={UserTable}/>
        <Route path='/addUser' exact component={AddUser}/>
        <Route path='/addUser/:id' exact component={AddUser}/>
        <Route path='/about' exact component={About} />
      </Switch>
    </Router>

    
  );
}

export default App;

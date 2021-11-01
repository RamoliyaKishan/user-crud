import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./commponents/About";
import Header from "./commponents/Header";
import AddUser from "./views/userForm/AddUser";
import UserTable from "./views/userList/UserTable";

function App() {
  return (

    <Router>
      <Header />
      <Switch>
        {/* <Route path='/' exact component={Header} /> */}
        <Route path='/' exact component={UserTable}/>
        {/* <Route path='/addUser' exact component={AddUser}/>
        <Route path='/editUser/:id' exact component={EditUser}/> */}

        <Route path='/addUser' exact component={AddUser}/>
        <Route path='/addUser/:id' exact component={AddUser}/>
        <Route path='/about' exact component={About} />
      </Switch>
    </Router>

    
  );
}

export default App;

import './App.css';
import Chat from './Chat';
import HomePage from './HomePage';
import Sidebar from './Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './Dashboard';
import User from './User';
import ClubMember from './ClubMember';
import TransferPoints from './TransferPoints';
import SendMsg from './SendMsg';
import AllMsg from './AllMsg';

function App() {
  return (
    <div className="app">
        <Router>
        <Sidebar />
        <div className="app__body">
        <Chat />
        <Switch>

        <Route path="/post">
        <h1>post</h1>
       </Route>

        <Route path="/allmessage">
        <AllMsg />
       </Route>

        <Route path="/sendmessage">
        <SendMsg />
       </Route>

        <Route path="/transferpoints">
        <TransferPoints />
       </Route>

        <Route path="/AllManagers">
          <User title="All Club Managers" name="Manager Name" club="Club Members"/>
         </Route>

        <Route path="/Club Member">
          <ClubMember />
         </Route>

         <Route path="/blockeduser">
         <h1>Blocked User</h1>
         </Route>

          <Route path="/user">
            <User title="User Information" name="User Name" club="Club Managers"/>
          </Route>

          <Route path="/Dashboard">
            <Dashboard />
          </Route>

          <Route path="/">
              <Dashboard />
          </Route>
          
        </Switch>
      </div>
    </Router>

    </div>
    // chat
  );
}

export default App;

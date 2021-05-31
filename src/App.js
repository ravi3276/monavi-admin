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
import {useState} from 'react';
import AllMessages from './AllMessages';
import Events from './Events';
import ItemShop from './ItemShop';
import UserReport from './UserReport';
import Post from './Post';

function App() {
  const [user,setUser]=useState("null");
  return !user?(
    <HomePage />
  ):(
    <div className="app">
        <Router>
        <Sidebar />
        <div className="app__body">
        <Chat />
        <Switch>

        <Route path="/managereport">
        <UserReport title='Manage Reports'/>
       </Route>

        <Route path="/userreport">
        <UserReport title='User Reports'/>
       </Route>

       <Route path="/Reports">
        <UserReport title='User Reports'/>
       </Route>

        <Route path="/Item Shop">
        <ItemShop />
       </Route>

       <Route path="/Events">
        <Events />
       </Route>

        <Route path="/post">
        <Post />
       </Route>

        <Route path="/allmessage">
        <AllMessages />
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
         <User title="Blocked User" name="User Name" club="Club Managers"/>
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

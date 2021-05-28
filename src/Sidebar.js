import React from 'react'
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import {useHistory} from 'react-router-dom'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
function Sidebar() {
    const history = useHistory();
   const home=()=>{
       history.push('/')
   }

   const user=()=>{
    history.push('/user')
    }

    const blockeduser=()=>{
        history.push('/blockeduser')
    }

    const allmanager=()=>{
      history.push('/AllManagers')
    }

    const transfer=()=>{
      history.push('/transferpoints')
    }

    const sendMessage=()=>{
      history.push('/sendmessage')
    }

    const allMsg=()=>{
      history.push('/allmessage')
    }

    const post=()=>{
      history.push('/post')
    }

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <h1 onClick={home}>Monavi</h1>
                <h4>Super Admin</h4>
            </div>
            <SidebarOption title="Dashboard"/>

            <div className="dropdown">
            <SidebarOption className="dropbtn" title="User Managment" Icon={ArrowDropDownIcon}/>
            <div class="dropdown-content">
               <p onClick={user}>User</p>
               <p onClick={blockeduser}>Blocked Users</p>
             </div>
            </div>

            <div className="dropdown">
            <SidebarOption className="dropbtn" title="Club Member" Icon={ArrowDropDownIcon}/>
            <div class="dropdown-content">
               <p onClick={allmanager}>All Manager</p>
               <p onClick={blockeduser}>Blocked Manager</p>
             </div>
            </div>

            <div className="dropdown">
            <SidebarOption className="dropbtn" title="Points Managment" Icon={ArrowDropDownIcon}/>
            <div class="dropdown-content">
               <p onClick={transfer}>Transfer Points</p>
             </div>
            </div>

            <div className="dropdown">
            <SidebarOption className="dropbtn" title="Post & Message" Icon={ArrowDropDownIcon}/>
            <div class="dropdown-content">
               <p onClick={sendMessage}>Send Message</p>
               <p onClick={allMsg}>All Message</p>
               <p onClick={post}>Post</p>
             </div>
            </div>

            <SidebarOption title="Item Shop"/>

            <SidebarOption className="dropbtn" title="Events"/>
           

            <div className="dropdown">
            <SidebarOption className="dropbtn" title="Reports" Icon={ArrowDropDownIcon}/>
            <div class="dropdown-content">
               <p onClick={user}>User Reports</p>
               <p onClick={blockeduser}>Manager Reports</p>
             </div>
            </div>

            <hr/>
            <SidebarOption className="sidebar__logout" title="Log Out"/>
            </div>
    )
}

export default Sidebar

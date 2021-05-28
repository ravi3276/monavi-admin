import React from 'react'
import './Chat.css';
import EmailIcon from '@material-ui/icons/Email';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <EmailIcon />
                <NotificationsIcon />
                <h2>max Lee</h2>
                <AccountCircleIcon />
            </div>

        </div>
    )
}

export default Chat

import React from 'react'
import './SendMsg.css';
import Footer from './Footer';
import {useHistory} from 'react-router-dom'


function SendMsg() {
    const history=useHistory();

    const allmsg=()=>{
        History.replace('/events')
    }

    return (
        <div className="sendMsg">
        <div className="sendmessage">
            <h1>Send Message to Users</h1>
                <div className="sendMsg__form">
                <input type="radio" id="radio2" name="radio2"  />
                <p>Message</p>

                <input onClick={allmsg} type="radio" id="radio2" name="radio2"  />
                 <p>Events</p>
                </div>

                <form className="msg__form">
                        <table className="msg__table">	
                        
                        <tr>
                        <td>Send toAll</td>
                        <td>
                        <input type="checkbox" id="check2" name="check2"  />
                        <label for="check2">Yes</label>

                        <input type="checkbox" id="check2" name="check2"  />
                        <label for="check2">No</label>
                        </td>
                         </tr>

                         <tr>
                         <td>name</td>
                         <td>
                         <input className="input__feild" type="text" placeholder=""/>
                         </td>
                         </tr>
    
                         <tr>
                         <td>Title</td>
                         <td>
                         <input className="input__feild" type="text" placeholder=""/>
                         </td>
                         </tr>

                        </table>
                        
                        </form>
                       <input className="input__feild1" type="text" placeholder=""/>

                        <div className="sendMsg__btn">
                        <button>Send</button>
                        <button>cancel</button>
                        </div>
        </div>

                        <Footer />
        </div>
    )
}

export default SendMsg

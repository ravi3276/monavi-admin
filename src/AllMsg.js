import React from 'react'
import './AllMsg.css';
function AllMsg() {
    return (
        <div className="allMsg">
        <h1>Send Message to User</h1>
        <div className="allMsg__form">
        <input type="radio" id="radio2" name="radio2"  />
        <p>Message</p>

        <input type="radio" id="radio2" name="radio2"  />
         <p>Events</p>
        </div>

        <form className="allmsg__form">
        <table className="allmsg__table">	
        
         <tr>
         <td>Name Of Event</td>
         <td>
         <input className="all__inputtext" type="text" placeholder=""/>
         </td>
         </tr>

         <tr>
         <td>Start Of Event</td>
         <td>
         <input className="all__input" type="number" min="1" max="31" placeholder="DD"/>
         <input className="all__input" type="number" min="1" max="12" placeholder="MM"/>
         <input className="all__input" type="number" min="2019" max="2021" placeholder="YYYY"/>
         </td>

         <td>Time</td>
         <td>
         <input className="all__input" type="number" min="0" max="23" placeholder="HH"/>
         <input className="all__input" type="number" min="0" max="60" placeholder="MM"/>
         <input className="all__input" type="number" min="0" max="60" placeholder="SS"/>
         </td>
         </tr>

         <tr>
         <td>End Of Event</td>
         <td>
         <input className="all__input" type="number" min="1" max="31" placeholder="DD"/>
         <input className="all__input" type="number" min="1" max="12" placeholder="MM"/>
         <input className="all__input" type="number" min="2019" max="2021" placeholder="YYYY"/>
         </td>

         <td>Time</td>
         <td>
         <input className="all__input" type="number" min="0" max="23" placeholder="HH"/>
         <input className="all__input" type="number" min="0" max="60" placeholder="MM"/>
         <input className="all__input" type="number" min="0" max="60" placeholder="SS"/>
         </td>
         </tr>

         <tr>
         <td>Task</td>
         <td>
         <input className="all__inputtext" type="text" placeholder=""/>
         </td>

         </tr>
        </table>
        <p><strong>Note</strong>If Users complete this task they will get beneift of this event.</p>

        </form>

        <input className="allmsg__input" type="text" placeholder="Message........."/>

        <div className="sendMsg__btn">
        <button>Send</button>
        <button>cancel</button>
        </div>
        </div>
    )
}

export default AllMsg

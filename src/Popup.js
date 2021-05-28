import React from 'react'
import './Popup.css'
function Popup({trigger,title,amount,setTrigger}) {
    return (trigger)?(
        <div className="popup">
            <div className="popup__inner">
                <h3>{title}</h3>
                <div className="popup__input">
                <p>{amount}</p>
                <input type="text" placeholder="Enter Amount"/>
                </div>
                <button>Transfer</button>
                <button onClick={()=>setTrigger(false)}>Cancel</button>
            </div>
        </div>
    ):"";
}

export default Popup

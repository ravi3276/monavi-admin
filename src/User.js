import React,{useState} from 'react'
import './User.css';
import SearchIcon from '@material-ui/icons/Search';
import Footer from './Footer';
import Popup from './Popup';
function User({title,name,club}) {
        const [trigger,setTrigger]=useState(false)
   
    return (
        <div className="user">
            <div className="user__header">
            <h1>{title}</h1>
            <div className="user__info">
                <h5>Status</h5>
                <p>Total Number of Users: 92,33,3444</p>
                <p>Total GP ON Users: 10,33,34,44,000</p>
                </div>
            </div>

            <div className="user__search">
            <div className="search__left">
            <h5>Show</h5>
            <input type="number" value="5" name="quantity" min="1" max="10" />
            <p>Entries</p>
            </div>

            <div className="search__right">
            <SearchIcon />
            <input type="text" placeholder="Search"/>
            </div>
            </div>

            <div className="table">
            <div className="user__table">
                <h5>S.no.</h5>
                <h5>{name}</h5>
                <h5>Game Point</h5>
                <h5>Level</h5>
                <h5>Score</h5>
                <h5>Registerd</h5>
                <h5>{club}</h5>
                <h5>Action</h5>
                <h5>Transfere Points</h5>
            </div>

            <div className="user__tabledata">
            <p>01</p>
            <p>Dog Yanoljang</p>
            <p>566612115</p>
            <p>Gold</p>
            <p>2115</p>
            <p>20 June, 2019</p>
            <p>john yien</p>
            <div className="user__btns">
            <button>Block</button>
            <button>Delete</button>
            </div>
            <button onClick={()=>setTrigger(true)}>Send</button>
            </div>
            <Popup trigger={trigger} title="Transfer to Dog Yanoljang" amount="Amount" setTrigger={setTrigger}/>

            <div className="user__tabledata">
            <p>02</p>
            <p>Dog Yanoljang</p>
            <p>566612115</p>
            <p>Gold</p>
            <p>2115</p>
            <p>20 June, 2019</p>
            <p>john yien</p>
            <div className="user__btns">
            <button>Block</button>
            <button>Delete</button>
            </div>
            <button onClick={()=>setTrigger(true)}>Send</button>
        </div>


        <div className="user__tabledata">
        <p>03</p>
        <p>Dog Yanoljang</p>
        <p>566612115</p>
        <p>Gold</p>
        <p>2115</p>
        <p>20 June, 2019</p>
        <p>john yien</p>
        <div className="user__btns">
        <button>Block</button>
        <button>Delete</button>
        </div>
        <button>Send</button>
    </div>

    <div className="user__tabledata">
    <p>04</p>
    <p>Dog Yanoljang</p>
    <p>566612115</p>
    <p>Gold</p>
    <p>2115</p>
    <p>20 June, 2019</p>
    <p>john yien</p>
    <div className="user__btns">
    <button>Block</button>
    <button>Delete</button>
    </div>
    <button>Send</button>
</div>

<div className="user__tabledata">
<p>05</p>
<p>Dog Yanoljang</p>
<p>566612115</p>
<p>Gold</p>
<p>2115</p>
<p>20 June, 2019</p>
<p>john yien</p>
<div className="user__btns">
<button>Block</button>
<button>Delete</button>
</div>
<button>Send</button>
</div>
            </div>

        <Footer />
        </div>
    )
}

export default User

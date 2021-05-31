import React from 'react'
import './AllMessages.css'
import Footer from './Footer'
function AllMessages() {
    return (
        <div className="allmessage">
            <div className="allmeaasge__top">
            <div className="allmeaasge__header">
               <h2>All Messages</h2>
               <h2><strong>Total:</strong>4003304034</h2>
            </div> 

            <div className="allmeaasge__title">
                <h3>S.no</h3>
                <h3>Title</h3>
                <h3>Message</h3>
                <h3>Send To</h3>
                <h3>Send Date</h3>
                <h3>Action</h3>
            </div>

            <div className="allmeaasge__data">
                <p>01</p>
                <p>A paragraph of color:red tex</p>
                <p>A paragraph of color:red tex</p>
                <p>All Users</p>
                <p>20 June, 2019</p>
            <div className="allmessages__btns">
            <button>View</button>
            <button>Delete</button>
            </div>
            </div>

            <div className="allmeaasge__data">
                <p>02</p>
                <p>A paragraph of color:red tex</p>
                <p>A paragraph of color:red tex</p>
                <p>All Users</p>
                <p>20 June, 2019</p>
            <div className="allmessages__btns">
            <button>View</button>
            <button>Delete</button>
            </div>
            </div>

            <div className="allmeaasge__data">
                <p>03</p>
                <p>A paragraph of color:red tex</p>
                <p>A paragraph of color:red tex</p>
                <p>All Users</p>
                <p>20 June, 2019</p>
            <div className="allmessages__btns">
            <button>View</button>
            <button>Delete</button>
            </div>
            </div>

            <div className="allmeaasge__data">
                <p>04</p>
                <p>A paragraph of color:red tex</p>
                <p>A paragraph of color:red tex</p>
                <p>All Users</p>
                <p>20 June, 2019</p>
            <div className="allmessages__btns">
            <button>View</button>
            <button>Delete</button>
            </div>
            </div>
            </div>


            <Footer />
        </div>
    )
}

export default AllMessages

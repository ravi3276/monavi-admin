import React from 'react'
import './Events.css'
import Footer from './Footer'
function Events() {
    return (
        <div className="events">
            <div className="events__top">
            <div className="events__header">
               <h2>All Messages</h2>
               <h2><strong>Total:</strong>4003304034</h2>
            </div> 

            <div className="events__title">
                <h3>S.no</h3>
                <h3>Event Date</h3>
                <h3>Task</h3>
                <h3>Title</h3>
                <h3>Rewards</h3>
                <h3>Status</h3>
                <h3>Actions</h3>
            </div>

            <div className="events__data">
                <p>01</p>
                <p>20 June, 2019</p>
                <p>Login during event</p>
                <p>A paragraph of color:red tex</p>
                <p>2,00,00,000</p>
                <p>upcomming</p>
            <div className="events__btns">
            <button>View</button>
            <button>Delete</button>
            </div>
            </div>

            <div className="events__data">
                <p>02</p>
                <p>20 June, 2019</p>
                <p>Login during event</p>
                <p>A paragraph of color:red tex</p>
                <p>2,00,00,000</p>
                <p>upcomming</p>
            <div className="events__btns">
            <button>View</button>
            <button>Delete</button>
            </div>
            </div>

            <div className="events__data">
                <p>03</p>
                <p>20 June, 2019</p>
                <p>Login during event</p>
                <p>A paragraph of color:red tex</p>
                <p>2,00,00,000</p>
                <p>upcomming</p>
            <div className="events__btns">
            <button>View</button>
            <button>Delete</button>
            </div>
            </div>

            <div className="events__data">
                <p>04</p>
                <p>20 June, 2019</p>
                <p>Login during event</p>
                <p>A paragraph of color:red tex</p>
                <p>2,00,00,000</p>
                <p>upcomming</p>
            <div className="events__btns">
            <button>View</button>
            <button>Delete</button>
            </div>
            </div>

           
            </div>


            <Footer />
        </div>
    )
}

export default Events

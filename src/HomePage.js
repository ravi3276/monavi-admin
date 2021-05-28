import React from 'react'
import { Button } from '@material-ui/core';
import './HomePage.css';
import Footer from './Footer';

function HomePage() {
    return (
        <div className="login">
        <h1>Monavi</h1>
        <div className="homepage">
        <div className="login__container">
            <h2>Monavi</h2>
            <h2>Admin Login</h2>

            <form>
            <input type="text" placeholder="Admin"/>
            <br/>
            <input type="text" placeholder="Password"/>
            </form>
            <Button>Login</Button>
            <p>
            <a href="#">
            Forgot Password
            </a>
            </p>
            </div>
            <div className="footer">
        <small>
        NOTE: Monavi is not a real investment, but a virtual simulated investment content community. We does not sell financial products or recommend investments. We are a community operated for non-profit purposes..
        </small>
        <Footer />
  
        </div>
        </div>
        </div>
    )
}

export default HomePage

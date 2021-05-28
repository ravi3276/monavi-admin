import React from 'react'
import Footer from './Footer';
import './TransferPoints.css';
function TransferPoints() {
    return (
        <div className="transferPoints">
            <div className="transferPoints__header">
                <h1>Generate Gold Points - GP</h1>

                <div className="transferPoints__gp">
                    <div className="managers">
                        <h4>Total GP on Club Managers</h4>
                        <h4>10,00,00,00,000</h4>
                    </div>

                    <div className="users">
                        <h4>Total GP On Users</h4>
                        <h4>98,20,53,2,22,33,00,000</h4>
                    </div>
                </div>
            </div>

            <div className="transferPoints__body">
                        <div className="transfer__left">
                        <h2>Transfer Points</h2>

                        <form className="transfer__form">
                        <table className="transfer__table">	
                        <tr>
                            <td>Transfer to</td>
                            <td>
                            <input type="text" placeholder=""/>
                            </td>
                        </tr>
                        
                        <tr>
                        <td>All</td>
                        <td>
                        <input type="checkbox" id="check1" name="check1"  />
                        <label for="check1">Yes</label>

                        <input type="checkbox" id="check2" name="check2"  />
                        <label for="check2">No</label>
                        </td>
                         </tr>
    
                         <tr>
                         <td>Type Name</td>
                         <td>
                         <input type="text" placeholder="Type Name"/>
                         </td>
                         </tr>

                         <tr>
                         <td>Amount to be send</td>
                         <td>
                         <input type="text" placeholder=""/>
                         </td>
                         </tr>
    
                         <tr>
                         <td>Verify Password</td>
                         <td>
                         <input type="password" placeholder="enter password"/>
                         </td>
                         </tr>
    
                         <tr>
                         <td>Confirm Password</td>
                         <td>
                         <input type="password" placeholder="enter Re-password"/>
                         </td>
                         </tr>
                        </table>
                        
                        </form>
    
                        <button>Transfer</button>
                        <button>Cancel</button>
    
                        <div className="transfer__footer">
                            <h1>Note:</h1>
                            <ul>
                                <li>Minimum Generate 10 And Max Generate 100000000000</li>
                                <li>Admin Can Transfer to Club Member not Direct Users</li>
                                <li>Points will be distributed to User via Club Mangers</li>
                            </ul>
                        </div>
                        </div>

                        <div className="transferPoint__right">
                            <h2>Previous Transferred</h2>

                            <div className="transfer__righttable">
                            <h4>S.no.</h4>
                            <h4>Name</h4>
                            <h4>Transfer To</h4>
                            <h4>Date</h4>
                            <h4>Amount</h4>
                            </div>


                            <div className="transfer__righttable">
                    <h4>01</h4>
                    <h4>John glosych</h4>
                    <h4>User</h4>
                    <h4>20 June, 2019</h4>
                    <h4>9852222224</h4>
                    </div>

                    <div className="transfer__righttable">
                    <h4>02</h4>
                    <h4>John glosych</h4>
                    <h4>User</h4>
                    <h4>20 June, 2019</h4>
                    <h4>9852222224</h4>
                    </div>

                    <div className="transfer__righttable">
                    <h4>03</h4>
                    <h4>John glosych</h4>
                    <h4>User</h4>
                    <h4>20 June, 2019</h4>
                    <h4>9852222224</h4>
                    </div>
                        </div>
                </div>

                <Footer />
        </div>
    )
}

export default TransferPoints

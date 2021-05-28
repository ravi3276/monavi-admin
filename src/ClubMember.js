import React from 'react'
import './ClubMember.css';
import Footer from './Footer';

function ClubMember() {
    return (
        <div className="clubMember">
            <h1>Add Club Manager</h1>
            <div className="clubMember__body">
                <div className="clubMember__left">
                    <h2>Add New Club Manager</h2>
                    <form className="clubMember__form">
                    <table className="clubMember__table">	
                    <tr>
                        <td>Name</td>
                        <td>
                        <input type="text" placeholder="enter name"/>
                        </td>
                    </tr>
                    
                    <tr>
                    <td>Club Name <i>Default</i></td>
                    <td>
                    <input type="text" placeholder="enter Clubname"/>
                    </td>
                     </tr>

                     <tr>
                     <td>Email</td>
                     <td>
                     <input type="email" placeholder="enter email"/>
                     </td>
                     </tr>

                     <tr>
                     <td>password</td>
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

                    <button>Create</button>
                    <button> Reset</button>

                    <div className="club__foter">
                        <h1>Note:</h1>
                        <p>
                    Manger ID will automatically will Genrate after added, And one club will also created.
                    Later you can change manger and assign new manger
                    </p>
                    </div>
                </div>

                <div className="clubMember__right">
                <h2>Recently Added Managers</h2>

                    <div className="clubMember__righttable">
                    <h4>S.no.</h4>
                    <h4>Manager Id</h4>
                    <h4>Manager Name</h4>
                    <h4>Club Name</h4>
                    <h4>Added On</h4>
                    <h4>Gp</h4>
                    </div>

                    <div className="clubMember__righttable">
                    <h4>01</h4>
                    <h4>566612115</h4>
                    <h4>Dog Yanoljang</h4>
                    <h4>- -</h4>
                    <h4>20 June,2019</h4>
                    <h4>90,00,000</h4>
                    </div>

                    <div className="clubMember__righttable">
                    <h4>02</h4>
                    <h4>566612115</h4>
                    <h4>Manager Name</h4>
                    <h4>- -</h4>
                    <h4>20 June, 2019</h4>
                    <h4>90,00,000</h4>
                    </div>

                    <div className="clubMember__righttable">
                    <h4>03</h4>
                    <h4>566612115</h4>
                    <h4>Manager Name</h4>
                    <h4>- -</h4>
                    <h4>20 June, 2019</h4>
                    <h4>90,00,000</h4>
                    </div>

                </div>
            </div>

            <h1>Empty Clubs Managers</h1>

            <div className="club__footer">
            <div className="clubMember__footer">
            <h4>S.no.</h4>
            <h4>Manager Name</h4>
            <h4>Club Name</h4>
            <h4>Added On</h4>
            <h4>Gp</h4>
            <h4>Score</h4>
            <h4>Registered</h4>
            <h4>Club Members</h4>
            <h4>Action</h4>
            </div>

            <div className="clubMember__footer">
            <h4>01</h4>
            <h4>Empty-Position</h4>
            <h4>gold club</h4>
            <h4>20 June, 2019</h4>
            <h4>None</h4>
            <h4>None</h4>
            <h4>20 June, 2019</h4>
            <h4>450</h4>
            <button>Add Club Manger here</button>
            </div>

            <div className="clubMember__footer">
            <h4>02</h4>
            <h4>Empty-Position</h4>
            <h4>gold club</h4>
            <h4>20 June, 2019</h4>
            <h4>None</h4>
            <h4>None</h4>
            <h4>20 June, 2019</h4>
            <h4>450</h4>
            <button>Add Club Manger here</button>
            </div>
            </div>

            <Footer />

        </div>
    )
}

export default ClubMember

import React from 'react'
import './UserReport.css'
import SearchIcon from '@material-ui/icons/Search';
import Footer from './Footer';

function UserReport({title}) {
    return (
        <div className="userreport">
            <h1>{title}</h1>

            <div className="userreport__search">
            <div className="userreport__left">
            <h5>Show</h5>
            <input type="number" value="25" name="quantity" min="1" max="30" />
            <p>Entries</p>
            </div>

            <div className="userreport__right">
            <SearchIcon />
            <input type="text" placeholder="Search"/>
            </div>

            </div>

            <table className="userreport__table">
            <tr>
             <th>S.no</th>
             <th>User Name</th> 
             <th>Subject</th>
             <th className="description">Description</th>
             <th>Read</th>
             <th>Action</th>
             </tr>

             <tr>
             <th>01</th>
             <th>Dog Yanoljang</th> 
             <th>"Lorem ipsum dolor</th>
             <th>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation</th>
             <th><button>View</button></th>
             <th>
             <button>Reply</button>
             <button>Delete</button>
             </th>
             </tr>

             <tr>
             <th>02</th>
             <th>Dog Yanoljang</th> 
             <th>"Lorem ipsum dolor</th>
             <th>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation</th>
             <th><button>View</button></th>
             <th>
             <button>Reply</button>
             <button>Delete</button>
             </th>
             </tr>

             <tr>
             <th>03</th>
             <th>Dog Yanoljang</th> 
             <th>"Lorem ipsum dolor</th>
             <th>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation</th>
             <th><button>View</button></th>
             <th>
             <button>Reply</button>
             <button>Delete</button>
             </th>
             </tr>

             <tr>
             <th>04</th>
             <th>Dog Yanoljang</th> 
             <th>"Lorem ipsum dolor</th>
             <th>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation</th>
             <th><button>View</button></th>
             <th>
             <button>Reply</button>
             <button>Delete</button>
             </th>
             </tr>

             <tr>
             <th>05</th>
             <th>Dog Yanoljang</th> 
             <th>"Lorem ipsum dolor</th>
             <th>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation</th>
             <th><button>View</button></th>
             <th>
             <button>Reply</button>
             <button>Delete</button>
             </th>
             </tr>
            </table>

            <Footer />

        </div>
    )
}

export default UserReport

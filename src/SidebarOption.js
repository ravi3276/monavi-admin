import React from 'react'
import './SidebarOption.css';
import {useHistory} from 'react-router-dom'

function SidebarOption({title,Icon}) {
    const history = useHistory();
    const clickevnt=()=>{
        history.push(title)
    }
    return (
        <div onClick={clickevnt} className="SidebarOption">
          {

              Icon ? (
                <div className="SidebarOption__icon">
                 <h3>
                 {title}
                 </h3> 
                    
                    <Icon />
                    
                  </div>
                 ):(
                  <h3>
                  {title}
                  </h3>
                 )
          }

        </div>
    )
}

export default SidebarOption

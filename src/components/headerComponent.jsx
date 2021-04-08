import React from 'react'
import { Link } from 'react-router-dom'

import './headerComponent.css'
const HeaderComponent = () => {
    return (
        <div className="headerComponent">
            <div className="headerContainer">
                <div className="webTitle">
                    <p>TO-DO LIST</p>
                </div>
                <div>
                    <ul>
                        <Link className="link" to="/">Add Task</Link>
                        <Link className="link" to="/mytasks">My Tasks</Link>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent

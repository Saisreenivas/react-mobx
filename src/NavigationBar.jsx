import React from 'react';
import {Link} from 'react-router-dom';
import "./NavigationBar.css";

const NavigationBar = (()=>
    <div className="NavBar">
        <ul>
            <li>
                <Link to="/" exact strict>Home</Link>
            </li>
            <li>
                <Link to="/todo" exact strict>Todo</Link>
            </li>
            <li>
                <Link to="/customise" exact strict>Customise</Link>
            </li>
        
        </ul>
        
    </div>
)

export default NavigationBar
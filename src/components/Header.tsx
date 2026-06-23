import React from 'react'
import './Header.css'

function Header() {
    return (
        <div id='headerContainer'>
            <ul id='itemList'>
                <li className="headerItem">Item1</li>
                <li className="headerItem">Item2</li>
                <li className="headerItem">Item3</li>
            </ul>
            <hr/>
        </div>
    )
}

export default Header
import './Header.css'

function Header() {
    return (
        <div id='headerContainer'>
            <ul id='itemList'>
                <li className="headerItem">About Me</li>
                <li className="headerItem">Projects</li>
                <li className="headerItem">Skills</li>
                <li className="headerItem">Contact</li>
            </ul>
            <hr/>
        </div>
    )
}

export default Header
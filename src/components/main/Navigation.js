import React from 'react'
import { Link } from 'react-router-dom'

function Navigation(props) {
    return (
        <div>
            <div className='navigation'>
                AppName
            </div>
            <ul>
                <li>
                    <Link
                        to="/"
                        className="nav-button"
                        onClick={props.closeMenu}>
                        Home
                    </Link>
                </li>

                <li>
                    <Link
                        to="/about"
                        className="nav-button"
                        onClick={props.closeMenu}>
                        About
                    </Link>
                </li>
            </ul>
        </div>
    )

}
export default Navigation

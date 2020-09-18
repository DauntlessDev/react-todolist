import React from 'react'
import { Link } from 'react-router-dom'

function Navigation(props) {
    return (
        <div>
            <div className='navmask'
                onClick={props.closeMenu}>
            </div>
            <div className='navigation'>
                <ul>
                    <li className='navbutton-first'>
                        <h4>The Menu </h4>
                    </li>
                    <li>
                        <Link
                            to="/"
                            className="navbutton"
                            onClick={props.closeMenu}>
                            Home
                    </Link>
                    </li>

                    <li>
                        <Link
                            to="/about"
                            className="navbutton"
                            onClick={props.closeMenu}>
                            About
                    </Link>
                    </li>
                </ul>
            </div>
        </div>
    )

}
export default Navigation

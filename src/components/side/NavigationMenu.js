import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Navigation from '../main/Navigation';

function NavigationMenu() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div id="navigation">
            <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
            {
                showMenu ? <Navigation closeMenu={() => setShowMenu(false)} /> : <div />
            }
        </div>

    )
}

export default NavigationMenu

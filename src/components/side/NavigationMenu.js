import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function NavigationMenu() {
    return (
        <div id="navigation">
            <FontAwesomeIcon icon={faBars} />
        </div>
    )
}

export default NavigationMenu

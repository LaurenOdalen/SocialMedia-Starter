import React from 'react'
import Logo from '../../img/logo.png'
import {UilSearch} from '@iconscout/react-unicons'

const LogoSearch = () => {
    return (
        <div className='LogoSearch'>
        <img src={Logo} alt=''/>
        <div className='Search'>
        <input type="text" placeholder="explore" />
        <div classname='s-icon'>
        <UilSearch/>
        </div>
        </div>
        </div>
    )
}

export default LogoSearch
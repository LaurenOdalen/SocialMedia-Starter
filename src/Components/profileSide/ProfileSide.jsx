import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'
import '../LogoSearch/LogoSearch.css'
import ProfileCard from '../ProfileCard/ProfileCard'

const ProfileSide = () => {
    return (
    <div className='ProfileSide'>
        <LogoSearch/>
        <ProfileCard/>
    </div>
    )
}

export default ProfileSide
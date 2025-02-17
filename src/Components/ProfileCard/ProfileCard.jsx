import React from 'react'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'
import './ProfileCard.css'

const ProfileCard = () => {
    return (
        <div className='ProfileCard'>
            <div className='ProfileImages'>
                <img src={Cover} alt=''/>
                <img src={Profile} alt=''/>
            </div>

            <div className='ProfileName'>
                <span>Lauren Grassello</span>
                <span>Senior Full Stack Developer</span>
            </div>

            <div className='followStatus'>
                <hr/>
                <div>
                    <div className='follow'>
                        <span>3,6520</span>
                        <span>Followers</span>
                    </div>
                    <div className='vl'></div>
                    <div className='follow'>
                        <span>532</span>
                        <span>Following</span>
                    </div>
                </div>
                <hr/>
            </div>
        </div>
    )
}

export default ProfileCard
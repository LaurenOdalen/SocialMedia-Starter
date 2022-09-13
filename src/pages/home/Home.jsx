import React from 'react'
import './Home.css'
import ProfileSide from '../../Components/profileSide/ProfileSide'

const Home = () => {
    return (
    <div className='Home'>
        <ProfileSide></ProfileSide>
        <Home></Home>
        <div className='postSide'>Post</div>
        <div className='profileSide'>Rightside</div>
    </div>
    )
}

export default Home
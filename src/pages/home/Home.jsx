import React from 'react'
import './Home.css'
import ProfileSide from "../../Components/profileSide/ProfileSide"

const Home = () => {
    return (
        <div className='Home'>
            <ProfileSide />
            <div className='postSide'>Post</div>
            <div className='rihtSide'>RightSide</div>
        </div>
    )
}

export default Home
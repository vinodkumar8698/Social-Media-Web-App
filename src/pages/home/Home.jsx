import React from "react";
import ProfileSide from "../../components/profileSide/profileSide";
import './Home.css';

const Home = () => {
    return (
        <div className='Home'>
            <ProfileSide />
            <div className="postSide">Posts</div>
            <div className="rightSide">Rightside</div>
        </div>
    );
}
export default Home;
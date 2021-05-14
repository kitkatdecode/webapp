import React from 'react';
import { Link } from 'react-router-dom';
import Kartik from '../img/kartik.jpg';

const Profile = () => {
  return (
    <div className="center">
        <div className="card">
            <div className="card-image">
                <img src={Kartik} alt="Profile" />
                <span className="card-title">Kartik</span>
            </div>
            <div className="card-content">
                <p>Computer Science and Enginnering graduate. IIT Kharagpur'21</p>
            </div>
            <div className="card-action">
                <Link to='/profile'>Read more...</Link>
            </div>
        </div>
   </div> 
  )
}

export default Profile;
import React from "react";

const Friend =({avatar, name, handle, location, link}) => (
    <div className="card-info">
        <div className="header">
            <img src={avatar} alt="profile avatar" style={{width: '100px'}} />
            <h2 className="name">{name}</h2>
        </div>
        <div className="body">
            <h4 className="username">{handle}</h4>
            <p className="location">{location}</p>
            <a href={link}>Profile</a>
        </div>
    </div>
);

export default Friend;
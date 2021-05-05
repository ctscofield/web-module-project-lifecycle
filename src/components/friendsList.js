import React, { Component } from "react";
import axios from "axios";
import Friend from "./Friend"


class FriendsList extends Component {
    state = {
        friends: []
    }

    componentDidMount() {
        axios   
            .get("https://api.github.com/users/ctscofield/followers")
            .then(res => {
                console.log(res.data)
                this.setState({
                    friends: res.data
                });
                
            })
            .catch(err => {
                console.log(err)
            })
    }



    render() {
        return(
            <div className="box friends">
                {this.state.friends.map((friend) => (
                    <Friend
                        avatar={friend.avatar_url}
                        name={friend.name}
                        handle={friend.login}
                        location={friend.location}
                        link={friend.html_url}
                        key={friend.id}
                    />
                ))}
                
            </div>
        )
    }
}

export default FriendsList;
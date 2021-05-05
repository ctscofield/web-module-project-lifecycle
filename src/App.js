import React from "react";
import axios from "axios";
import FriendsList from "./components/friendsList";

class App extends React.Component {
  state = {
    me: [],
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/ctscofield`)
      .then(res=> {
        console.log(res.data)
        this.setState({
          me: res.data
        });
        })
        .catch(err => {
            console.log(err);
        });
}

  render() {
    return (
      <div className="card">
        <div className="card-info">
          <div className="header">
            <img src={this.state.me.avatar_url} alt="profile avatar" style={{width: '100px'}} />
          </div>
          <div className="body">
            <h4 className="username">{this.state.me.login}</h4>
            <p className="location">{this.state.me.location}</p>
            <a href={this.state.me.html_url}>Profile</a>
          </div>
        </div>
        <FriendsList />
      </div>
    );
  }  
}

export default App;

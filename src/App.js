import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    me: [],
    friends: []
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
      <div className="App">
        <h1>My Github and friends</h1>
        <div>
          <img src={this.state.me.avatar_url} alt="profile avatar" style={{width: '180px', height: '240px'}} />
          <h2>{this.state.me.name}</h2>
          <h4>Handle: {this.state.me.login}</h4>
          <p>{this.state.me.location}</p>
          <a href={this.state.me.html_url}>Profile</a>
          

        </div>
      </div>
    );
  }  
}

export default App;

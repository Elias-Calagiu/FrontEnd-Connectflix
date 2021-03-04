import React, { Component } from 'react'
import CardBtn from "../CardBtn"
import API from "../../utils/API"
import axios from 'axios'

export default class Friends extends Component {
    constructor(props){
        super(props)
        var friendObject = {
            FriendId: [1],
            username: "eli",
            first_name: "eli",
            last_name: "cala"
        }
        this.state = {
          Friend: [friendObject],
          token:"",
          // isLoggedin: false
        }
      }

      componentDidMount = () => {
        const token = localStorage.getItem("token")
        if(token){
            this.setState({
                token: token
            })
        }
        API.getUsers()
        .then(response => {
            console.log(this.state.Friend);
            for (let i = 0; i < response.length; i++) {
                var friendObject = {
                    FriendId: response[i].id,
                    username: response[i].username,
                    first_name: response[i].first_name,
                    last_name: response[i].last_name,

                }
                this.setState({
                    Friend: this.state.Friend.concat(friendObject)
                })
            }
            console.log(this.state.Friend);
        })
    }


    handleBtnClick = event => {
        // Get the data-value of the clicked button
        const btnType = event.target.attributes.getNamedItem("data-value").value;
        if (btnType === "find-friends") {
            axios.defaults.headers.common["Authorization"] = `Bearer ${this.state.token}`;

            axios.get("http://localhost:8080/api/users", ).then(data => console.log(data)).catch(err => console.log(err))
        } else {
            console.log("no friends lol");  
        }
    } 
    render() {
        return (
            <div>
                {/* <p>{this.state.Friend[0].id}</p>
                <p>{this.state.Friend[0].username}</p>
                <p>{this.state.Friend[0].first_name}</p>
                <p>{this.state.Friend[0].last_name}</p> */}
                <CardBtn
                    onClick={this.handleBtnClick}
                    data-value="find-friends"
                />
                {/* <CardBtn
                    onClick={this.handleBtnClick}
                    data-value="add-friend"
                /> */}
            </div>
        )
    }
}

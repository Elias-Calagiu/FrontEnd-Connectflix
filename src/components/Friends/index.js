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
        // var friendState = this.state.Friend
        API.getUsers()
        .then(response => {
            console.log(this.state.Friend);
            for (let i = 0; i < response.data.length; i++) {
                var friendObject = {
                    FriendId: response.data[i].id,
                    username: response.data[i].username,
                    first_name: response.data[i].first_name,
                    last_name: response.data[i].last_name,

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
        // if (this.state.Friend.length > 1) {
        var friendState = this.state.Friend.shift()
        console.log(friendState);
        if (btnType === "find-friends") {
            axios.defaults.headers.common["Authorization"] = `Bearer ${this.state.token}`;

            axios.get("http://localhost:8080/api/users", friendState).then(data => console.log(data)).catch(err => console.log(err))
            
        } 
        this.setState({
            Friend: this.state.Friend
        })
        }
        // else {
    //         console.log("no friends lol");  
    //     }
    // } 
    render() {
        return (
            <div>
                <p>{this.state.Friend[0].id}</p>
                <p>{this.state.Friend[0].username}</p>
                <p>{this.state.Friend[0].first_name}</p>
                <p>{this.state.Friend[0].last_name}</p>
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

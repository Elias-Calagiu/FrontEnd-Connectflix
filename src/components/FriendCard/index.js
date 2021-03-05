import React, { Component } from 'react'
import Wrapper from '../Wrapper'

export default class FriendCard extends Component {
    constructor(props){
        super(props)
        // this.state={
        //     id: props.id,
        //     username: props.username,
        //     first_name:props.first_name,
        //     last_name:props.last_name
        // }
    }
    render() {
        return (
        <Wrapper>
                    <div>
                    <p>id: { this.props.id}</p>
                    <p>username: {  this.props.username}</p>
                    <p>First Name: {this.props.first_name}</p>
                    <p>Last Name: { this.props.last_name}</p>
                    <button onClick={()=>{this.props.addFriend(this.props.id)}}>Add Friend</button>
                    </div>
                
        </Wrapper>
            
        )
    }
}

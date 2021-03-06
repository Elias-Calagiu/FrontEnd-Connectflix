import React, { Component } from 'react'
import SwipeCardBtn from "../SwipeCardBtn"
import API from "../../utils/API"
import axios from 'axios'
// import {Button} from '@material-ui/core/Button';
// import { response } from 'express'
// import Card from "../Card"
export default class Swipe extends Component {
    constructor(props) {
        super(props)
        var movieObject = {
            title: "",
            poster: "",
            imdb: [],
            synopsis: "",

        }
        this.state = {
            search: "",
            movies: [movieObject],
            results: [],
            image: "",
            error: "",
            token: ""
        };
    }

    componentDidMount = () => {
        const token = localStorage.getItem("token")
        if(token){
            this.setState({
                token: token
            })
        }
        API.getMovies()
            // console.log(API.getMovies());
            .then(response => {
                // log entire response to see if there is an id for the movie we can match together to record users liked the same movie
                console.log(this.state.movies);
                for (let i = 0; i < response.data.results.length; i++) {
                    var movieObject = {
                        title: response.data.results[i].title,
                        poster: response.data.results[i].poster,
                        imdb: response.data.results[i].imdbrating,
                        synopsis: response.data.results[i].synopsis,

                    }
                    this.setState({
                        movies: this.state.movies.concat(movieObject)
                    })
                }
                console.log(this.state.movies);

            }

            )
        //   .then(res => this.setState({ movies: res.data }))
        //   .catch(err => console.log(err));
    }





    handleBtnClick = event => {
        // Get the data-value of the clicked button
        const btnType = event.target.attributes.getNamedItem("data-value").value;
        // Clone this.state to the newState object
        // We'll modify this object and use it to set our component's state
        const newState = { ...this.state };

        if (this.state.movies.length > 1) {
            // set a counter and loop through it
            // find a more react way to pop the first object in the array
            var movieState= this.state.movies.shift()
            console.log(movieState);
            if (btnType === "pick") {
                axios.defaults.headers.common["Authorization"] = `Bearer ${this.state.token}`;
                API.getUserFriendLikes()
                .then(response =>{
                    console.log(response);
                    for (let i = 0; i < response.data[0].Friend[0].Likes.length; i++) {
                        if(movieState===response.data[0].Friend[0].Likes[i].title){
                          alert("IT'S A MATCH")
                        }
                }
            })
                
                axios.post("http://localhost:8080/api/likes", movieState).then(data=>console.log(data)).catch(err=>console.log(err))
                // axios request to retrieve all logged in user's friend's and the movies those friends liked
                
                
            }
            
            this.setState({
                movies: this.state.movies
            })
        } else {
            API.getMovies()
                .then(response => {
                    console.log(this.state.movies);
                    for (let i = 0; i < response.data.results.length; i++) {
                        var movieObject = {
                            title: response.data.results[i].title,
                            poster: response.data.results[i].poster,
                            imdb: response.data.results[i].imdbrating,
                            synopsis: response.data.results[i].synopsis,

                        }
                        this.setState({
                            movies: this.state.movies.concat(movieObject)
                        })
                    }
                    console.log(this.state.movies);

                })
            
        }
    }
    render() {

        return (
            <div
                className="card"

            // style={{
            //     backgroundImage: this.props.results[0].poster
            // }}

            >
                <p>{this.state.movies[0].title}</p>
                <img src={this.state.movies[0].poster} />
                <p>{this.state.movies[0].imdb}</p>
                <p>{this.state.movies[0].synopsis}</p>
                {!this.props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
                <SwipeCardBtn
                    onClick={this.handleBtnClick}
                    data-value="pass"
                />
                <SwipeCardBtn
                    onClick={this.handleBtnClick}
                    data-value="pick"
                />
            </div>
        )
    }
}

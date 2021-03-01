import React, { Component } from 'react'
import CardBtn from "../CardBtn"
import API from "../../utils/API"
import {Card} from "antd"
// import Card from "../Card"
export default class Swipe extends Component {
    constructor(props){
        super(props)
        var movieObject = {
            title: "test",
            poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAzMjAwNzc1MzVeQTJeQWpwZ15BbW",
            imdb: "imdb",
            synopsis: "synopsis",
            
        }
        this.state = {
            search: "",
            movies: [movieObject],
            results: [],
            image: "",
            error: ""
          };
    }
   
    componentDidMount = ()=> {
        API.getMovies()
        // console.log(API.getMovies());
        .then(response =>{
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
           
        },
            
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
        // console.log(this.state);
        var movieState= this.state.movies.shift()
        console.log(movieState);
        this.setState({
            movies: this.state.movies
        })
        if (btnType === "pick") {
          // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
        //   newState.match = 1 === Math.floor(Math.random() * 5) + 1;
    
    //       // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the dog likes us
    //       newState.matchCount = newState.match
    //         ? newState.matchCount + 1
    //         : newState.matchCount;
    //     } else {
    //       // If we thumbs down'ed the dog, we haven't matched with it
    //       newState.match = false;
    //     }
    //     // Replace our component's state with newState, load the next dog image
    //     this.setState(newState);
    //     this.loadNextMovie();
      };
    //   loadNextMovie = () => {
    //     API.getMovies()
    //       .then(res =>
    //         this.setState({
    //           image: res.data.results[0].poster
    //         })
    //       )
    //       .catch(err => console.log(err));
    //   };
    //   handleInputChange = event => {
    //     this.setState({ search: event.target.value });
    //   };
    
    //   handleFormSubmit = event => {
    //     event.preventDefault();
    //     API.getDogsOfBreed(this.state.search)
    //       .then(res => {
    //         if (res.data.status === "error") {
    //           throw new Error(res.data.message);
    //         }
            // this.setState({ results: res.data.message, error: "" });
        //   })
    //       .catch(err => this.setState({ error: err.message }));
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
                <img src={this.state.movies[0].poster}/>
                <p>{this.state.movies[0].imdb}</p>
                <p>{this.state.movies[0].synopsis}</p>
                {!this.props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
                <CardBtn
                    onClick={this.handleBtnClick}
                    data-value="pass"
                />
                <CardBtn
                    onClick={this.handleBtnClick}
                    data-value="pick"
                />
            </div>
        )
    }
}

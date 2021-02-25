import React, { Component } from 'react'
import CardBtn from "../CardBtn"
import API from "../../utils/API"
export default class Genre extends Component {
    state = {
        search: "",
        movies: [],
        results: [],
        error: ""
      };
    componentDidMount() {
        API.getGenres()
        //   .then(res => this.setState({ movies: res.data }))
        //   .catch(err => console.log(err));
      }
    
      handleInputChange = event => {
        this.setState({ search: event.target.value });
      };
    
    //   handleFormSubmit = event => {
    //     event.preventDefault();
    //     API.getDogsOfBreed(this.state.search)
    //       .then(res => {
    //         if (res.data.status === "error") {
    //           throw new Error(res.data.message);
    //         }
    //         this.setState({ results: res.data.message, error: "" });
    //       })
    //       .catch(err => this.setState({ error: err.message }));
    render() {
        return (
            <div
                className="card"
                
                style={{
                    backgroundImage: this.props.image ? `url(${this.props.img})` : "none"
                }}
                
            >
                {!this.props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
                <CardBtn
                    onClick={this.props.handleBtnClick}
                    data-value="pass"
                />
                <CardBtn
                    onClick={this.props.handleBtnClick}
                    data-value="pick"
                />
            </div>
        )
    }
}

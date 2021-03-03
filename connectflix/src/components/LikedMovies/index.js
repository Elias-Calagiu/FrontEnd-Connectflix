import "./style.css";
import axios from "axios"
import React, { Component } from 'react'

export default class LikedMovies extends Component {
  constructor(props){
    super(props)
    this.state = {
      movie_title: "",
      movie_genre: "",
      redirect: null
    }
  }
}
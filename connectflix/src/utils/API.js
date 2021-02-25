import React from "react"
import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://unogsng.p.rapidapi.com/search',
  params: {
    start_year: '1972',
    orderby: 'rating',
    audiosubtitle_andor: 'and',
    limit: '10',
    subtitle: 'english',
    countrylist: '78,46',
    audio: 'english',
    country_andorunique: 'unique',
    offset: '0',
    end_year: '2019'
  },
  headers: {
    'x-rapidapi-key': 'cf26f75fedmsh908d182a13ab0aap13e5dejsn966016d6915d',
    'x-rapidapi-host': 'unogsng.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
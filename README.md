# ConNectFlix
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/)

Social app allowing users to quickly arrive at a movie both parties are interested in viewing. 

*Current build only allows for association between two users as Friend through UserFriend table who must add each other as friends individually. 

## Table of Contents
* [Developers](#developers)
* [Features](#features)
* [Future Development](#'future-development')
* [Product](#product)
* [Technologies](#technologies)
* [License](#license)
* [Questions](#questions)

## Developers
| Name | Email  | Github  | LinkedIn |
| :--: | :----: | :-----: | :------: |
| Elias Calagiu | eliasc81@gmail.com | [![Github](https://i.imgur.com/1c0aVK2.png)](https://github.com/Elias-Calagiu) | [![LinkedIn](https://i.imgur.com/mtOoqnh.png)](https://www.linkedin.com/in/elias-calagiu-18407518a/) |

## Features
* Log in and swipe on Netflix library of movies
* Add friend and swipe together until you find a mutual matched movie
* Create new users
* Database allows for associations between users 

## Future Development
* Allow users to add many users to groups and swipe together
* Better API user input capability - allow for swiping based on movie genre
* Mobile Responsiveness

## Product
[Deployment on Heroku](https://uw-meets.herokuapp.com/)

1. Signup Screen

![Screenshot](https://raw.githubusercontent.com/Elias-Calagiu/FrontEnd-Connectflix/dev/signup%20page%20connectflix.PNG)


*Not sure what's gone wrong, I had a button until one of my commits at about midnight March 5th, but it's gone now. Pressing enter will submit the form and create user in database, however. 

2. Login Screen
![Screenshot](https://raw.githubusercontent.com/Elias-Calagiu/FrontEnd-Connectflix/dev/login%20screen%20connectflix.PNG)


*Click login button after entering created user's info and app will log the user in to the app.


2. Movie Swipe
![Screenshot](https://raw.githubusercontent.com/Elias-Calagiu/FrontEnd-Connectflix/dev/Swipe%20page%20connectflix.PNG)


*Click red dislike button to loop through movie array fetched from API. Clicking green button will insert that movie's onject into databse binding it to the logged in user's ID.

3. Friends Page
![Screenshot](https://raw.githubusercontent.com/Elias-Calagiu/FrontEnd-Connectflix/dev/friends%20page%20connectflix.PNG)


*Navigate to this page by clicking friends in the navbar. On mount, this component will render every user in the database. Click the add friend button to create an association between you and the chosen user.

4. Logging User's Friends and those Friend's Liked Movies


![Screenshot](https://raw.githubusercontent.com/Elias-Calagiu/FrontEnd-Connectflix/dev/logging%20user's%20friend's%20liked%20movies.PNG)

*Haven't yet been able to figure out how to handle the promises in order to post movie object to like model in database and then compare that to the array of movie's your friend has already liked in order to create a movie match.


## Technologies
#### Frontend: 
React, Material-UI, JWT
#### Backend: 
NodeJS, Express, Bcrypt, Sequelize, JAWSDB, uNoGS API, JWT
#### Languages:
![javascript](https://img.shields.io/badge/javascript-97.4%25-yellow)
![html](https://img.shields.io/badge/handlebars-1.7%25-blue)
![css](https://img.shields.io/badge/css-0.9%25-red)

## License
[MIT](./LICENSE) License

## Questions
For questions, contact [Elias-Calagiu](https://github.com/Elias-Calagiu) or email eliasc81@gmail.com

# API-assignment
Assignment 2 - Web API.
Name: Samantha Taylor 
Student Number: 20099324
Features.
A bullet-point list of the ADDITIONAL features you have implemented in the API THAT WERE NOT IN THE LABS (or modifications to existing features)

All Movie information is obtained from assignment API rather than the tmdb website
Signout function added so users can signout - NOT YET FUNTIONAL 
Username displayed after login - NOW WELCOMES USER BY USERNAME


Setup requirements.
After cloning the react app from assignment one and the movieAPI from the labs following steps were taken:

Inside the react app folder:
npm install
npm run start
npm install --save cors
npm run dev


API Configuration
First step consists of creating a ".env" file which contains the following variables: NODEENV, PORT, HOST, mongoDB, secret and TMDB_KEY.
NODEENV=development PORT=8080 HOST= localhost mongoDB= mongodb connection string secret=YourJWTSecret TMDB_KEY = tmdbkey

API Design
/api/movies | GET | Gets a list of movies
/api/movies/tmdb/upcoming | GET | Gets a list of upcoming movies
/api/movies/tmdb/favourites | GET | Gets the users list of favourite movies
/api/movies/tmdb/watchlist | GET | Gets a list movies a user has added to their watchlist
/api/movies/tmdb/similar | GET | Gets a list of similar movies
/api/movies/tmdb/toprated | GET | Gets a list of top rated movies
/api/movies/tmdb/Trending | GET | Gets a list of trending movies
/api/movies/tmdb/nowplaying | GET | Gets a list of movies that are now playing
/api/users | POST | Used for logging in
/api/users?action=register | POST | Used for creating a new user


Security and Authentication
All routes are intended to only be viewed AFTER a user has logged in. However, at the moment there is an issue wherein when a Menu is enabled for the GUI, the authentication no longer works. still actively trying to fix this. 

Integrating with React App
Information is taken now from the TMDB API rather than directly from TMDB. there is also a database link so that if TMDB were to crash, the website would still host information on it rather than crashing. all MUI and pages from the original react assignment are present. 

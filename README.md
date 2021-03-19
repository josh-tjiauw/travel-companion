# Travel Companion

A full stack application written in HTML, CSS Bootstrap, and JavaScript React for curious first-time travelers that wants to see reviews from other travelers who have been there previously. This application utilizes the Google Places API, and Google Geocoding API in order to obtain the city's information such as its name, place ID, longitude/latitude, and image. For the back end, this application sends REST API (GET, POST, PATCH, DELETE) fetch requests to the database. When a user creates a post, the application will send a POST request, querying the post's data via PostgreSQL, and saving it to the database, and when a user wants to view all of a city's posts, the application will fetch a GET request for all of the selected city's posts.

Current Feature List:

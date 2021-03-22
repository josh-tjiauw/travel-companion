# Travel Companion
<p>
A full stack application written in HTML, CSS Bootstrap, and JavaScript React for curious first-time travelers that wants to see reviews from other travelers who have been there previously. This application utilizes the Google Places API, and Google Geocoding API in order to obtain the city's information such as its name, place ID, longitude/latitude, and image. For the back end, this application sends REST API (GET, POST, PATCH, DELETE) fetch requests to the database. When a user creates a post, the application will send a POST request, querying the post's data via PostgreSQL, and saving it to the database, and when a user wants to view all of a city's posts, the application will fetch a GET request for all of the selected city's posts.
 
Check out my demonstration video <a href="https://youtu.be/II0yDt-tzPo">here!</a>
</p>

## Current Feature List:
<ul>
  <li>User can navigate to home, search, and city page using hash routing.</li>
  <li>User can create a visit wishlist.</li>
  <li>User can checkmark their wishlist if they have visited it.</li>
  <li>User can utilize the autocomplete function to search a city.</li>
  <li>User can see a preview image of the city.</li>
  <li>User can write a post about how their experience was travelling to a selected city.</li>
  <li>User can view other user's posts.</li>
</ul>

## Planned Additions:
<ul>
  <li>User can create a profile</li>
  <li>User can view other's profiles</li>
  <li>User can click on a user comment</li>
  <li>Implement a "like" system for user comments</li>
</ul>

## What I learned from this project:
<p>This was my first hands-on solo project using the React.JS framework that I brainstormed and planned using <a href="https://www.figma.com/">Figma (wireframing)</a> and <a href="https://www.dbdesigner.net/">DBDesigner (Database)</a>. In this project, I designed my own database, and queried datas such as user comments to the database using PostgreSQL. I had the opportunity to work with the <a href="https://developers.google.com/maps/documentation/places/web-service/overview">Google Places API</a>, which provides the information I needed for implementing a search autocomplete function, and also providing images of different cities a user can search. With the autocomplete function, I learned the basics of using hooks in react, and the difference between using it and state. Furthermore, I also had my first experience with <a href="https://www.npmjs.com/package/react-axios">Axios</a> in order to fetch a data returned by Google's Places API (a JSON file) and make it into an image file that is usable for the img tag for React. Lastly, I learned how to deploy my app on <a href="https://www.heroku.com/">Heroku</a>, and use their built-in PostgreSQL database instead of having to start my own server each time.</p>

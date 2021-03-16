/* eslint-disable node/handle-callback-err */
require('dotenv/config');
const axios = require('axios');
const express = require('express');
const db = require('./db');
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');
const path = require('path');

const app = express();
app.use(staticMiddleware);

const jsonMiddleware = express.json();
app.use(jsonMiddleware);

app.get('/api/getImageData/:cityName', (req, res, next) => {
  const { cityName } = req.params;
  const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${cityName}&key=${process.env.GOOGLE_API_KEY}&inputtype=textquery&fields=photos`;
  axios.get(url)
    .then(response => {
      res.json({ imageData: `https://maps.googleapis.com/maps/api/place/photo?photoreference=${response.data.candidates[0].photos[0].photo_reference}&key=${process.env.GOOGLE_API_KEY}&maxwidth=768` });
    })
    .catch(error => {
      next(error);
    });
});

app.get('/api/toVisit', (req, res, next) => {
  const sql = `
    select *
      from "toVisit"
      order by "toVisitId"
  `;
  db.query(sql)
    .then(result => res.json(result.rows))
    .catch(err => next(err));
});

app.post('/api/toVisit', (req, res, next) => {
  const { cityName, isCompleted = false } = req.body;
  if (!cityName || typeof isCompleted !== 'boolean') {
    res.status(400).json({
      error: 'city name, and isCompleted are required fields'
    });
    return;
  }
  const sql = `
  insert into "toVisit" ("cityName", "isCompleted", "createdBy")
  values ($1, $2, 1)
  returning *
  `;

  const params = [cityName, isCompleted];
  db.query(sql, params)
    .then(result => {
      const [plan] = result.rows;
      res.status(201).json(plan);
    })

    .catch(err => {
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.patch('/api/toVisit/:toVisitId', (req, res) => {
  const toVisitId = parseInt(req.params.toVisitId, 10);
  if (!Number.isInteger(toVisitId) || toVisitId < 1) {
    res.status(400).json({
      error: 'toVisitId must be a positive integer'
    });
    return;
  }
  const { isCompleted } = req.body;
  if (typeof isCompleted !== 'boolean') {
    res.status(400).json({
      error: 'isCompleted (boolean) is a required field'
    });
    return;
  }
  const sql = `
    update "toVisit"
    set "isCompleted" = $1
    where "toVisitId" = $2
    returning *
  `;
  const params = [isCompleted, toVisitId];
  db.query(sql, params)
    .then(result => {
      const [todo] = result.rows;
      res.json(todo);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occurred'
      });
    });
});

app.get('/api/city/:placeId/posts', (req, res, next) => {
  const { placeId } = req.params;
  const sql = `
    select "body", "firstName", "lastName", "placeId", "postId", "recActivities", "recRestaurants", "userId"
      from "posts", "users"
      where "placeId" = $1
      order by "postId"
  `;
  const params = [placeId];
  db.query(sql, params)
    .then(result => res.json(result.rows))
    .catch(err => next(err));
});

app.post('/api/city/:placeId/posts', (req, res, next) => {
  const params = [req.body.body, req.body.recRestaurants, req.body.recActivities, req.body.placeId];
  if (params[0] === '') {
    res.json('Cannot leave this field blank.');
    res.status(400);
    return;
  }
  const sql = `
  insert into "posts" ("body", "recRestaurants", "recActivities", "placeId", "createdBy")
  values ($1, $2, $3, $4, 1)
  returning *
  `;

  db.query(sql, params)
    .then(result => {
      const review = result.rows[0];
      res.status(201).json(review);
    })

    .catch(err => {
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.use((req, res) => {
  res.sendFile('/index.html', {
    root: path.join(__dirname, 'public')
  });
});

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});

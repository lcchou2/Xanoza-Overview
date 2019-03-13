const {Pool} = require('pg');

const pool = new Pool({
  host: 'ec2-54-219-132-87.us-west-1.compute.amazonaws.com',
  user: 'lawrencechou',
  password: 'lawrence',
  database: 'overview',
  port: 5432
});

const getResInfo = (resId, cb) =>{
  const query = `SELECT * from listings where id = ${resId}`;
  pool.query(query, (err,data) => {
    if (err) {
      cb(err);
      return;
    }

    cb(null,data)
  })
}

const getResRatings = (resId, cb) => {
  const query = `SELECT listings.id, ratings.username, ratings.gender, ratings.ratings FROM ratings INNER JOIN listings ON listings.id = ratings.res_id WHERE ratings.res_id = ${resId};`;
  pool.query(query, (err, ratings) => {
    if (err) {
      cb(err);
      return;
    }
    cb(null, ratings);
  });
};

const addRating = (ratings, cb) => {
  const query = `INSERT INTO ratings (res_id, username,ratings, gender) VALUES ($1,$2,$3,$4)`
  const params = [ratings.res_id, ratings.username, ratings.ratings, ratings.gender]

  pool.query(query, params, (err)=>{
    if (err) {
      cb(err);
      return;
    }

    cb(null)
  })
}

// {
//   'res_id': 12312,
//   'username':larrychou,
//   'ratings' : 5,
//   'gender': 'M'
// }


module.exports= {
  getResInfo,
  getResRatings,
  addRating
}

















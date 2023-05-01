const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "movies_db",
});
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//middleware



//make a route api/netflix
app.get('/api/netflix', (req,res) =>{
  db.query(`SELECT * FROM netflixs`,(err,data) => {
    if(err){
      res.status(500).json({msg:"error error error", err: err})
    }
     res.json(data);
  })



})
//make a route for api/reviews
app.get('/api/reviews',(req,res)=>{
  db.query(`SELECT review, movie_name FROM reviews
  JOIN netflixs
  ON reviews.netflix_id= netflixs.id`,(err,data)=>{
    if(err){
      res.status(500).json({msg:"whoops whoops! failed to load", err:err})
    }
    res.json(data);
  })
})
//route to post

app.post('/api/new-netflix',(req,res)=>{
  db.query(`INSERT INTO netflixs (movie_name) VALUES = (?)`, req.body.movie_name ,(err,data)=>{
    if(err){
      res.status(500).json({msg:"Whoops Whoops error loading",err:err})
    }
     res.json(data);
  })

})
// route to edit a review
app.put('/api/reviews/:id',(req,res)=>{
  db.query(``, [req.body.reviews, req.params.id] ,(err,data)=>{
    if(err){
      res.status(500).json({msg:"Whoops Whoops error loading",err:err})
    }
     res.json(data);
  })

})
// rote to delete a movie
app.delete("/api/netflix/:id", (req, res) =>{
  res.send("delete ")
})







// listening route
app.listen(PORT,()=>{
  console.log(`listening on ${PORT}`);
})
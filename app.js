const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

// Create MySQL connection
const connection = mysql.createConnection({
    //host: 'localhost',
    //user: 'root',
    //password: '',
    //database: 'coding_proj'
    host: 'sql.freedb.tech',
    user: 'freedb_codingproject',
    password: 'dRm*$RMgCt3GPv7',
    database: 'freedb_nhwgavin',
    port: '3308'
});
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});
const app = express();
const PORT = 3000;

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define routes using Express
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/workout', (req, res) => {
  connection.query('SELECT * FROM workout', (error, results) => {
      if (error) throw error;
      res.render('workout', { workout: results }); 
  });
}); 


app.get('/membership', (req, res) => {
  res.render('membership', { pageTitle: 'Membership Page' });
});

app.get('/addWorkout', (req, res) => {
  res.render('addWorkout');
});
app.post('/addWorkout', (req, res) => {
  const { Name, GymExerciseType, TotalSets, Date } = req.body;
  const sql = 'INSERT INTO workout (Name, GymExerciseType, TotalSets, Date) VALUES (?, ?, ?, ?)';
  connection.query(sql, [Name, GymExerciseType, TotalSets, Date], (error, results) => {
    if (error) {
      console.error("Error adding workout:", error);
      res.status(500).send('Error adding workout: ' + error.message); 
    } else {
      res.redirect('/workout');
    }
  });
});
app.get('/editWorkout/:id', (req, res) => {
  const RecordID = req.params.id;
  const sql = 'SELECT * FROM workout WHERE RecordID = ?';
  connection.query(sql, [RecordID], (error, results) => {
      if (error) {
          console.error('Database query error:', error.message);
          return res.status(500).send('Error retrieving student by ID');
      }
      if (results.length > 0) {
          res.render('editWorkout', { workout: results[0] })
      } else {
          res.status(404).send('Student not found');
      }
  });
});
app.post('/editWorkout/:id', (req, res) => {
  const RecordID = req.params.id;
  const { Name, GymExerciseType, TotalSets, Date } = req.body;

  const sql = 'UPDATE workout SET Name = ? , GymExerciseType = ?, TotalSets = ?, Date =? WHERE RecordID = ?';

  connection.query(sql, [Name, GymExerciseType, TotalSets, Date, RecordID], (error, results) => {
      if (error) {
          console.error("Error updating student:", error);
          res.status(500).send('Error updating student');
      } else {
          res.redirect('/workout');
      }
  });
});

app.get('/deleteWorkout/:id', (req, res) => {
  const RecordID = req.params.id;
  const sql = 'DELETE FROM workout WHERE RecordID = ?';
  connection.query(sql, [RecordID], (error, results) => {
      if (error) {
          console.error("Error deleting workout record:", error);
          res.status(500).send('Error deleting workout record');
      } else {
          res.redirect('/workout');
      }
  });
});


app.get('/rent', (req, res) => {
  res.render('rent');
});


app.get('/renttable', (req, res) => {
  connection.query('SELECT * FROM rent', (error, results) => {
      if (error) throw error;
      res.render('renttable', { rent: results }); 
  });
}); 

app.get('/addrent', (req, res) => {
  res.render('addrent');
});
app.post('/addrent', (req, res) => {
  const { Name, Location, Date } = req.body;
  const sql = 'INSERT INTO rent (Name, Location, Date) VALUES (?, ?, ?)';
  connection.query(sql, [Name, Location, Date], (error, results) => {
    if (error) {
      console.error("Error adding rent:", error);
      res.status(500).send('Error adding rent: ' + error.message); 
    } else {
      res.redirect('/renttable');
    }
  });
});
app.get('/editrent/:id', (req, res) => {
  const RentID = req.params.id;
  const sql = 'SELECT * FROM rent WHERE RentID = ?';
  connection.query(sql, [RentID], (error, results) => {
      if (error) {
          console.error('Database query error:', error.message);
          return res.status(500).send('Error retrieving rent by ID');
      }
      if (results.length > 0) {
          res.render('editrent', { rent: results[0] })
      } else {
          res.status(404).send('Rent not found');
      }
  });
});
app.post('/editrent/:id', (req, res) => {
  const RentID = req.params.id;
  const { Name, Location, Date } = req.body;

  const sql = 'UPDATE rent SET Name = ? , Location = ?, Date =? WHERE RentID = ?';

  connection.query(sql, [Name, Location, Date, RentID], (error, results) => {
      if (error) {
          console.error("Error updating rent:", error);
          res.status(500).send('Error updating rent');
      } else {
          res.redirect('/renttable');
      }
  });
});

app.get('/deleterent/:id', (req, res) => {
  const RentID = req.params.id;
  const sql = 'DELETE FROM rent WHERE RentID = ?';
  connection.query(sql, [RentID], (error, results) => {
      if (error) {
          console.error("Error deleting rent record:", error);
          res.status(500).send('Error deleting rent record');
      } else {
          res.redirect('/renttable');
      }
  });
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

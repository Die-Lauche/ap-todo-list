import mysql from 'mysql';

const database = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'root',
  database:'todo'
});

database.connect(function(err) {
  if(err) throw err;
  console.log('Connected!')
});

database.query('SELECT * FROM user', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});
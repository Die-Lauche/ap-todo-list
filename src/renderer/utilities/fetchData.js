// TODO Add the fetching of data from the database
database.query('SELECT * FROM user', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
  });
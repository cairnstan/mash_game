var pg = require('pg');

var connectionString;

if(process.envDATABASE_URL) {
  pg.defaults.ssl = true;
  connectionString = process.env.DATABASE_URL;
} else{
  connectionString = 'postgres://localhost:5432/MASH';
}

function initializeDB(){
  pg.connect(connectionString, function(err, client, done){
    if(err) {
      console.log('Error connecting to DB!', err);
      process.exit(1);
    }else {
      ////need to add in multiple tables- what is the syntax for this?
      //need to change this for mash_data and categories tables
      var query = client.query('CREATE TABLE IF NOT EXISTS testTable (' +
      'id SERIAL PRIMARY KEY,' +
      'inputName varchar(80) NOT NULL,' +
      'cat int);'
    );

    query.on('end', function(){
      console.log('Successfully ensured schema exists');
      done();
    });
    query.on('error', function(){
      console.log('Error creating schema');
      process.exit(1);
    });
    }
  });
}

module.exports.connectionString = connectionString;
module.exports.initializeDB = initializeDB;

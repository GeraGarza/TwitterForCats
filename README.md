# TwitterForCats
Uses Monk, Grunt, express

//  npm init to make package folder
//  npm install express 
//  makes node_models folder which has all dependencies of express
//  npm install nedb ; this is for the db https://github.com/louischatriot/nedb
//  npm install --save-dev nodemon // this will let the server rebuild ever time its updated
//  npm install jquery,popper, then bootstrap
//  https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch 
//  https://expressjs.com/en/4x/api.html#express routing,getting,posting,etc.

//  npm install grunt --save-dev
//  npm install -g grunt-cli
// npm install grunt-contrib-watch --save-dev
//  npm install -g live-server

//  npm install cors // removes access-control-allow-origin eror (when submit form)

//  npm run dev // updates server consistently 
//  live-server // to run front end on 8080 (client)

// mongod --dbpath=/data --port 27017
//  mongoDB --> monk
//  npm install mongodb
// npm install monk

//  https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
//  mongod --dbpath=/data --port 27017
//  "C:\Program Files\MongoDB\Server\4.2\bin\mongod.exe" --dbpath="c:\data\db"



// app.use(express.static('.'))   // where is the index.html, here.

// const database = new Datastore('database.db');
// database.loadDatabase();
// // database.insert({name:"Garza", status: '😁'})

// What im running always
/*
C:\Users\Gera\Documents\Projects\BasicWebsite>          grunt watch
C:\Users\Gera\Documents\Projects\BasicWebsite\client>   live-server
C:\Users\Gera\Documents\Projects\BasicWebsite>          npm run dev
C:\Users\Gera\Documents\Projects\BasicWebsite>          mongo
C:\Users\Gera\Documents\Projects\BasicWebsite>          mongo --dbpath="c:\data" --port 27017

use <db>    // Switch current database to <db>. The mongo shell variable db is set to the current database.
show collections    //Print a list of all collections for current database.
show users  //Print a list of users for current database.
show roles  //Print a list of all roles, both user-defined and built-in, for the current database.
db.mews.find().pretty() //show elements in collection

*/

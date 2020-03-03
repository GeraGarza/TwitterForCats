
//----- SERVER SIDE -----
const express = require('express');
const cors = require('cors');
const monk = require('monk');
const Filter = require('bad-words');
// const rateLimit = require('express-rate-limit');

// const Datastore = require('nedb')
const app = express();

// const db = monk('localhost/meower')
//  mlab to deploy mogodb
// now secret add mewower-db mogodb://<dbuser>:><dbpassword>@sdsadada.com:432/mewower
const db = monk(process.env.MONGO_URI || 'localhost/meower')
 
// deploy backend in zeit.co (now) 
//  now -e MONGO_URI=@meower-db
//  now alias https://server-xcbctndkeg.now.sh meower-api

//  front end deploy
//  cd to client --> now
//  now alias https://server-xcbctndkeg.now.sh meower

db.then(() => {
    console.log('Connected correctly to server');
})

// const db = require('monk')('localhost/meower')

const mews = db.get('mews');    // mews is a collection inside db
const filter = new Filter();

app.use(cors());
//give client correct body type
app.use(express.json());

//  port we arent using , callback
app.listen(3000, () => { console.log('listening at 3000') });



app.get('/', (req, res) => {
    res.json({
        message: 'Meower!!'
    });
});

app.get('/mews', (req, res) => {
    //mews represents collection
    mews
        .find()
        .then(mews => {
            res.json(mews);
        });
});

function isValidMew(mew) {
    return mew.name && mew.name.toString().trim() !== '' &&
        mew.content && mew.content.toString().trim() !== '';
}

//one request every thirdy seconds
// app.use(rateLimit({
//     windowMs: 30 * 1000,
//     max: 1
// }));


app.post('/mews', (req, res) => {

    if (isValidMew(req.body)) {
        //   insert into db..
        const mew = {
            name: filter.clean(req.body.name.toString().trim()),
            content: filter.clean(req.body.content.toString().trim()),
            created: new Date()
        };

        mews.insert(mew)
        .then(createdMew => {
            res.json(createdMew);
        });
    } else {
        res.status(422);
        res.json({
            message: 'Hey! no input.'
        });
    }

});

app.delete('/del/:id', function (req, res) {
    var id = req.params.id;
    mews.remove({ _id: id })
    res.json({
        message: 'Hey! Deleted.'
    });
})

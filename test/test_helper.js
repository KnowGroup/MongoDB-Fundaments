const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users_test');
mongoose.connection
        .once('open',() => console.log("Good to go!"))
        .once('error',e => {
           console.error("Error",e);
        });

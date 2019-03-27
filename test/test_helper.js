const mongoose = require('mongoose');

before((done) => {
    mongoose.connect('mongodb://localhost/users_test',{ useNewUrlParser: true });
    mongoose.connection
            .once('open',() => {done();})
            .once('error',e => {
               console.error("Error",e);
            });
});

beforeEach(function (done) {
    mongoose.connection.collections.users.drop(()=>{
        //Ready to run new test
        done();//done call back to ensure the collection cleanup is done
    });
});
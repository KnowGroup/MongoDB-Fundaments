const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of the database', function () {
    let newUser;
    
    beforeEach(function (done) {
        newUser = new User({ name  : 'Mowgli'});
        newUser.save()
            .then(()=>{
                assert(!newUser.isNew);
                done();
            });
        
    });
   
    it('find all users with name as Mowgli', function (done) {
        User.find({ name  : 'Mowgli'})
                .then((users) => {
           //console.log("Id of user fetched "+users[0]._id);  
           //console.log(newUser[0]._id);
           assert(users[0]._id.toString() === newUser._id.toString());
           done();
        });
    });
    
    it('find user with given id ', function (done) {
       User.findOne({ _id: newUser._id})
               .then((user) => {
                   assert(user.name === 'Mowgli');
                 done();
       });
    });
});
const assert = require('assert');
const User = require('../src/user');

describe('Update users in the database', function () {
    let mowgli;
    
    beforeEach(function (done) {
        mowgli = new User({ name  : 'Mowgli'});
        mowgli.save()
            .then(()=>{
                assert(!mowgli.isNew);
                done();
            });
        
    });
    
    function assertName(operation,done){
       operation
       .then(() => {
                      User.find({})
                      .then((users) => {
                          assert(users.length === 1);
                          assert(users[0].name === 'Bagira');
                          done();
                      });
            });
    }
   
    it('instance type using set and save', function (done) {
        //set and save property to save elements to db
            mowgli.set('name','Bagira');
            assertName(mowgli.save(),done);
        });
    
    it('A model instance is updated', function (done) {
        assertName(mowgli.update({name : 'Bagira'}),done);
    });

    it('A Model Class Update ', function (done) {
        assertName(
                User.update({name : 'Mowgli'},{ name : 'Bagira'}),
                done
        );
    });
    
    it('A Model Class findOneAndUpdate ', function (done) {
        assertName(
                User.findOneAndUpdate({name : 'Mowgli'},{ name : 'Bagira'}),
                done
        );
    });
    
    it('A Model Class findIdAndUpdate ', function (done) {
        assertName(
                User.findByIdAndUpdate(mowgli._id,{ name : 'Bagira'}),
                done
        );
    });
});
const assert = require('assert');
const User = require('../src/user');

describe('Remove users out of the database', function () {
    let mowgli;
    
    beforeEach(function (done) {
        mowgli = new User({ name  : 'Mowgli'});
        mowgli.save()
            .then(()=>{
                assert(!mowgli.isNew);
                done();
            });
        
    });
   
    it('model instance remove', function (done) {
        mowgli.remove()
                .then(() => User.findOne({name  : 'Mowgli'}))
                .then((user) => {
                    assert(user === null);                    
                    done();
                });
        });
});
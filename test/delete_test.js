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
        
    it('class method remove - Deprecated', function (done) {
        User.remove({ name  : 'Mowgli'})//Deprecated
        .then(
            () => User.findOne({name  : 'Mowgli'}))
                .then((user) => {
                    assert(user === null);                    
                    done();
                }
        );        
    });
    
    it('class method deleteMany', function (done) {
        User.deleteMany({ name  : 'Mowgli'})//
        .then(
            () => User.findOne({name  : 'Mowgli'}))
                .then((user) => {
                    assert(user === null);                    
                    done();
                }
        );        
    });
    
    it('find one and remove - Deprecated', function (done) {
        User.findOneAndRemove({ name  : 'Mowgli'})//Deprecated
        .then(
            () => User.findOne({name  : 'Mowgli'}))
                .then((user) => {
                    assert(user === null);                    
                    done();
                }
        );   
    });

    it('Class method findOneAndDelete ', function (done) {
        User.findOneAndDelete({ name  : 'Mowgli'})//Deprecated
        .then(
            () => User.findOne({name  : 'Mowgli'}))
                .then((user) => {
                    assert(user === null);                    
                    done();
                }
        );   
    });

    it('Class method findByIdAndRemove ', function (done) {
           User.findByIdAndRemove(mowgli)//Deprecated
           .then(
               () => User.findOne({name  : 'Mowgli'}))
                   .then((user) => {
                       assert(user === null);                    
                       done();
                   }
           );   
       });

});
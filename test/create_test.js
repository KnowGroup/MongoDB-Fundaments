const assert = require('assert');
const User = require('../src/user');

describe('Creating records', function () {
    it('Save a User', function () {
        const adam = new User({name : 'Adam' }); //This new Model doesn't insert in database yet
        adam.save();
    });
});
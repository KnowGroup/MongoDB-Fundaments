const assert = require('assert');
const User = require('../src/user');

describe('Validating Records', function () {
    
    it('Requires Username', function () {
        const user = new User({name : undefined});
        const validationResult = user.validateSync(); // Async validation process
        
        assert(validationResult.errors.name.message === 'Name is required');
    });
    
    it('requires a user with name greater than 2 characters', function () {
        const user = new User({name : 'AM'});
        const validationResult = user.validateSync(); 
        
        const { message } = validationResult.errors.name;
        
        assert(message === 'Name must be greater than 2 characters');
    });
    
    it('disallow invalid records for being saved', function () {
        const user = new User({name : 'AL'});
        user.save()
                .catch((validationResult) => {
           
           const {message} = validationResult.errors.name;
            assert(message === 'Name must be greater than 2 characters');            
        });
        
    });
});
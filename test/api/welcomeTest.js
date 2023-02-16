const { describe } = require('mocha');

const assert = require('chai').assert;
const app = require('../../aserrt')


// Asserting
// cara assert menggunakan chai
describe('Welcome Test', function(){
    it('app should return welcome message', () => {
        assert.equal(app(), "Welcome to QA Course")
    });
})
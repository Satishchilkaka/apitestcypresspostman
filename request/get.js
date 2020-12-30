
const expect = require('chai').expect;
const nock = require('nock');

describe('Get User tests', () => {
  

    it('get customer', (done, response) => {

        nock('{{host}}/v2/api/store/{{id}}')
        .get('/customer')
        .reply(200, response).then(response => {
            console.log(response)
            expect(response.status).to.equal('200')
            done();
        })
        
        
        
    })
})
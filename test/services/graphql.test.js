/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

const assert = require('assert');
const app = require('../../src/app');

/**
 * Used for performing HTTP requests
 * @link https://www.npmjs.com/package/request-promise
 * @type {Function}
 */
const request = require('request-promise');
/**
 * Default request options
 * @type {Object}
 */
var requestOptions = {
  method: 'POST',
  baseUrl: 'http://localhost:3030',
  uri: '/graphql',
  body: {
    query: ''
  },
  headers: {},
  json: true
};

describe('\'graphql\' service', () => {
  before(function(done) {
    this.server = app.listen(3030);
    this.server.once('listening', () => done());
  });

  after(function(done) {
    this.server.close(done);
  });

  it('\'findUsers\' method', (done) => {
    const query = '{ findUsers { id email phone address { street geo { lat } } company { name } } }';
    request(Object.assign(requestOptions, { body: { query } }))
      .then(graphql => graphql.data.findUsers)
      .then(result => {
        // console.log(result.data.findUsers); // eslint-disable-line
        assert.ok(Array.isArray(result), 'Result is array');
        assert.ok(result.length > 1, 'Result is not empty');
        done();
      })
      .catch(error => console.warn(error.toString()));
  });

  it('\'getUser\' method', (done) => {
    const query = '{ getUser(id: 1) { id email phone address { street geo { lat } } company { name  } } }';
    request(Object.assign(requestOptions, { body: { query } }))
      .then(graphql => graphql.data.getUser)
      .then(result => {
        assert.ok(result && result.id === 1, 'Result is not empty');
        done();
      })
      .catch(error => console.warn(error.toString()));
  });

  it('\'createUser\' method', (done) => {
    const query = 'mutation { createUser(user: { name: "John Doe", email: "john.doe@email.foo", phone: "+9012345678", website: "john.jp", address: { street: "The Street from Philadelphia" } }) { id name email address { street suite city zipcode } } }';
    request(Object.assign(requestOptions, { body: { query } }))
      .then(graphql => graphql.data.createUser)
      .then(result => {
        assert.ok(result && result.id === 11, 'Result is not empty');
        done();
      })
      .catch(error => console.warn(error.toString()));
  });

  it('\'updateUser\' method', (done) => {
    const query = 'mutation { updateUser(id: 1, user: { name: "John Doe", email: "john.doe@email.foo", phone: "+9012345678", website: "john.jp", address: { street: "The Street from Philadelphia" } }) { id name email address { street suite city zipcode } } }';
    request(Object.assign(requestOptions, { body: { query } }))
      .then(graphql => graphql.data.updateUser)
      .then(result => {
        assert.ok(result && result.id === 1, 'Result is not empty');
        done();
      })
      .catch(error => console.warn(error.toString()));
  });

  it('\'patchUser\' method', (done) => {
    const query = 'mutation { patchUser(id: 1, name: "John Doe", email: "john.doe@email.foo", phone: "+9012345678", website: "john.jp", address: { street: "The Street from Philadelphia" }) { id name email address { street suite city zipcode } } }';
    request(Object.assign(requestOptions, { body: { query } }))
      .then(graphql => graphql.data.patchUser)
      .then(result => {
        assert.ok(result && result.id === 1, 'Result is not empty');
        done();
      })
      .catch(error => console.warn(error.toString()));
  });

  it('\'removeUser\' method', (done) => {
    const query = 'mutation { removeUser(id: 1) }';
    request(Object.assign(requestOptions, { body: { query } }))
      .then(() => done())
      .catch(error => console.warn(error.toString()));
  });
});

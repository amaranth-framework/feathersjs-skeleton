/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

const assert = require('assert');
const app = require('../../src/app');

/**
 * Used for performing HTTP requests
 * @link https://www.npmjs.com/package/request-promise
 * @type {Function}
 */
const request = require('request-promise');
var requestOptions = {
  method: 'GET',
  baseUrl: 'http://localhost:3030',
  uri: '/users',
  headers: {},
  json: true
};

describe('\'users\' service', () => {
  before(function(done) {
    this.server = app.listen(3030);
    this.server.once('listening', () => done());
  });

  after(function(done) {
    this.server.close(done);
  });

  it('registered the service', () => {
    const service = app.service('users');

    assert.ok(service, 'Registered the service');
  });

  it('\'find\' method', (done) => {
    request(Object.assign(requestOptions, { uri: '/users' })).then(result => {
      assert.ok(Array.isArray(result), 'Result is array');
      assert.ok(result.length > 1, 'Result is not empty');
      done();
    }).catch(error => console.warn(error.toString()));
  });

  it('\'get\' method', (done) => {
    request(Object.assign(requestOptions, { uri: '/users/1' })).then(result => {
      assert.ok(result && result.id === 1, 'Result is not empty');
      done();
    }).catch(error => console.warn(error.toString()));
  });

  it('\'create\' method', (done) => {
    request(Object.assign(requestOptions, { method: 'POST', uri: '/users', body: { title: 'A' } })).then(result => {
      assert.ok(result && result.id === 11, 'Result is not empty');
      done();
    }).catch(error => console.warn(error.toString()));
  });

  it('\'update\' method', (done) => {
    request(Object.assign(requestOptions, { method: 'PUT', uri: '/users/1', body: { title: 'A' } })).then(result => {
      assert.ok(result && result.id === 1, 'Result is not empty');
      done();
    }).catch(error => console.warn(error.toString()));
  });

  it('\'patch\' method', (done) => {
    request(Object.assign(requestOptions, { method: 'PATCH', uri: '/users/1', body: { title: 'A' } })).then(result => {
      assert.ok(result && result.id === 1, 'Result is not empty');
      done();
    }).catch(error => console.warn(error.toString()));
  });

  it('\'remove\' method', (done) => {
    request(Object.assign(requestOptions, { method: 'DELETE', uri: '/users/1' }))
      .then(() => done())
      .catch(error => console.warn(error.toString()));
  });
});

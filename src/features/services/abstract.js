/**
 * Amaranth :: FeathersJS Skeleton (http://github.com/amaranth-framework/feathers-skeleton/)
 *
 * @link      http://github.com/amaranth-framework/feathers-skeleton/ for the canonical source repository
 * @copyright Copyright (c) 2007-2017 IT Media Connect (http://itmediaconnect.ro)
 * @license   http://github.com/amaranth-framework/feathers-skeleton/LICENSE MIT License
 */

/**
 * Used for performing HTTP requests
 * @link https://www.npmjs.com/package/request-promise
 * @type {Function}
 */
const request = require('request-promise');

/**
 * Basic class for custom services. In this skeleton's case, the service will connect with
 * https://jsonplaceholder.typicode.com. Feel free to alter this service according to your needs.
 */
class Service {
  /**
   * @param  {{}}} options
   */
  constructor (options) {
    this.options = options || {};
    this.requestOptions = {
      baseUrl: this.options.baseUrl,
      headers: {},
      json: true,
      method: 'GET',
      // resolveWithFullResponse: true,
      uri: `/${this.options.name}`
    };
  }
  /**
   * Obtain a list of models
   * @param  {{query:{},provider:String}} params
   * @return {Promise}
   */
  find (params) {
    return request(Object.assign({}, this.requestOptions, {
      qs: params.query
    }));
  }
  /**
   * Obtain a model
   * @param  {Number}                     id
   * @param  {{query:{},provider:String}} params
   * @return {Promise}
   */
  get (id, params) {
    return request(Object.assign({}, this.requestOptions, {
      uri: `/${this.options.name}/${id}`,
      qs: params.query
    }));
  }
  /**
   * Create a model
   * @param  {{}}}                        data
   * @param  {{query:{},provider:String}} params
   * @return {Promise}
   */
  create (data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current)));
    }

    return request(Object.assign({}, this.requestOptions, {
      method: 'POST',
      body: data,
      qs: params.query
    }));
  }
  /**
   * Update a model
   * @param  {Number}                     id
   * @param  {{}}}                        data
   * @param  {{query:{},provider:String}} params
   * @return {Promise}
   */
  update (id, data, params) {
    return request(Object.assign({}, this.requestOptions, {
      method: 'PUT',
      uri: `/${this.options.name}/${id}`,
      body: data,
      qs: params.query
    }));
  }
  /**
   * Patch a model (this will update only certain fields in the model, which will be specified)
   * @param  {Number}                     id
   * @param  {{}}}                        data
   * @param  {{query:{},provider:String}} params
   * @return {Promise}
   */
  patch (id, data, params) {
    return request(Object.assign({}, this.requestOptions, {
      method: 'PATCH',
      uri: `/${this.options.name}/${id}`,
      body: data,
      qs: params.query
    }));
  }
  /**
   * Remove a model
   * @param  {Number}                     id
   * @param  {{query:{},provider:String}} params
   * @return {Promise}
   */
  remove (id, params) {
    return request(Object.assign({}, this.requestOptions, {
      method: 'DELETE',
      uri: `/${this.options.name}/${id}`,
      qs: params.query
    }));
  }
}

module.exports = Service;

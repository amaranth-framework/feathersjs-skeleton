/* eslint-disable no-unused-vars */

const request = require('request-promise');

class Service {
  constructor (options) {
    this.options = options || {};
    this.requestOptions = {
      method: 'GET',
      baseUrl: this.options.baseUrl,
      uri: `/${this.options.name}`,
      headers: {},
      json: true
    }
  }

  find (params) {
    return request(Object.assign({}, this.requestOptions, {}));
  }

  get (id, params) {
    return request(Object.assign({}, this.requestOptions, {
      uri: `/${this.options.name}/${id}`
    }));
  }

  create (data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current)));
    }

    return request(Object.assign({}, this.requestOptions, {
      method: 'POST',
      body: data
    }));
  }

  update (id, data, params) {
    return request(Object.assign({}, this.requestOptions, {
      method: 'PUT',
      uri: `/${this.options.name}/${id}`,
      body: data
    }));
  }

  patch (id, data, params) {
    return request(Object.assign({}, this.requestOptions, {
      method: 'PATCH',
      uri: `/${this.options.name}/${id}`,
      body: data
    }));
  }

  remove (id, params) {
    return request(Object.assign({}, this.requestOptions, {
      method: 'DELETE',
      uri: `/${this.options.name}/${id}`
    }));
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;

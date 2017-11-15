/* eslint-disable no-unused-vars */

const AbstractService = require('../../features/services/abstract');

class Service extends AbstractService { }

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;

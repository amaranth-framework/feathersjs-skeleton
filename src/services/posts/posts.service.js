// Initializes the `posts` service on path `/posts`
const createService = require('./posts.class.js');
const hooks = require('./posts.hooks');
const filters = require('./posts.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');
  const baseUrl = app.get('jsonplaceholder');

  const options = {
    name: 'posts',
    paginate,
    baseUrl
  };

  // Initialize our service with any options it requires
  app.use('/posts', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('posts');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};

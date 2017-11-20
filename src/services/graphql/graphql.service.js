/**
 * Amaranth :: FeathersJS Skeleton (http://github.com/amaranth-framework/feathers-skeleton/)
 *
 * @link      http://github.com/amaranth-framework/feathers-skeleton/ for the canonical source repository
 * @copyright Copyright (c) 2007-2017 IT Media Connect (http://itmediaconnect.ro)
 * @license   http://github.com/amaranth-framework/feathers-skeleton/LICENSE MIT License
 */


/**
 * Implementation Demo for GraphQL Query Language
 *
 * @link https://www.npmjs.com/package/apollo-server
 */

import { apolloExpress, graphiqlExpress } from 'apollo-server';
import { makeExecutableSchema/*, addMockFunctionToSchema*/ } from 'graphql-tools';

import Resolvers from './graphql.resolvers';
import Schema from './graphql.schema';

const logger = require('winston');

module.exports = function() {
  const app = this;

  app.use('/graphql', apolloExpress((req) => {
    const queryString = req.body.query.replace(/\n/gi, '').replace(/\s+/gi, ' ');
    logger.info('graphql: ', queryString, JSON.stringify(req.body.variables));
    return {
      schema: makeExecutableSchema({
        typeDefs: Schema,
        resolvers: Resolvers.call(app)
      })
    };
  }));

  app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
  }));
};

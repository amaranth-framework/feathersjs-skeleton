# notes for dev (to be removed)

https://medium.com/fuzz/the-electric-feathersjs-and-apollo-server-the-start-f338a744b34b

# FeathersJS Skeleton

[![TravisCI Status Widget]][TravisCI Status]
<!-- [![Coverage Status Widget]][Coverage Status] -->

[TravisCI Status]: https://travis-ci.org/amaranth-framework/feathersjs-skeleton
[TravisCI Status Widget]: https://travis-ci.org/amaranth-framework/feathersjs-skeleton.svg?branch=master
<!-- [Coverage Status]: https://coveralls.io/r/amaranth-framework/feathersjs-skeleton -->
<!-- [Coverage Status Widget]: https://coveralls.io/repos/github/amaranth-framework/feathersjs-skeleton/badge.svg?branch=master -->

> Skeleton for [REST](https://spring.io/understanding/REST)/GraphQL Applications

## About

This project uses 
* [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.
* [GraphQL](http://graphql.org). A query language for APIs and a runtime for fulfilling those queries with your existing data.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Make sure you have [babel-node/babel-cli](https://www.npmjs.com/package/babel-cli) installed.

    ```
    # sudo if necesary
    npm i -g babel-cli babel
    ```

3. Install your dependencies

    ```
    cd /path/to/feathersjs-skeleton; npm install
    ```

4. Start your app

    ```
    npm start
    ```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g feathers-cli             # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers generate model                 # Generate a new Model
$ feathers help                           # Show all commands
```

GraphQL can be defined under the `/grapqhl` service defined under Feathers, by filling in 
* `src/services/graphql/graphql.resolvers.js`
* `src/services/graphql/graphql.schema.js`
* `src/services/graphql/graphql.service.js`

## Help

For more information on all the things you can do with Feathers visit 
* [docs.feathersjs.com](http://docs.feathersjs.com)
* [graphql.org/learn](http://graphql.org/learn).

## Changelog

__0.1.2__

- Completed GraphQL Demo

## License

Copyright (c) 2016

Licensed under the [MIT license](LICENSE).

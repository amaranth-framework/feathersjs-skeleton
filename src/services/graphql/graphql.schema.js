
const typeDefinitions = `

  type Geo {
    lat: Float
    long: Float
  }

  type Address {
    street: String
    suite: String
    city: String
    zipcode: String
    geo: Geo
  }

  type Company {
    name: String
    catchPhrase: String
    bs: String
  }

  type User {
    id: Int
    name: String
    email: String
    address: Address
    phone: String
    website: String
    company: Company
  }

  type Post {
    id: Int
    userId: Int
    title: String
    body: String
  }

  type RootQuery {
    findUsers(name: String, email: String, phone: String, website: String): [User]
    getUser(id: Int!): User
  }

  type RootMutation {
    createUser(name: String, email: String, phone: String, website: String): User
    updateUser(id: Int!, name: String, email: String, phone: String, website: String): User
    removeUser(id: Int!): Boolean
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }

`;

export default typeDefinitions;

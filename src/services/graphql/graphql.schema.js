
const typeDefinitions = `

  type Geo {
    lat: Float
    long: Float
  }

  input GeoInput {
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

  input AddressInput {
    street: String
    suite: String
    city: String
    zipcode: String
    geo: GeoInput
  }

  type Company {
    name: String
    catchPhrase: String
    bs: String
  }

  input CompanyInput {
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

  input UserInput {
    name: String
    email: String
    address: AddressInput
    phone: String
    website: String
    company: CompanyInput
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
    createUser(user: UserInput): User
    updateUser(id: Int!, user: UserInput): User
    patchUser(id: Int!, name: String, email: String, phone: String, website: String, address: AddressInput, company: CompanyInput): User
    removeUser(id: Int!): Boolean
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }

`;

export default typeDefinitions;


## Query-ing all users

```graphql
{
  findUsers {
    id
    email
    phone
    address {
      street
      geo {
        lat
      }
    }
    company {
      name 
    }
  }
}
```

### Filtering users

```graphql
{
  findUsers(name: "Leanne Graham") {
    id
    email
    phone
    address {
      street
      geo {
        lat
      }
    }
    company {
      name 
    }
  }
}
```

## Query-ing for a user

```graphql
{
  getUser(id: 1) {
    id
    email
    phone
    address {
      street
      geo {
        lat
      }
    }
    company {
      name 
    }
  }
}
```

## Creating a user

```graphql
mutation {
  createUser(user: {
      name: "John Doe", 
      email: "john.doe@email.foo", 
      phone: "+9012345678", 
      website: "john.jp",
      address: {
        street: "The Street from Philadelphia"
      }
  }) {
    id
    name
    email,
    address {
      street
      suite
      city
      zipcode
    }
  }
}
```

## Updating a user

```graphql
mutation {
  updateUser(id: 1, user: {
      name: "John Doe", 
      email: "john.doe@email.foo", 
      phone: "+9012345678", 
      website: "john.jp",
      address: {
        street: "The Street from Philadelphia"
      }
  }) {
    id
    name
    email,
    address {
      street
      suite
      city
      zipcode
    }
  }
}
```

## Patching a user

```graphql
mutation {
  patchUser(id: 1, name: "John Doe", email: "john.doe@email.foo", phone: "+9012345678", website: "john.jp", address: { street: "The Street from Philadelphia" }) {
    id
    name
    email,
    address {
      street
      suite
      city
      zipcode
    }
  }
}
```

## Removing a user

```graphql
mutation {
  removeUser(id: 1)
}
```

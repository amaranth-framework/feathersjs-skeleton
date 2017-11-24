
export default function Resolvers() {
  const app = this;

  const users = app.service('users');

  return {
    RootQuery: {
      findUsers(root, args, context) {
        return users.find({
          query: args
        }, context);
      },
      getUser(root, { id }, context) {
        return users.get(id, context);
      }
    },
    RootMutation: {
      createUser(root, args, context) {
        return users.create(args, context);
      },
      updateUser(root, args, context) {
        let id = args.id
        delete args.id
        return users.update(id, args, context);
      },
      removeUser(root, { id }, context) {
        return users.remove(id);
      }
    }
  };
}

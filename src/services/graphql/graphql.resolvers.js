
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
      createUser(root, { user }, context) {
        return users.create(user, context);
      },
      updateUser(root, { id, user }, context) {
        return users.update(id, user, context).then(() => users.get(id, context));
      },
      patchUser(root, args, context) {
        let id = args.id;
        delete args.id;
        return users.update(id, args, context).then(() => users.get(id, context));
      },
      removeUser(root, { id }, context) {
        return users.remove(id, context);
      }
    }
  };
}

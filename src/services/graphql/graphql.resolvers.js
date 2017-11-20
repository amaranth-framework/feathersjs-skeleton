
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
      // createUser(root, args, context) {
      //   return users.createUser(args, context);
      // },
      removeUser(root, { id }, context) {
        let user = users.get(id, context);
        user.remove(id);
        return user;
      }
    }
  };
}

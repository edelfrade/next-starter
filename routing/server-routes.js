const express = require('express');
const basicAuth = require('express-basic-auth');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const router = express.Router();

router.use(basicAuth({ users: { [process.env.BASIC_USER]: process.env.BASIC_PW } }));

const schema = buildSchema(`
  type Query {
    hello: String
    user(id: Int!): User
    users(city: String): [User]
  },
  type User {
    id: Int
    name: String
  }
`);

const usersData = [
  {
    id: 1,
    name: 'Jason Primer',
    city: 'New York'
  },
  {
    id: 2,
    name: 'John Stamos',
    city: 'New York'
  },
  {
    id: 3,
    name: 'Peter Parker',
    city: 'Miami'
  }
];

const getUser = (args) => {
  var id = args.id;
  return usersData.filter(user => {
    return user.id == id;
  })[0];
}

const getUsers = (args) => {
  if (args.topic) {
    var city = args.city;
    return usersData.filter(user => user.city === city);
  } else {
    return usersData;
  }
}

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return 'Hello world!';
  },
  user: getUser,
  users: getUsers
};

router.use('/', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

module.exports = router;

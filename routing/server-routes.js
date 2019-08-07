const express = require('express');
const basicAuth = require('express-basic-auth');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

const router = express.Router();

router.use(basicAuth({users: { [process.env.BASIC_USER]: process.env.BASIC_PW }}));

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
    hello: () => {
        return 'Hello world!';
    },
};


router.use('/', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));





// router.get('/', (req, res) => {
//     const page = 'api';
//     return res.status(200).send(page);
// });

module.exports = router;

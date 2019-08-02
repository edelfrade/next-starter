const express = require('express');
const basicAuth = require('express-basic-auth');

const router = express.Router();

router.use(basicAuth({users: { [process.env.BASIC_USER]: process.env.BASIC_PW }}));

router.get('/', (req, res) => {
    const page = 'api';
    return res.status(200).send(page);
});

module.exports = router;

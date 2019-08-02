const express = require('express');

const router = express.Router();

router.get('/robots.txt', (req, res) => {
  const options = {
    root: `${__dirname}/../static/`,
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true,
    },
  };
  return res.status(200).sendFile('robots.txt', options);
});

router.get('/sitemap.xml', (req, res) => {
  const options = {
    root: `${__dirname}/../static/`,
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true,
      'Content-Type': 'text/xml',
    },
  };
  return res.status(200).sendFile('sitemap.xml', options);
});

// router.get('/google64b1d1d285f78146.html', (req, res) => {
//   const options = {
//     root: `${__dirname}/../static/`,
//     dotfiles: 'deny',
//     headers: {
//       'x-timestamp': Date.now(),
//       'x-sent': true,
//     },
//   };
//   return res.status(200).sendFile('google64b1d1d285f78146.html', options);
// });

module.exports = router;

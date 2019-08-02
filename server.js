const express = require('express');
const nextjs = require('next');
const compression = require('compression');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV === 'development';

const app = nextjs({ dev });

const handle = app.getRequestHandler();

const serverRoutes = require('./routing/server-routes');
const staticRoutes = require('./routing/static-routes');

app.prepare().then(() => {
  const server = express();
  server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  server.enable('trust proxy');
  server.use(bodyParser.json());
  server.use(bodyParser.json({ type: 'application/*' }));
  server.use(compression());
  server.use(cookieParser());

  server.use('/', staticRoutes);
  server.use('/api', serverRoutes);

  /* HANDLE LANGUAGE ROUTES HERE */

  server.use(handle).listen(port, (err) => {
    if (err) throw err;
    // console.log(`> Ready on http://localhost:${port}`);
  });
});

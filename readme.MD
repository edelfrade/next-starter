###NEXT-JS/EXPRESS STARTER APP

This is a very oppinionated starter app for NextJS with an Express Backend.

##NOTES

#Next-routes
I've moved away from using next-routes like I've done in my previous projects but I've left a server.js version using next routes as an alternative. The steps below should be followed to use next-routes rather then handling routes with express/next
    -   Update server.js with contents form server_next_routes.txt
    -   Change extention of routes.txt to .js
    -   Add `useFileSystemPublicRoutes: false` to `next.config.js`
    -   Run `$ npm i next-routes`
    -   Follow the documentation of next-routes for usage
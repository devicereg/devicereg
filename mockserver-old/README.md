# NodeJS MockServer

This is our small mock server based on the [Auth0 JWT Authentication Sample](https://github.com/auth0-blog/nodejs-jwt-authentication-sample).

We modified the routes and actions so they fit our needs mocking the API.

## Available APIs

### User APIs

#### POST `/users`

You can do a POST to `/users` to create a new user.

The body must have:

* `username`: The username
* `password`: The password
* `extra`: Some extra information you want to save from the user (It's a string). This could be a color or anything at all.

It returns the following:

```json
{
  "id_token": {jwt}
}
```

The JWT is signed with the secret located at the `config.json` file. That JWT will contain the `username` and the `extra` information sent.

#### POST `/authenticate`

You can do a POST to `/authenticate` to log a user in.

The body must have:

* `username`: The username
* `password`: The password

It returns the following:

```json
{
  "id_token": {jwt}
}
```

The JWT is signed with the secret located at the `config.json` file. That JWT will contain the `username` and the `extra` information that you sent at signup time.

## Running it

Just clone the repository, run `npm install` and then `node server.js`. That's it :).

If you want to run it on another port, just run `PORT=3001 node server.js` to run it on port 3001 for example

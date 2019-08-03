# Authentication Service

The purpose of this service is to decouple the authentication process of the user (who the user is) and the authorization process (what the user can do) from the rest of the solution, so that this logic is centralized in one service and the other services don't need to worry about it.

The service checks the user's credentials and generates a JWT token containing some information about the user, This information can later be used by other services to decide what operations the user can perform and what resources the user has access to.

This service is mostly called by the front-end service, on behalf of the user, to get the JWT token, the token is then used as a Bearer token when making requests to the other services.

## How to use

This service uses multi-stage build feature in docker, so you don't need to have go installed on your machine to build it or run it.

## Quick

### 1. Clone & Build

```

- git clone https://github.com/wkabbani/microservices.git
- cd wk-auth
- docker build -t [some-tag] .  // build the image
- docker run -P -d [some-tag]   // run the image
- docker ps                     // check the ports assigned by docker

```

### 2. Test

```

curl --header "Content-Type: application/json" \
  --request POST \
  --data "{ \
        \"username\": \"magicuser\", \
        \"password\": \"magicpassword\" \
    }" \
  http://localhost:[the-port]/api/v1/login

```

## Tech Stack

1. Language: [Go](https://golang.org/)
2. Packages
   - [manners](https://github.com/braintree/manners): a web server that shuts down gracefully
   - [jwt-go](https://github.com/dgrijalva/jwt-go): a go implementation of JWT, used to generate the JWT token.

## Suggested To-dos

1. Check user's credentials using a real credentials store and not the hardcoded values
2. Support secure communications through HTTPs
3. Support external identity providers (ex. Google, facebook, twitter, etc..)
4. Add a process to update the health and readiness values
5. Generate swagger definitions for the API
6. Adapt the code to a more structured way (check [Simple Go Microservice Template](https://github.com/wkabbani/golang-samples/tree/master/go-microservice))

## Codebase Structure

```

├── main.go                                 #  the entry point (setup servers & go routines)
├── health.go                               #  health status and handlers
├── logging.go                              #  logging middleware
├── auth.go                                 #  login handlers
├── system.go                               #  version handlers
├── README.md                               #  the readme file
└── Dockerfile                              #  the docker definition file

```

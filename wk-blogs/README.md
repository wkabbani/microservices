# Blogs Service

A simple service to store and manipulate simple blog entities.

## How to use

## Quick

To run this service separately, you need a mongo db server up and running, then you need to setup three environment variables.

```
MONGODB_SERVER: mongodb://mongo-db:27017/
MONGODB_USERNAME: root
MONGODB_PASSWORD: example
```

### 1. Clone & Build

```

- git clone https://github.com/wkabbani/microservices.git
- cd wk-blogs
- docker build -t [some-tag] .  // build the image
- docker run -P -d [some-tag]   // run the image
- docker ps                     // check the ports assigned by docker

```

### 2. Test

Endpoints can be tested using Curl, Postman or any other tool for executing http requests.

## Tech Stack

1. Language: [JavaScript & Node.js Runtime](https://nodejs.org/en/)
2. Framework: [NestJS](https://nestjs.com/): a framework for building efficient, reliable and scalable server-side applications.
3. Database: [MongoDB](https://www.mongodb.com/): a document-based database used to store the blogs.

## Suggested To-dos

1. Create a middleware to parse the JWT token and check whether the request is authorized
2. Support secure communications through HTTPs
3. Add tests
4. Add a process to update the health and readiness values
5. Generate swagger definitions for the API

## Codebase Structure

```

```

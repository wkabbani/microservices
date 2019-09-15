# Microservices Project

A project that showcases one way to build a microservices solution.

## Disclaimer

The porject is not meant to be production-ready or production-quality as there are a lot of left out todos, but the project aims to illustrate in a practical way rather theoratical way, a set of common patterns found in simple, practical, real-world microsrevice solutions.

## Overview of the patterns

1. Writing multiple small services so that each microservice has its own unique responsibility and each microservice chooses its own tech stack including language, framework, libraries, commnication protocol, etc..
2. Isolating the complexities of the authentication and authorization process and integrating it seamlessly with the solution.
3. Health & Readiness checking for each microservice.
4. Using multiple types of databases.
5. Exposing services using REST and gRPC.
6. Asynchronous processing for long-running tasks.
7. Containerizing all services using Docker.
8. Simplifying the development workflow using docker-compose.
9. Preparing the Kubernetes deployment and services so they can be deployed to kubernetes.

## Overview of the microservices

### 1. wk-auth

Authentication & authorization microservice writting in [go](https://golang.org/)

### 2. wk-blogs

Blogs microservice writting in [node.js](https://nodejs.org/en/) & [nest.js](https://nestjs.com/)

### 3. wk-cognitive

Cognitive operations microservice writting in C#, [dotnet core](https://dotnet.microsoft.com/) and [Hangfire](https://www.hangfire.io/)

### 4. wk-dashboard

Frontend microservice written in [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/) and [Materia-UI](https://material-ui.com/)

### 5. wk-sentiment

Sentiment analysis microservice written in [Python](https://www.python.org/)

### 6. wk-todos

Todos microservice written in C# and [dotnet core](https://dotnet.microsoft.com/)

### 7. wk-tts

Text-to-Speech microservice written in [go](https://golang.org/)

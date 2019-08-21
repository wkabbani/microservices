ARG NODE_VERSION=12

FROM node:${NODE_VERSION}-alpine

RUN mkdir -p /blogs
WORKDIR /blogs

COPY . .
RUN npm install
RUN npm run build

EXPOSE 8080

ENTRYPOINT [ "npm" ]
CMD ["run", "start:prod"]

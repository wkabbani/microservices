# build stage
FROM golang:1.13beta1-alpine3.10 AS build-env

# allow go to retrieve the dependencies for the build step
RUN apk add --no-cache git

WORKDIR /staging/
ADD . /staging/

# compile the binary, we don't want to run the cgo resolver
RUN CGO_ENABLED=0 GOOS=linux go build -o wk-tts .

# final stage
FROM alpine:3.10

RUN apk update && apk add flite

WORKDIR /
COPY --from=build-env /staging/wk-tts /

EXPOSE 8080

ENTRYPOINT [ "/wk-tts" ]
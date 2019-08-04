# Sentiment Service

This is a simple service that provides basic sentiment analysis functionality.

## How to use

## Quick

### 1. Clone & Build

```

- git clone https://github.com/wkabbani/microservices.git
- cd wk-sentiment
- docker build -t [some-tag] .  // build the image
- docker run -P -d [some-tag]   // run the image
- docker ps                     // check the ports assigned by docker

```

### 2. Test

```

curl --header "Content-Type: application/json" \
  --request POST \
  --data "{ \
        \"sentence\": \"this is an amazing sentiment service\"
    }" \
  http://localhost:[the-port]/api/v1/sentiment

```

## Tech Stack

1. Language: Python
2. Packages
   - []()

## Suggested To-dos

1.

## Codebase Structure

```

├── main.py                                 #  the entry point (setup servers & sentiment endpoint handler)
├── requirements.txt                        #  the python dependencies
├── README.md                               #  the readme file
└── Dockerfile                              #  the docker definition file

```

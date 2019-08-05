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
  http://localhost:[the-port]/api/sentiment

```

## Tech Stack

1. Language: Python
2. Packages
   - [Flask-RESTPlus](https://flask-restplus.readthedocs.io/en/stable/): an extension for flask tuned for building RESTful APIs.
   - [Textblob](https://textblob.readthedocs.io/en/dev/): a library for processing textual data.

## Suggested To-dos

1. Add a process to update the health and readiness values
2. Support secure communications through HTTPs
3. Add more tests and request validation

## Codebase Structure

```

├── app                                 #  the application
│   ├── main                            #  the core features of the app
│   │   ├── api                         #  the api layer
│   │   │   ├── sentiment               #  the sentiment api section
│   │   │   │   ├── controller.py       #  the sentiment controller
│   │   │   │   └── serializers.py      #  the sentiment req/res models
│   │   │   ├── health                  #  the health api section
│   │   │   │   ├── controller.py       #  the health controller
│   │   │   └── restplus.py             #  the api bootstrap
│   │   └── service                     #  the service layer
│   │   │   └── sentiment_service.py    #  the sentiment service
│   ├── test                            #  the tests
│   │   ├── test_config.py              #  the configuration's tests
│   │   └── test_sentiment.py           #  the sentiment api tests
│   ├── application.py                  #  the application
│   ├── config.py                       #  the application's configurations
│   ├── run_app.py                      #  the application's runner
│   └── run_test.py                     #  the tests' runner
├── Dockerfile                          #  the application docker file
└── requirements.txt                    #  the python dependencies

```

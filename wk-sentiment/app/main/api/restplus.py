from flask_restplus import Api

# bootstraps the application's API
api = Api(version='1.0', title='Sentiment API',
          description='A simple sentiment analysis API')

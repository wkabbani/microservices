from flask_restplus import fields
from main.api.restplus import api


# the sentiment request model (used for request validation)
sentiment_request = api.model('Sentiment Request', {
    'sentence': fields.String(required=True, description='The sentence to analyze')
})

# the sentiment response model
sentiment_response = api.model('Sentiment Response', {
    'sentence': fields.String(required=True, description='The sentence to analyze'),
    'polarity': fields.Float(required=True, description='The polarity of the sentence')
})

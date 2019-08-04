from flask import request
from flask_restplus import Resource, abort
from werkzeug.exceptions import BadRequest

from main.service.sentiment_service import SentimentService
from main.api.sentiment.serializers import sentiment_request, sentiment_response
from main.api.restplus import api

ns = api.namespace(
    'sentiment', description='Operations related to sentiment analysis')


@ns.route('')
class Sentiment(Resource):
    """This class represents the sentiments endpoint controller."""

    @api.response(200, 'Operation Executed Successfully.')
    @api.response(400, 'Bad Request.')
    @api.response(500, 'Internal Server Error.')
    @api.expect(sentiment_request, validate=True)
    def post(self):
        """
        Gets the polarity for a sentence
        """

        try:

            # get request details
            sentence = request.json["sentence"]

            # call the service
            sentiment_service = SentimentService()
            result = sentiment_service.AnalyzeSentence(sentence)

            return {
                "sentence": result[0],
                "polarity": result[1],
            }, 200

        except ValueError as err:
            abort(400, err)

        except Exception as err:
            abort(500, 'Internal Server Error')

import unittest
import os
import json
from application import create_app
from config import config_by_name


class SentimentAPITestCase(unittest.TestCase):
    """This class represents the sentiment api test case"""

    def setUp(self):
        """Defines test variables and initializes the test case."""

        self.app = create_app(config_by_name['test'])
        self.client = self.app.test_client

    def test_sentiment_api_should_return_positive_polarity(self):
        """Tests sentiment API and asserts valid results."""

        # 1- Arrange
        request = dict(
            sentence="This is very good"
        )

        expected_result = {
            "sentence": "This is very good",
            "polarity": 0.9099999999999999,
        }

        # 2- Act
        res = self.client().post('/api/sentiment',
                                 data=json.dumps(request),
                                 content_type='application/json')

        result_in_json = json.loads(
            res.data.decode('utf-8').replace("'", "\""))

        # 3- Assert
        self.assertEqual(res.status_code, 200)
        self.assertEqual(
            result_in_json['sentence'], expected_result['sentence'])
        self.assertEqual(
            result_in_json['polarity'], expected_result['polarity'])

    def test_sentiment_api_should_return_negative_polarity(self):
        """Tests sentiment API and asserts valid results."""

        # 1- Arrange
        request = dict(
            sentence="This is very bad"
        )

        expected_result = {
            "sentence": "This is very bad",
            "polarity": -0.9099999999999998,
        }

        # 2- Act
        res = self.client().post('/api/sentiment',
                                 data=json.dumps(request),
                                 content_type='application/json')

        result_in_json = json.loads(
            res.data.decode('utf-8').replace("'", "\""))

        # 3- Assert
        self.assertEqual(res.status_code, 200)
        self.assertEqual(
            result_in_json['sentence'], expected_result['sentence'])
        self.assertEqual(
            result_in_json['polarity'], expected_result['polarity'])

    def tearDown(self):
        """teardown all initialized variables."""
        pass


# Make the tests conveniently executable
if __name__ == "__main__":
    unittest.main()

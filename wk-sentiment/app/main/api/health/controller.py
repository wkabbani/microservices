from flask import request
from flask_restplus import Resource, abort

from main.api.restplus import api

hns = api.namespace(
    'health', description='Operations related to health status of the service')


@hns.route('')
class Health(Resource):
    """This class represents the health endpoints of the service."""

    def get(self):
        """
        Health endpoint
        """

        return None, 200


rns = api.namespace(
    'readiness', description='Operations related to readiness status of the service')


@rns.route('')
class Readiness(Resource):
    """This class represents the readiness endpoints of the service."""

    def get(self):
        """
        Readiness endpoint
        """

        return None, 200

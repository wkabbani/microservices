import os
from flask import Flask, Blueprint
from flask_cors import CORS
from main.api.sentiment.controller import ns as sentiment_namespace
from main.api.health.controller import hns as health_namespace
from main.api.health.controller import rns as readiness_namespace
from main.api.restplus import api


def configure_app(flask_app, config):
    """Configures the application."""

    flask_app.config['DEBUG'] = config.FLASK_DEBUG
    flask_app.config['SWAGGER_UI_DOC_EXPANSION'] = config.RESTPLUS_SWAGGER_UI_DOC_EXPANSION
    flask_app.config['RESTPLUS_VALIDATE'] = config.RESTPLUS_VALIDATE
    flask_app.config['RESTPLUS_MASK_SWAGGER'] = config.RESTPLUS_MASK_SWAGGER
    flask_app.config['ERROR_404_HELP'] = config.RESTPLUS_ERROR_404_HELP


def initialize_app(flask_app):
    """Initializes the application."""

    blueprint = Blueprint('api', __name__, url_prefix='/api/v1')
    api.init_app(blueprint)
    api.add_namespace(sentiment_namespace)
    api.add_namespace(health_namespace)
    api.add_namespace(readiness_namespace)
    flask_app.register_blueprint(blueprint)


def create_app(config):
    """Creates the application."""

    # create the app
    app = Flask(__name__)

    # configure cors
    CORS(app)

    # configure the app
    configure_app(app, config)

    # initialize the app
    initialize_app(app)

    return app

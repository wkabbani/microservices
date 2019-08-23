class Config:

    # Flask configurations
    FLASK_SERVER_NAME = '0.0.0.0'
    FLASK_SERVER_PORT = '80'
    FLASK_DEBUG = False

    # Flask-Restplus configurations
    RESTPLUS_SWAGGER_UI_DOC_EXPANSION = 'list'
    RESTPLUS_VALIDATE = True
    RESTPLUS_MASK_SWAGGER = False
    RESTPLUS_ERROR_404_HELP = False


class DevelopmentConfig(Config):
    FLASK_DEBUG = True


class TestingConfig(Config):
    FLASK_DEBUG = False
    TESTING = True


class ProductionConfig(Config):
    FLASK_DEBUG = False


config_by_name = dict(
    dev=DevelopmentConfig,
    test=TestingConfig,
    prod=ProductionConfig
)

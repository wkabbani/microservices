import os
from application import create_app
from config import config_by_name


def main():
    """Runs the application."""

    # get the configuration
    env = os.getenv('APP_ENV') or 'dev'
    config = config_by_name[env]

    # create the app
    app = create_app(config)

    # run the app
    app.run(host=config.FLASK_SERVER_NAME, port=config.FLASK_SERVER_PORT)


if __name__ == "__main__":
    main()

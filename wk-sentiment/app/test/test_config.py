import unittest
import os
import json
from application import create_app
from config import config_by_name


class ConfigurationsTestCase(unittest.TestCase):
    """This class represents the configuraions test case"""

    def test_app_development_configurations(self):
        """Tests application's configurations (dev)."""

        # 1- Arrange
        app = create_app(config_by_name['dev'])

        # 2- Act

        # 3- Assert
        self.assertTrue(app.config['DEBUG'])
        self.assertTrue(app.config['RESTPLUS_VALIDATE'])
        self.assertFalse(app.config['RESTPLUS_MASK_SWAGGER'])
        self.assertFalse(app.config['ERROR_404_HELP'])
        self.assertEqual(
            app.config['SWAGGER_UI_DOC_EXPANSION'], 'list')

    def test_app_testing_configurations(self):
        """Tests application's configurations (test)."""

        # 1- Arrange
        app = create_app(config_by_name['test'])

        # 2- Act

        # 3- Assert
        self.assertFalse(app.config['DEBUG'])
        self.assertTrue(app.config['RESTPLUS_VALIDATE'])
        self.assertFalse(app.config['RESTPLUS_MASK_SWAGGER'])
        self.assertFalse(app.config['ERROR_404_HELP'])
        self.assertEqual(
            app.config['SWAGGER_UI_DOC_EXPANSION'], 'list')

    def test_app_production_configurations(self):
        """Tests application's configurations (prod)."""

        # 1- Arrange
        app = create_app(config_by_name['prod'])

        # 2- Act

        # 3- Assert
        self.assertFalse(app.config['DEBUG'])
        self.assertTrue(app.config['RESTPLUS_VALIDATE'])
        self.assertFalse(app.config['RESTPLUS_MASK_SWAGGER'])
        self.assertFalse(app.config['ERROR_404_HELP'])
        self.assertEqual(
            app.config['SWAGGER_UI_DOC_EXPANSION'], 'list')


# Make the tests conveniently executable
if __name__ == '__main__':
    unittest.main()

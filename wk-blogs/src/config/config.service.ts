import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class ConfigService {
  env = process.env.NODE_ENV || 'development';

  app = {
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
  };

  db = {
    mongodb_username: process.env.MONGODB_USERNAME,
    mongodb_password: process.env.MONGODB_PASSWORD,
    mongodb_server: process.env.MONGODB_SERVER || 'mongodb://localhost:27017/',
    mongodb_name: 'blogdb',
  };
}

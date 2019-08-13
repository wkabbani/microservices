import * as mongoose from 'mongoose';
import { ConfigService } from '../config/config.service';
import constants from '../config/constants';

export const databaseProviders = [
  {
    provide: constants.MONGO_DB_CONNECTION_TOKEN,
    useFactory: async (configService: ConfigService) => {
      (mongoose as any).Promise = global.Promise;
      return await mongoose.connect(configService.db.mongodb_server, {
        dbName: configService.db.mongodb_name,
        user: configService.db.mongodb_username,
        pass: configService.db.mongodb_password,
      });
    },
    inject: [ConfigService],
  },
];

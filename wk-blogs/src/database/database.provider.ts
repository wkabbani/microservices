import * as mongoose from 'mongoose';
import { ConfigService } from '../config/config.service';
import constants from '../config/constants';

export const databaseProviders = [
  {
    provide: constants.MONGO_DB_CONNECTION_TOKEN,
    useFactory: async (configService: ConfigService) => {
      (mongoose as any).Promise = global.Promise;
      return await connectWithRetry(
        configService.db.mongodb_server,
        configService.db.mongodb_name,
        configService.db.mongodb_username,
        configService.db.mongodb_password,
      );
    },
    inject: [ConfigService],
  },
];

var connectWithRetry = async function(dbURI, dbName, dbUser, dbPass) {
  var db = mongoose.connection;
  let connected = false;
  let attemps = 0;
  while (!connected && attemps < 20) {
    console.log('trying to connect...');
    await mongoose
      .connect(dbURI, {
        dbName: dbName,
        user: dbUser,
        pass: dbPass,
        useNewUrlParser: true,
      })
      .then(() => {
        connected = true;
      })
      .catch(() => {
        sleep(5000);
        ++attemps;
      });
  }
  return db;
};

function sleep(millisecondsToWait) {
  var now = new Date().getTime();
  while (new Date().getTime() < now + millisecondsToWait) {}
}

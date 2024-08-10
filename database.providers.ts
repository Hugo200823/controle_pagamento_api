import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv' 

dotenv.config()

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: 5432,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE_NAME,
  entities: [
      __dirname + '/../**/*.entity.js',
  ],
  migrations: [
    __dirname + "/shared/infra/migrations/**/*"
  ],
  synchronize: false,
  logging: true
});

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      return AppDataSource.initialize();
    },
  },
];
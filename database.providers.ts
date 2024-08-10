import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'hugo',
  database: 'postgres',
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
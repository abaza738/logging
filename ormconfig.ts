import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

export const ormConfig: SqliteConnectionOptions = {
  type: 'sqlite',
  database: 'database.sqlite',
  entities: ['dist/src/**/*.entity.{js,ts}'],
  synchronize: true,
  logging: true,
};

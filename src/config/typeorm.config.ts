import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import * as dotenv from 'dotenv';

dotenv.config()

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mongodb',
  url: process.env.MONGODB_URI,
  entities: [join(__dirname, '../', '**', '*.entity.{ts,js}')],
  ssl: true,
  useUnifiedTopology: true,
  autoLoadEntities: true,
  synchronize: false,
  logging: true,
};

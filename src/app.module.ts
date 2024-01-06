import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from "dotenv";
import { typeOrmConfig } from "./config/typeorm.config"
import { MongooseModule } from '@nestjs/mongoose';

config();

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

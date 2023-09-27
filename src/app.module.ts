import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogModule } from './log/log.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from 'ormconfig';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    LogModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      ...ormConfig,
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

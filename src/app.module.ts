import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogModule } from './log/log.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from 'ormconfig';

@Module({
  imports: [
    LogModule,
    TypeOrmModule.forRoot({
      ...ormConfig,
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

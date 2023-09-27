import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogService } from './log.service';
import { LogGateway } from './log.gateway';
import { Log } from './entities/log.entity';
import { LogController } from './log.controller';

@Module({
  controllers: [LogController],
  imports: [TypeOrmModule.forFeature([Log])],
  providers: [LogGateway, LogService],
})
export class LogModule {}

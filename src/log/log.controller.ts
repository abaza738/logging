import { Controller, Get, Post, Query } from '@nestjs/common';
import { LogService } from './log.service';

@Controller('log')
export class LogController {
  constructor(private logService: LogService) {}

  @Get('')
  findAll(@Query('skip') skip: number) {
    return this.logService.findAll(skip);
  }

  @Post('')
  removeLogsWhereIHadAnInfiniteLoopByMistakeAddingEventsForver() {
    return this.logService.removeLogsWhereIHadAnInfiniteLoopByMistakeAddingEventsForver();
  }
}

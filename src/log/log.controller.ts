import { Controller, Get, Post, Query } from '@nestjs/common';
import { LogService } from './log.service';

@Controller('log')
export class LogController {
  constructor(private logService: LogService) {}

  @Get('paginated')
  findLogs(@Query('take') take: number, @Query('skip') skip: number) {
    return this.logService.findAllPaginated(take, skip);
  }

  @Get('')
  findAll() {
    return this.logService.findAll();
  }

  @Post('')
  removeLogsWhereIHadAnInfiniteLoopByMistakeAddingEventsForver() {
    return this.logService.removeLogsWhereIHadAnInfiniteLoopByMistakeAddingEventsForver();
  }
}

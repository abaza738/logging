import { Injectable } from '@nestjs/common';
import { CreateLogDto } from './dto/create-log.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Log } from './entities/log.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LogService {
  constructor(
    @InjectRepository(Log)
    private logRepo: Repository<Log>,
  ) {}

  create(createLogDto: CreateLogDto) {
    return this.logRepo.save(createLogDto);
  }

  findAll(skip: number = 0) {
    return this.logRepo.findAndCount({
      order: { created: 'DESC' },
      take: 10,
      skip,
    });
  }

  removeLogsWhereIHadAnInfiniteLoopByMistakeAddingEventsForver() {
    return this.logRepo.delete({ type: 'log' });
  }
}

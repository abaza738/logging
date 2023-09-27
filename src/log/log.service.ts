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

  findAll() {
    return this.logRepo.find();
  }

  async findAllPaginated(take: number, skip: number) {
    take = take || 10;
    skip = skip || 0;

    const [result, total] = await this.logRepo.findAndCount({
      take: take,
      skip: skip,
    });

    return {
      data: result,
      count: total,
    };
  }

  removeLogsWhereIHadAnInfiniteLoopByMistakeAddingEventsForver() {
    return this.logRepo.delete({ type: 'log' });
  }
}

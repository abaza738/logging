import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { LogService } from './log.service';
import { CreateLogDto } from './dto/create-log.dto';
import { Server } from 'socket.io';

@WebSocketGateway({ transports: ['websocket'] })
export class LogGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly logService: LogService) {}

  @SubscribeMessage('log')
  async create(@MessageBody() createLogDto: CreateLogDto) {
    const message = await this.logService.create(createLogDto);
    this.server.emit('new-log', message);
  }
}

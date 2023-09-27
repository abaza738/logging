import { IsNotEmpty } from 'class-validator';

export class CreateLogDto {
  @IsNotEmpty()
  type: string;

  message?: string;
}

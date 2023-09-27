import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Log {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  message: string;

  @CreateDateColumn()
  created: Date;
}

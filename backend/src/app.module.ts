import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobsModule } from './jobs/jobs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [JobsModule],
  controllers: [AppController],
  providers: [AppService],
})

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'ft_transcendence_db',
      entities: [],
      synchronize: true,
    }),
  ],
})

export class AppModule {
  // constructor(private connection: Connection) {}
}
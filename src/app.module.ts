import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './modules/tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [TasksModule,
    MongooseModule
    .forRoot('mongodb://mongo:27017/dockerdb')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

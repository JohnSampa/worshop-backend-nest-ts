import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './modules/tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [TasksModule,
    MongooseModule
    .forRoot('mongodb+srv://victorsouza_db_user:xq1T8tFaFK1JWs35@aula-ds.ec6xkvd.mongodb.net/apitask'),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

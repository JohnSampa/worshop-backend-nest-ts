import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

    constructor(
        private readonly taskService: TasksService,

    ){}

    @Get()
    findAllTasks(){
       return this.taskService.findAll();
    }

    @Get('/:id')
    findById(
        @Param('id') id: string
    ){
        return this.taskService.findById(id);
    }

    @Post()
    createTask(
        @Body() data: any
    ){
       return this.taskService.createTask(data);
    }

    @Put('/:id')
    update(
        @Body() data: any,
        @Param('id') id: string
    ){
        return this.taskService.update(data, id);
    }

    @Delete('/:id')
    delete(
        @Param('id') id: string
    ){
        return this.taskService.delete(id);
    }
}

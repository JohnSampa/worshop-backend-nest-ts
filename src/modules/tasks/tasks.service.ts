import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './tasks.schema';

@Injectable()
export class TasksService {

    constructor(
    @InjectModel(Task.name)
    private readonly taskModel: Model<Task>,
  ) {}
    
    public findAll(){
        return this.taskModel.find();
    }

    public findById(id: string){
        return this.taskModel.findById(id);
    }

    public createTask(data: any){
        return this.taskModel.create(data);
    }

    public update(data: any,id:string){
       return this.taskModel.findByIdAndUpdate(id, data, { new: true });
    }

    public delete(id: string){
        return this.taskModel.findByIdAndDelete(id);
    }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
     tasks = [
            {
                id: '1',
                title: "Estudar node",
                finished: true,
            },
            {
                id: '2',
                title: "Estudar Java",
                finished: true,
            },
            {
                id: '3',
                title: "Estudar Python",
                finished: true,
            },
            {
                id: '4',
                title: "Dormir",
                finished: true,
            },
            {
                id: '5',
                title: "Acordar",
                finished: true,
            }
        ];
    
    public findAll(){
        return this.tasks;
    }

    public findById(id: string){
        const t = this.tasks.filter(task=> task.id == id)
        return t;
    }

    public createTask(data: any){
        this.tasks.push(data);
        return data;
    }

    public update(data: any,id:string){
        this.tasks.map(task=> task.id == id?{data}:task);

        return this.tasks.filter(task=> task.id == id);
    }
}

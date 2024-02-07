import {Controller, Get, Post, Body, Param, Delete, Put, NotFoundException } from '@nestjs/common'
import { TaskService } from './task.service';
import { Task } from '@prisma/client';


@Controller('tasks')

export class TaskController{
    constructor(private readonly TaskService: TaskService){}

    @Get()
    async getAllTasks(){
    return this.TaskService.getAllTasks();
    }

    @Get(':id')
    async getTaskById(@Param('id') id: string){
    const taskFound = await this.TaskService.getTaskById(Number(id))
    if (!taskFound) throw new NotFoundException('la tarea no existe')
    return taskFound;
    }

    @Post()
    async createTask(@Body() data: Task){
    return this.TaskService.createTask(data);
    }

    @Delete(':id')
    async deleteTask(@Param('id') id: string){
    try {
    return await this.TaskService.deleteTask(Number(id));
    } catch (error) {
        throw new NotFoundException("la tarea no existe")
    }
    }

    @Put(':id')
    async updateTask(@Param('id') id: string, @Body() data: Task){
    try {
        return await this.TaskService.updateTask(Number(id), data);
    } catch (error) {
        throw new NotFoundException("la tarea que desea actualizar no existe")
        
    }
    }
}
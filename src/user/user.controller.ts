import { Controller, Get, Param, Post, Body, Put, NotFoundException, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client'

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }



    @Get()
    async getAllUsers(): Promise<User[]> {
        return this.userService.getAllUsers();
    }
    @Get(':id')
    async getUserById(@Param('id') id: string): Promise<User>
    {return this.userService.getUserById(Number(id));
    }
    @Post()
    async createUser(@Body() data: User): Promise<User> {
        return this.userService.createUser(data);
    }

    @Put(':id')
    async updateTask(@Param('id') id: string, @Body() data: User){
    try {
        return await this.userService.updateUser(Number(id), data);
    } catch (error) {
        throw new NotFoundException("el usuario que desea actualizar no existe")
        
    }
    }

    @Delete(':id')
    async deleteTask(@Param('id') id: string){ 
        try {
            return await this.userService.deleteUser(Number(id));
        } catch (error) {
            throw new NotFoundException("el usuario que desea eliminar no existe")
        }
    }
    
}

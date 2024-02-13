import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
//importamos user de la base de datos de el modelo que creamos
import { User } from '@prisma/client'

@Injectable()
export class UserService {


    //creamos un constructor
    constructor(private prisma: PrismaService) { }


    //creamos el servicio que nos va a traer todo de la base de datos
    async getAllUsers(): Promise<User[]> {
        return this.prisma.user.findMany();
    }
    async getUserById(id: number): Promise<User> 
    {return this.prisma.user.findUnique({where: {id: id}});
    }

    async createUser(data: User): Promise<User> {
        return this.prisma.user.create({
            data
        });
    }

    async updateUser(id: number, data: User): Promise<User> {   
        return this.prisma.user.update({
            where: {id: id},
            data
        });
    }

    async deleteUser(id: number): Promise<User> {
        return this.prisma.user.delete({
            where: {id: id}
        });
    }



}

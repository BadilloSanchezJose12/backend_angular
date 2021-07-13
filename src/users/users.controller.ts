import { UserEntity } from './user.entity';
import { UsersService } from './users.service';
import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {

    constructor(private service:UsersService){

    }

@Get()
getAllUsers(){
    return this.service.getAllUsers();
}


@Post()
addUsers(@Body() user,UserEntity){
    return this.service.createUser(user);
}

@Put()
updateUser(){
    return "User Updated...";
}

@Delete()
deleteUser(){
    return "User Deleted...";
}
}

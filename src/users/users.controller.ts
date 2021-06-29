import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {

@Get()
getAllUsers(){
    return "List of all users---->";
}


@Post()
addUsers(){
    return "User added...";
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

import { UserEntity } from './user.entity';
import { UsersService } from './users.service';
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { userInfo } from 'os';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage }   from 'multer';
import { customName } from 'utils/customname';
import { UploadedFile } from '@nestjs/common';

@Controller('users')
export class UsersController {

    constructor(private service:UsersService){

    }

@Get()
getAllUsers(){
    return this.service.getAllUsers();
}

@Get(':id')
getUser(@Param() params){
    return this.service.getUser(params.id);
}


@Post()
addUsers(@Body() user:UserEntity){
    return this.service.createUser(user);
}

@Post('upload')
@UseInterceptors(
    FileInterceptor('image',{
        storage: diskStorage({
            destination:'./avatars',
            filename: customName
        })
    })
)

async uploadFile(@Body() user:UserEntity, @UploadedFile() file){
    user.avatar = file.filename;

    await this.service.createUser(JSON.parse(JSON.stringify(user)));
    const response ={
        originalName: file.originalname, 
        finalName: file.filename
    }

    return{
        status:HttpStatus.OK,
        message:"Image succesfully uploaded",
        data:response
    }

}



@Put()
updateUser(@Body() user:UserEntity){
    this.service.updateUser(user);
}

@Delete(':id')
deleteUser(@Param() params){
    this.service.deleteUser(params.id);
}
}


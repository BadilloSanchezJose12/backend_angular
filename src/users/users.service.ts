import { UserEntity } from './user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createSecureServer } from 'http2';

@Injectable()
export class UsersService {

constructor(@InjectRepository(UserEntity) private rep:Repository<UserEntity>){
}

async getAllUsers(): Promise<UserEntity[]> {
    return await this.rep.find();
}


async createUser(user:UserEntity) {
    await this.rep.insert(user);
}

}

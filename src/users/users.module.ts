import { UserEntity } from './user.entity';
import { UsersController } from './users.controller';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [UsersService],
  controllers: [
    UsersController
  ], 
  imports: [
    TypeOrmModule.forFeature([UserEntity])
  ]
})
export class UsersModule {}

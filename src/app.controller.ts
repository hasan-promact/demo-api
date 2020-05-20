import { Controller, Get,Post,Req, Param, Put, Delete } from '@nestjs/common';
import { Request } from 'express';
import { User } from './modals/user.modal';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("api/users")
  getUsers():User[] {
    return this.appService.getUsers();
  }
  @Get("api/user/:id")
  getUser(@Param('id') id):User {
    return this.appService.getUser(id);
  }

  @Post("api/user")
  addUser(@Req() request: Request):Number {
    return this.appService.addUser(request);
  }
  @Put("api/user/:id")
  updateUser(@Param('id') id:Number,@Req() request: Request):String {
    return this.appService.updateUser(id, request);
  }
  @Delete("api/user/:id")
  deleteUser(@Param('id') id:Number):String {
    return this.appService.deleteUser(id);
  }
}

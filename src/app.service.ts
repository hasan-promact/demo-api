import { Injectable } from '@nestjs/common';
import { User } from './modals/user.modal';
import { Request } from 'express';

@Injectable()
export class AppService {
  users:User[]=[{Id:1,Name:"hasan", Age:24, Merried:true }, {Id:2, Name:"hasan", Age:34, Merried:true } ];
  getHello(): string {
    return 'Hello World!';
  }
  getUsers():User[]{
    return this.users
  }
  getUser(id:Number):User{
    return this.users[this.users.findIndex(x => x.Id == id)]
  }
  addUser(req:Request):Number{
    let newId = this.users.length +1;
    let newUser:User= {
          Id:newId,
          Name:req.body.Name,
          Age:req.body.Age,
          Merried:req.body.Merried
    };
    this.users.push(newUser);
    return newId;
  }
  updateUser(id:Number, req:Request):String{
    const index:number = this.users.findIndex(x => x.Id == id);
    const updatedUser={
          Id:id,
          Name:req.body.Name,
          Age:req.body.Age,
          Merried:req.body.Merried
    }
    this.users[index] = updatedUser
    return "User Updated";
  }
  deleteUser(id:Number):String{
    const index:number = this.users.findIndex(x => x.Id == id);
    this.users.splice(index, 1);
    return "User Deleted";
  }
}

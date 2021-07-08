import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';


export class CreateUserRequest {
  name: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/users/:id')
  findUserById(@Param() params): string {
    return this.appService.findUserById(Number.parseInt(params.id));
  }

  @Post('/users')
  createUser(@Body() createUserRequest: CreateUserRequest): string {
    return this.appService.createUser(createUserRequest)
  }

}

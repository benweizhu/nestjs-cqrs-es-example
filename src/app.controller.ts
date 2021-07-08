import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

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
  createUser(@Req() request: Request): string {
    return this.appService.createUser(request.body)
  }

}

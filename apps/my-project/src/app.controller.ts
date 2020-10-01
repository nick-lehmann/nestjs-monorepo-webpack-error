import { Controller, Get } from '@nestjs/common';
import { CoreService } from '@test/core';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly coreService: CoreService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello() + ' - ' + this.coreService.coreStuff();
  }
}

import { Controller, Get } from '@nestjs/common';
import { SystemService } from './system.service';

@Controller('system')
export class SystemController {
  constructor(private readonly systemService: SystemService) {}

  @Get('/health')
  getHealth(): string {
    return this.systemService.getHello();
  }

  @Get('/readiness')
  getReadiness(): string {
    return this.systemService.getHello();
  }
}

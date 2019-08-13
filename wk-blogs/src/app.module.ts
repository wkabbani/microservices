import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { BlogModule } from './resources/blog/blog.module';
import { SystemModule } from './resources/system/system.module';

@Module({
  imports: [ConfigModule, BlogModule, SystemModule],
})
export class AppModule {}

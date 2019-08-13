import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { BlogProviders } from './repository/blog.provider';
import BlogRepository from './repository/blog.repository';
import { BlogsController } from './blog.controller';
import BlogService from './blog.service';

@Module({
  imports: [DatabaseModule],
  controllers: [BlogsController],
  providers: [BlogRepository, BlogService, ...BlogProviders],
  exports: [],
})
export class BlogModule {}

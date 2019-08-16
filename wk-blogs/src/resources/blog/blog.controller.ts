import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
  Req,
  Put,
  UseGuards,
  UseInterceptors,
  UsePipes,
  NotFoundException,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiImplicitBody,
  ApiImplicitParam,
  ApiImplicitQuery,
  ApiResponse,
  ApiUseTags,
} from '@nestjs/swagger';
import Constants from '../../config/constants';
import BlogService from './blog.service';
import BlogModel from './models/blog.model';
import CreateBlogDto from './models/createBlogDto';
import UpdateBlogDto from './models/updateBlogDto';

@Controller('api/v1/blogs')
export class BlogsController {
  constructor(private readonly blogService: BlogService) {}

  @Post()
  async createBlog(
    @Req() req,
    @Body() createBlogDto: CreateBlogDto,
  ): Promise<BlogModel> {
    try {
      const response = await this.blogService.createBlog(
        createBlogDto.title,
        createBlogDto.text,
      );
      return response;
    } catch (exception) {
      throw exception;
    }
  }

  @Get()
  async getAll(): Promise<BlogModel[]> {
    try {
      const response = await this.blogService.getBlogs();
      return response;
    } catch (exception) {
      throw exception;
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<BlogModel> {
    try {
      const blog = await this.blogService.getBlogById(id);
      if (!blog) {
        throw new NotFoundException();
      }
      return blog;
    } catch (exception) {
      throw exception;
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBlogDto: UpdateBlogDto,
  ): Promise<BlogModel> {
    try {
      const response = await this.blogService.updateBlog(
        id,
        updateBlogDto.title,
        updateBlogDto.text,
      );
      return response;
    } catch (exception) {
      throw exception;
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const result = await this.blogService.deleteBlog(id);
      if (!result) {
        throw new NotFoundException();
      }
    } catch (exception) {
      throw exception;
    }
  }
}

import { Injectable } from '@nestjs/common';
import BlogModel from './models/blog.model';
import BlogRepository from './repository/blog.repository';
import { Blog } from './repository/blog.interface';

@Injectable()
export default class BlogService {
  constructor(private readonly blogRepository: BlogRepository) {}

  async getBlogs(): Promise<BlogModel[]> {
    try {
      let blogs: BlogModel[] = [];
      const result: Blog[] = await this.blogRepository.getBlogs();
      if (result.length > 0) {
        blogs = result.map(blog => {
          return new BlogModel(blog.blogId, blog.title, blog.text);
        });
      }
      return blogs;
    } catch (exception) {
      throw exception;
    }
  }

  async getBlogById(id: string): Promise<BlogModel> {
    try {
      let blog: BlogModel = null;
      const result = await this.blogRepository.getBlogById(id);
      if (result) {
        blog = new BlogModel(result.blogId, result.title, result.text);
      }
      return blog;
    } catch (exception) {
      throw exception;
    }
  }

  async createBlog(title: string, text: string): Promise<BlogModel> {
    try {
      const result = await this.blogRepository.createBlog(title, text);
      return new BlogModel(result.blogId, result.title, result.text);
    } catch (exception) {
      throw exception;
    }
  }

  async deleteBlog(id: string): Promise<boolean> {
    try {
      const result = await this.blogRepository.deleteBlog(id);
      return result;
    } catch (exception) {
      throw exception;
    }
  }

  async updateBlog(
    id: string,
    title: string,
    text: string,
  ): Promise<BlogModel> {
    try {
      let blog: BlogModel = null;
      const result = await this.blogRepository.updateBlog(id, title, text);
      if (result) {
        blog = new BlogModel(result.blogId, result.title, result.text);
      }
      return blog;
    } catch (exception) {
      throw exception;
    }
  }
}

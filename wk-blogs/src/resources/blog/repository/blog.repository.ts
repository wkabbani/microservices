import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import * as uuid from 'uuid';
import constants from '../../../config/constants';
import { Blog } from './blog.interface';

@Injectable()
export default class BlogRepository {
  constructor(
    @Inject(constants.BLOG_MODEL_TOKEN)
    private readonly blog: Model<Blog>,
  ) {}

  async createBlog(title: string, text: string): Promise<Blog> {
    try {
      const newBlog = new this.blog({
        blogId: uuid.v4(),
        title,
        text,
      });
      const result = await newBlog.save();
      return result;
    } catch (exception) {
      throw exception;
    }
  }

  async getBlogs(): Promise<Blog[]> {
    try {
      return await this.blog.find();
    } catch (exception) {
      throw exception;
    }
  }

  async getBlogById(id: string): Promise<Blog> {
    try {
      const conditions = { blogId: id };
      return await this.blog.findOne(conditions);
    } catch (exception) {
      throw exception;
    }
  }

  async deleteBlog(id: string): Promise<boolean> {
    try {
      const conditions = { blogId: id };
      const result = await this.blog.deleteOne(conditions);
      return result.n === 1;
    } catch (exception) {
      throw exception;
    }
  }

  async updateBlog(id: string, title: string, text: string): Promise<Blog> {
    try {
      const conditions = { blogId: id };
      const options = { new: true };
      const result = await this.blog
        .findOneAndUpdate(conditions, {}, options)
        .exec();
      return result;
    } catch (exception) {
      throw exception;
    }
  }
}

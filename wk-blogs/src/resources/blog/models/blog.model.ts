export default class BlogModel {
  blogId: string;
  title: string;
  text: string;

  constructor(blogId: string, title: string, text: string) {
    this.blogId = blogId;
    this.title = title;
    this.text = text;
  }
}

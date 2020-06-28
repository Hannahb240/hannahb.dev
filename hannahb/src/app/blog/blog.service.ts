import { EventEmitter } from '@angular/core';

export class BlogService {

    newBlogAddedEmitter = new EventEmitter();

    blogArray = [{name: "hannah", content: "This is a blog post"},
                 {name: "iwan", content: "Blog post number 22222"}];

    addToBlog(nameOfBlog: string, contentOfBlog: string) {
        this.blogArray.push({name: nameOfBlog, content: contentOfBlog});
        console.log(this.blogArray);
    }

    getArray() {
        return this.blogArray.slice()
    }
}

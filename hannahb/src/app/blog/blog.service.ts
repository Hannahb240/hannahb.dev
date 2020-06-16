export class BlogService {

    blogArray = [{name: "hannah", content: "This is a blog post"},
                 {name: "iwan", content: "Blog post number 2"}];

    addToBlog(nameOfBlog: string, contentOfBlog: string) {
        this.blogArray.push({name: nameOfBlog, content: contentOfBlog});
        console.log(this.blogArray);
    }
}

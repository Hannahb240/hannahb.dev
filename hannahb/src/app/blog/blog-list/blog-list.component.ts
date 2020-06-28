import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from '../blog.model';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
  providers: []
})
export class BlogListComponent implements OnInit {

  hannah = false;
  blogs: Blog[] = [ 
    // new Blog('hannah', 'testContent'),
    // new Blog('Iwan', "testContent2")
  ];

  constructor(private blogService: BlogService) { 

  }

  ngOnInit(): void {
    this.blogs= this.blogService.getArray();

    this.blogService.newBlogAddedEmitter.subscribe(() => {
      this.blogs= this.blogService.getArray();    
    });
  }

  onUpdateBlogArray() {
    this.blogs= this.blogService.getArray();
  }

}

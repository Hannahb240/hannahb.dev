import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BlogService } from '../blog.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-write-blog',
  templateUrl: './write-blog.component.html',
  styleUrls: ['./write-blog.component.css'],
  providers: []
})
export class WriteBlogComponent implements OnInit {

  writeBlogForm: FormGroup;
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.writeBlogForm = new FormGroup({
      'name': new FormControl(null),
      'content': new FormControl(null)
    });
  }

  onSubmit(blogData: { name: string, content: string }) {
    this.blogService.createAndStorePost(blogData.name, blogData.content).subscribe(() => {
      this.blogService.refreshBlogListEmitter.next(); 
    });
  }

}

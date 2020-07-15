import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BlogService } from '../../blog.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from '../../post.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-write-blog',
  templateUrl: './write-blog.component.html',
  styleUrls: ['./write-blog.component.css'],
  providers: []
})
export class WriteBlogComponent implements OnInit {

  writeBlogForm: FormGroup;

  @Output() blogCreated = new EventEmitter();

  constructor(private blogService: BlogService, private http: HttpClient) { }

  ngOnInit(): void {
    this.writeBlogForm = new FormGroup({
      'name': new FormControl(null),
      'content': new FormControl(null)
    });

    this.blogService.fetchPosts().subscribe(posts => {
      this.blogService.blogArray = posts;
    });
  }

  onSubmit(blogData: { name: string, content: string }) {
    this.blogService.createAndStorePost(blogData.name, blogData.content);
    this.blogService.newBlogAddedEmitter.next(); 
  }

  onCancel() {

  }

  onFetchPosts() {
    this.blogService.fetchPosts().subscribe(posts => {
      this.blogService.blogArray = posts;
    }) ;
  }

}

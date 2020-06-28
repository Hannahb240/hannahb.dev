import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BlogService } from '../../blog.service';

@Component({
  selector: 'app-write-blog',
  templateUrl: './write-blog.component.html',
  styleUrls: ['./write-blog.component.css'],
  providers: []
})
export class WriteBlogComponent implements OnInit {

  nameInput;
  contentInput;
  @Output() blogCreated = new EventEmitter();


  constructor(private blogService: BlogService) { }


  ngOnInit(): void {
  }

  onSubmit() {
    this.blogService.addToBlog(this.nameInput, this.contentInput);
    this.blogService.newBlogAddedEmitter.emit();
  }

  onCancel() {

  }

}

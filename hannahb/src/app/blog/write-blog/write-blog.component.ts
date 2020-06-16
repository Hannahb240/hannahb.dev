import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-write-blog',
  templateUrl: './write-blog.component.html',
  styleUrls: ['./write-blog.component.css'],
  providers: [BlogService]
})
export class WriteBlogComponent implements OnInit {

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.blogService.addToBlog("smudge", "bloggggg")
  }

  onCancel() {

  }

}

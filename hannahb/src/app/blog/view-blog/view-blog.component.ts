import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent implements OnInit {

  constructor(private blogService: BlogService) { 
  }

  blogToDisplay: Post;
  
  hideBlogView: boolean;
  currentBlogId: string;

  ngOnInit(): void {

    this.setHideBlogView(true);

    this.blogService.displayBlogEmitter.subscribe((id) => {

      if(id === this.currentBlogId) {
        this.setHideBlogView(true);
        this.currentBlogId = "";
        console.log(this.hideBlogView);
      }
      else { 
          this.blogToDisplay = this.blogService.blogArray.find(blogItem => {
             this.currentBlogId = id;
             this.setHideBlogView(false);
             console.log(this.hideBlogView);
             return blogItem.id === id;              
          });
      }
    });
  }

  setHideBlogView(hiddenValue: boolean){
    this.hideBlogView = hiddenValue;
  }

  

}

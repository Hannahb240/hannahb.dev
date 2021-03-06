import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';
import { Post } from '../post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
  providers: []
})
export class BlogListComponent implements OnInit, OnDestroy {

  blogs: Post[] = [];
  private blogArraySubscribe: Subscription;

  constructor(private blogService: BlogService) { 
  }

  ngOnInit(): void {
  
    this.blogArraySubscribe = 
      this.blogService.refreshBlogListEmitter.subscribe(() => {
            this.blogService.fetchPosts().subscribe(posts => {
              this.blogService.blogArray = posts;
              this.blogs= this.blogService.blogArray;
      });  
    });
    this.blogService.refreshBlogListEmitter.next();
  }

  onDelete(id:string) {
    this.blogService.deleteBlogPost(id).subscribe(() => {
      this.blogService.refreshBlogListEmitter.next();  
    }); 
  }

  onViewClick(id: string){ 
    this.blogService.displayBlogEmitter.next(id);
  }
  
  ngOnDestroy() {
    this.blogArraySubscribe.unsubscribe();
  }
}

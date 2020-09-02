import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class BlogService {

    constructor(private http: HttpClient) {}

    blogArray: Post[]  = [];
    refreshBlogListEmitter = new Subject();
    displayBlogEmitter = new Subject<string>();

    createAndStorePost(title: string, content: string) {
        
        const blogData: Post = {name: title, content: content};      
        return this.http.post<{name: string}>(
            'https://hannahb-25372.firebaseio.com/posts.json', blogData);
    }

    fetchPosts() {
        return this.http.get<{[key: string]: Post }>('https://hannahb-25372.firebaseio.com/posts.json').
              pipe(map(responseData => {
                const postsArray: Post[] = [];
                for( const key in responseData) {
                  if(responseData.hasOwnProperty(key)) {
                    postsArray.push({...responseData[key], id: key });
                  }                
                }
                return postsArray;
              }))
      }

      deleteBlogPost(id: string) {
          return this.http.delete(`https://hannahb-25372.firebaseio.com/posts/${id}.json`);
      }

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { WriteBlogComponent } from './blog/blog-list/write-blog/write-blog.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';

const routes: Routes = [
  {path: 'blog', component: BlogComponent, children: [ 
    { path: 'writeBlog', component: WriteBlogComponent},
    { path: 'blogList', component: BlogListComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}

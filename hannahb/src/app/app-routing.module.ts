import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { WriteBlogComponent } from './blog/write-blog/write-blog.component';

const routes: Routes = [
  {path: 'blog', component: BlogComponent, children: [ 
    { path: 'writeBlog', component: WriteBlogComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}

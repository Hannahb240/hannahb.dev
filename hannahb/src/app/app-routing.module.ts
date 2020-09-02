import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { WriteBlogComponent } from './blog/write-blog/write-blog.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {path: 'blog', component: BlogComponent, children: [ 
    { path: 'writeBlog', component: WriteBlogComponent},
    { path: 'blogList', component: BlogListComponent}]},
  {path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}

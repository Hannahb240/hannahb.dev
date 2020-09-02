import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { WriteBlogComponent } from './blog/write-blog/write-blog.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { BlogService } from './blog/blog.service';

import { HttpClientModule } from '@angular/common/http';
import { ViewBlogComponent } from './blog/view-blog/view-blog.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    HeaderComponent,
    WriteBlogComponent,
    BlogListComponent,
    ViewBlogComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }

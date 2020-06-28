import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';

import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { WriteBlogComponent } from './blog/blog-list/write-blog/write-blog.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { BlogService } from './blog/blog.service';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    HeaderComponent,
    WriteBlogComponent,
    BlogListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }

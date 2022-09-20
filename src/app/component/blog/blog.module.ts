import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogInfoComponent } from './blog-info/blog-info.component';
import { BlogFullComponent } from './blog-full/blog-full.component';
import { BlogListsComponent } from './blog-lists/blog-lists.component';

@NgModule({
  declarations: [
    BlogInfoComponent,
    BlogFullComponent,
    BlogListsComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
  ]
})
export class BlogModule { }

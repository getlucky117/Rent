import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPostsRoutingModule } from './list-posts-routing.module';
import { ListPostsComponent } from './list-posts.component';
import { MaterialModule } from '../../../material.module';


@NgModule({
  declarations: [ListPostsComponent],
  imports: [
    CommonModule,
    ListPostsRoutingModule,
    MaterialModule
    
  ]
})
export class ListPostsModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostRoutingModule } from './post-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule, PostRoutingModule],
})
export class PostModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { ProductsComponent } from './components/products/products.component';
import { PostComponent } from './components/post/post.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [ProductsComponent, PostComponent, HomeComponent],
  imports: [CommonModule, MaterialComponentsModule, RouterModule],
  exports: [],
})
export class SharedModule {}

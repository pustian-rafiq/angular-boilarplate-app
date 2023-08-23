import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { ProductsComponent } from './components/products/products.component';
import { PostComponent } from './components/post/post.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';
import { LoginComponent } from './components/auth/login/login.component';

@NgModule({
  declarations: [ProductsComponent, PostComponent, HomeComponent, UsersComponent, UserDetailsComponent, LoginComponent],
  imports: [CommonModule, MaterialComponentsModule, RouterModule],
  exports: [],
})
export class SharedModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule, UsersRoutingModule],
})
export class UsersModule {}

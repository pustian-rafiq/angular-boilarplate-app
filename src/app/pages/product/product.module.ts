import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule, ProductRoutingModule],
})
export class ProductModule {}

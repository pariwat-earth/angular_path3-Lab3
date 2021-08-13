import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import { BackedService } from '../backed.service';



@NgModule({
  declarations: [
    ProductItemComponent,
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    BackedService
  ],
  exports: [
    ProductListComponent
  ]
})
export class CatalogModule { }

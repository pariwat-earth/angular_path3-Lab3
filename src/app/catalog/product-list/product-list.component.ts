import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Product } from '../../product';
import { ProductItemComponent } from '../product-item/product-item.component';
import { BackedService } from '../../backed.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @ViewChildren(ProductItemComponent) productItems: QueryList<ProductItemComponent>;
  products: Product[];

  constructor(private backedService:BackedService) {
    this.products = [];
  }

  ngOnInit(): void {
    this.products = this.backedService.getProduct();
   }

  // tslint:disable-next-line:typedef
  selectedProduct(productComponent: ProductItemComponent) {
    alert(`Product ${productComponent.product.name} selected`);
    this.productItems.forEach(p => {
      p.isSelected = false;
    });
    productComponent.isSelected = true;
  }

}

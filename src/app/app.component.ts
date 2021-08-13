import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // @ViewChild('productList', {static: true}) productList: ProductListComponent;

  // constructor(private backendService: BackedService){}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    // this.productList.products = this.backendService.getProduct();
  }
}

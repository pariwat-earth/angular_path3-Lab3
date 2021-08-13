import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BackedService } from './backed.service';
import { CatalogModule } from './catalog/catalog.module';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { PangNotFoundComponent } from './pang-not-found/pang-not-found.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './catalog/product-list/product-list.component';
import { ProductDetailComponent } from './catalog/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent
  },
  {
    path: '**',
    component: PangNotFoundComponent
  },
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PangNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CatalogModule,
    HomeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BackedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

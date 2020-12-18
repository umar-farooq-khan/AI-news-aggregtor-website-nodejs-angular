import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule, MatTableModule, MatPaginatorModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './products.service';
import { Ng2SearchPipeModule} from 'ng2-search-filter';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './admin/users/users.component';
import { CategoryComponent } from './admin/category/category.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { ProductComponent } from './admin/product/product.component';
import { SupplierCustomerComponent } from './admin/supplier-customer/supplier-customer.component';
import { SalesmanComponent } from './salesman/salesman.component';
import { SsupplierCustomerComponent } from './salesman/ssupplier-customer/ssupplier-customer.component';
import { SproductListComponent } from './salesman/sproduct-list/sproduct-list.component';
import { SaleComponent } from './salesman/sale/sale.component';
import { PurchaseComponent } from './salesman/purchase/purchase.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UsersComponent,
    CategoryComponent,
    ProductListComponent,
    ProductComponent,
    SupplierCustomerComponent,
    SalesmanComponent,
    SsupplierCustomerComponent,
    SproductListComponent,
    SaleComponent,
    PurchaseComponent,
    LogoutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [ ProductsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path : 'admin' , component : AdminComponent},
  { path : 'admin/users' , component : UsersComponent},
  { path : 'users' , component : UsersComponent},
  { path : 'category' , component : CategoryComponent},
  { path : 'inventory' , component : ProductListComponent},
  { path : 'products' , component : ProductComponent},
  { path : 'salesman' , component : SalesmanComponent},
  { path : 'purchase' , component : PurchaseComponent},
  { path : 'salesman/sales' , component : SaleComponent},
  { path : 'sales' , component : SaleComponent},
  { path : 'dealercustomer' , component : SupplierCustomerComponent},
  { path : 'SdealerCustomer' , component : SsupplierCustomerComponent},
  { path : 'Sinventory' , component : SproductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

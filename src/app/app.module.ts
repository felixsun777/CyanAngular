import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { ConnectService} from "./services/connect.service";
import { VerificationService} from "./services/verification.service";

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductComponent } from './components/product/product.component';
import { OrderComponent } from './components/order/order.component';
import { CustomerComponent } from './components/customer/customer.component';
import { DepartmentComponent } from './components/department/department.component';
import { CategoryComponent } from './components/category/category.component';
import { EmailComponent } from './components/email/email.component';
import { DepartmentUpdateComponent } from './components/department-update/department-update.component';
import { DepartmentInsertComponent } from './components/department-insert/department-insert.component';
import { CategoryUpdateComponent } from './components/category-update/category-update.component';
import { CategoryInsertComponent } from './components/category-insert/category-insert.component';
import { CustomerInsertComponent } from './components/customer-insert/customer-insert.component';
import { CustomerUpdateComponent } from './components/customer-update/customer-update.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { OrderUpdateComponent } from './components/order-update/order-update.component';
import { ProductInsertComponent } from './components/product-insert/product-insert.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { ProductReviewComponent } from './components/product-review/product-review.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/insert', component: ProductInsertComponent },
  { path: 'product/update', component: ProductUpdateComponent },
  { path: 'product/review', component: ProductReviewComponent },
  { path: 'order', component: OrderComponent },
  { path: 'order/update', component: OrderUpdateComponent },
  { path: 'order/detail', component: OrderDetailComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'customer/update', component: CustomerUpdateComponent },
  { path: 'customer/insert', component: CustomerInsertComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'department/update', component: DepartmentUpdateComponent },
  { path: 'department/insert', component: DepartmentInsertComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'category/update', component: CategoryUpdateComponent },
  { path: 'category/insert', component: CategoryInsertComponent },
  { path: 'email', component: EmailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    ProductComponent,
    OrderComponent,
    CustomerComponent,
    DepartmentComponent,
    CategoryComponent,
    EmailComponent,
    DepartmentUpdateComponent,
    DepartmentInsertComponent,
    CategoryUpdateComponent,
    CategoryInsertComponent,
    CustomerInsertComponent,
    CustomerUpdateComponent,
    OrderDetailComponent,
    OrderUpdateComponent,
    ProductInsertComponent,
    ProductUpdateComponent,
    ProductReviewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ConnectService,
    VerificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

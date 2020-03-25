import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideComponent } from './slide/slide.component';
import { CategoryComponent } from './category/category.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductService } from './services/product.service';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideComponent,
    CategoryComponent,
    ProductListComponent,
    ProductComponent,
    ProductDetailComponent,
    AddProductComponent,
    AboutComponent,
    NotFoundComponent,
    HomeComponent,
    ServicesComponent,
    ContactComponent,
    ProductManagerComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

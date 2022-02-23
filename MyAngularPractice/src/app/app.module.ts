import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FrontPageComponent } from './front-page/front-page.component';

@NgModule({
  declarations: [AppComponent, ProductDetailsComponent, HeaderComponent, FooterComponent, FrontPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: '',
        component:FrontPageComponent ,
      },
      {
        path: 'product',
        component: ProductDetailsComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

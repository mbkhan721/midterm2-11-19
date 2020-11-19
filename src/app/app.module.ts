import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LightboxModule } from 'ngx-lightbox';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';
import { MyResumeComponent } from './my-resume/my-resume.component';
import { ResumeEducationComponent } from './my-resume/resume-education/resume-education.component';
import { ResumeFooterComponent } from './my-resume/resume-footer/resume-footer.component';
import { ResumeProfileComponent } from './my-resume/resume-profile/resume-profile.component';
import { ResumeWorkExperienceComponent } from './my-resume/resume-work-experience/resume-work-experience.component';
import { GraphicDesignComponent } from './graphic-design/graphic-design.component';
import { LightboxModule } from 'ngx-lightbox';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    LightboxModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
      { path: 'resume', component: MyResumeComponent },
      { path: 'graphic', component: GraphicDesignComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    MyResumeComponent,
    ResumeEducationComponent,
    ResumeFooterComponent,
    ResumeProfileComponent,
    ResumeWorkExperienceComponent,
    GraphicDesignComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [CartService]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
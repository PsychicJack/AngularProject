import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RestaurantListModule } from '../app/restaurant-list/restaurant-list.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '../app/auth/auth.module';
import { RestaurantDetailsModule } from './restaurant-details/restaurant-details.module';

@NgModule({
  declarations: [AppComponent, NavigationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RestaurantListModule,
    HttpClientModule,
    AuthModule,
    RestaurantDetailsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

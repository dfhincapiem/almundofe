import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListHotelsComponent } from './list-hotels/list-hotels.component';
import { FiltersComponent } from './filters/filters.component';
import { HotelItemComponent } from './list-hotels/hotel-item/hotel-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { DeviceDetectorModule } from 'ngx-device-detector';




@NgModule({
  declarations: [
    AppComponent,
    ListHotelsComponent,
    FiltersComponent,
    HotelItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
    NgxPaginationModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

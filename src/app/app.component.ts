import { Component, OnInit } from '@angular/core';

import { HotelListService } from './services/hotel-list.service';


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "almundofe";
  public data = [];


  constructor(private hotelListService: HotelListService) {
  }

  ngOnInit() {
    this.getHotelList();
  }

  getHotelList(){
    this.hotelListService.getListHotels()
    .subscribe(
      (data)=>{
        this.data = data;
      }
    )
  }

  getHotelSearchData(eventHotel) {
    this.hotelListService
    .getSearchHotels(eventHotel)
      .subscribe(
        (data)=>{this.data = data;}
      )
  }
  getHotelStarsData(eventStarsHotel){
    if(eventStarsHotel === '0') {
      this.getHotelList();
      return;
    }
    this.hotelListService
    .getSearchStarsHotels(eventStarsHotel)
      .subscribe(
        (data)=>{
          console.log(data);
          this.data = data;
        }
      )
  }

}

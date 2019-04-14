import { Component, OnInit, Input, HostListener } from '@angular/core';

import { UtilService } from '../../services/util.service';


@Component({
  selector: 'app-hotel-item',
  templateUrl: './hotel-item.component.html',
  styleUrls: ['./hotel-item.component.scss']
})
export class HotelItemComponent implements OnInit {

  @Input() item: any;
  @HostListener('window:resize', ['$event'])


  private url: string;
  screenHeight:any;
  screenWidth:any;


  constructor(private utilService: UtilService) {
    this.url = '../assets/images/hotels/';
    /// this.getScreenSize();
  }

  ngOnInit() {
  }

  // getScreenSize(event?) {
  //   this.screenHeight = window.innerHeight;
  //   this.screenWidth = window.innerWidth;
  //   console.log(this.screenHeight, this.screenWidth);
  // }

  arrayToNumber(num): number[] {
    return this.utilService.arrayToNumber(num);
  }

  onResize(event) {
   // this.introText = window.innerWidth < 1080 ? "New" : "Welcome";
   console.log(event)
  }


}

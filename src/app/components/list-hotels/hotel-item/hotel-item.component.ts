import { Component, OnInit, Input, } from '@angular/core';

import { UtilService } from '../../../services/util.service';


@Component({
  selector: 'app-hotel-item',
  templateUrl: './hotel-item.component.html',
  styleUrls: ['./hotel-item.component.scss']
})
export class HotelItemComponent implements OnInit {

  @Input() item: any;


  private url: string;
  screenHeight:any;
  screenWidth:any;


  constructor(private utilService: UtilService) {
    this.url = '../assets/images/hotels/';
  }

  ngOnInit() {
  }

  arrayToNumber(num): number[] {
    return this.utilService.arrayToNumber(num);
  }

}

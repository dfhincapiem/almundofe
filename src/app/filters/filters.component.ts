import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Output() searchEvent = new EventEmitter<string>();
  @Output() searchStarsEvent = new EventEmitter<string>();


  private collapseSearch = true;
  private collapseStars = true;
  private stars = [];
  private numberOfStars = 6;

  private isResponsive: boolean;


  constructor(private utilService: UtilService) {
    //this.stars = Array(this.numberOfStars).fill().map((x,i)=>i);
    this.stars = [5,4,3,2,1]
    this.isResponsive = this.isResponsiveFunc(window.screen.width);
  }

  ngOnInit() {
  }

  collapseSearchToggle() {
    this.collapseSearch = !this.collapseSearch;
    console.log(this.collapseSearch);
  }
  collapseStarsToggle() {
    this.collapseStars = !this.collapseStars;
  }

  returnStarsHTML(star){
    let allHtml = '';
    const starHtml = '<img src="../../assets/icons/filters/star.svg">';
    for (let i =0; i<star; i++) {
      allHtml += starHtml;
    }
    return allHtml;
  }

  getSearchData(value) {

    this.searchEvent.emit(value);
    // console.log(value)
    // this.hotelListService
    //   .getSearchHotels(value)
    //     .subscribe(
    //       (data)=>{this.data = data;}
    //     )


  }

  onlyOne(checkbox) {
    if(!checkbox.checked) checkbox.checked = true;
    let checkboxes = <HTMLInputElement[]><any>document.getElementsByName('check');
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false;
    })
    this.searchStarsEvent.emit(checkbox.value);
  }

  arrayToNumber(number) {
    return this.utilService.arrayToNumber(number);
  }


  onResize(event) {
    this.isResponsive = this.isResponsiveFunc(event.target.innerWidth);
   }

   isResponsiveFunc(screenWidth){
     return screenWidth < 768;
   }

}

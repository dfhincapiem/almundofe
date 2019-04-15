import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { UtilService } from '../../services/util.service';

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
  private isFiltersOpened = false;
  private stars = [];

  private isResponsive: boolean;


  constructor(private utilService: UtilService) {
    this.stars = [5,4,3,2,1]
    this.isResponsive = this.isResponsiveFunc(window.innerWidth);
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
     const isResponsiveScreen = screenWidth < 768;
     this.isFiltersOpened = !isResponsiveScreen;
     return isResponsiveScreen;
   }
   collapseFiltersResponsive() {
      this.isFiltersOpened  = !this.isFiltersOpened;
   }

}

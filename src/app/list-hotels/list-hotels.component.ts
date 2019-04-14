import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: "app-list-hotels",
  templateUrl: "./list-hotels.component.html",
  styleUrls: ["./list-hotels.component.scss"]
})


export class ListHotelsComponent implements OnInit {

  @Input() listData: [];
  @Input() dataSource: any;


  private data = [];

  p: number = 1;


  constructor() {

  }

  ngOnInit() {
  }



}

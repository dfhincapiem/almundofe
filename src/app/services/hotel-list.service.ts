import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Observer } from 'rxjs';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class HotelListService {

  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:3000'
  }



  getListHotels() {

    return new Observable((observer: Observer<any>) => {
      this.httpClient
      .get(this.url)
          .subscribe(
            data => {
              observer.next(data);
            },
            err => {
              observer.error(err);
            },
            () => {
              observer.complete();
            }
          );
    });
  }

  getSearchHotels(nameHotel) {
    const api = this.url + '/search?name=' + nameHotel;
    return new Observable((observer: Observer<any>) => {
      this.httpClient
      .get(api)
          .subscribe(
            data => {
              observer.next(data);
            },
            err => {
              observer.error(err);
            },
            () => {
              observer.complete();
            }
          );
      });
    }


    getSearchStarsHotels(starsHotel) {
      const api = this.url + '/search?stars=' + starsHotel;
      return new Observable((observer: Observer<any>) => {
        this.httpClient
        .get(api)
            .subscribe(
              data => {
                observer.next(data);
              },
              err => {
                observer.error(err);
              },
              () => {
                observer.complete();
              }
            );
        });
      }



}

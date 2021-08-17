import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, Subject } from 'rxjs'
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})


export class DataService {
  coin: any;
  num = 500;
  add = this.num + 50;
  private $refreshCoins = new Subject<void>();
  constructor(private http: HttpClient
  ) { }

  all(): Observable<any> {

    return this.http.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=" + this.num + "&page=1&sparkline=false")
      ;

  }


  oneCoin(coin: any): Observable<any> {
    return this.http.get(`https://api.coingecko.com/api/v3/coins/${coin}`)
  }


  getPopularCoins(): Observable<any> {
    return this.http.get('https://api.coingecko.com/api/v3/search/trending')

  }

  get30Days(coin: any) {
    return this.http.get("https://api.coingecko.com/api/v3/coins/" + coin + "/market_chart?vs_currency=usd&days=30")
  }

  sendMessage(data) {
    this.coin = data;

  }
  getMessage() {
    return this.coin;
  }



}

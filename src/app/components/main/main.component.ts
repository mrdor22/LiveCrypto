import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import {  switchMap} from 'rxjs/operators'
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  sub: Subscription;
  interval: any;
  list: any;
  color: any;
  totalRecords: Number;
  currentPrice: any;
  page: Number = 1;
  $updateList =  new BehaviorSubject<boolean>(true);
  goToDetails = (x: any) => {
    this.service.sendMessage(x);
    this.redirectTo(`/coins/${x.id}`)
  }



  refreshData(){
    this.sub = this.service.all()
         .subscribe(data => {
           
             this.list = data;
             this.list.forEach(element => {
               
               this.currentPrice = element.current_price;
               const oldPrice = element.current_price;
            
             });
         })
     
 }

 public getColor(balance: number): string{
  return balance != (balance * 1) ? "green" : "red";
}
 
  redirectTo(uri: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([uri]));
  }

  constructor(public service: DataService, public router: Router) { }

  ngOnInit(): void {

    this.refreshData();
    this.interval = setInterval(() => { 
        this.refreshData(); 
    }, 5000);
    ;

    this.service.all().subscribe(x => {

      x.forEach(element => {
        const newArray = element.market_cap;
      });
      this.list = x;
    })

  }

  ngOnDestry(): void {
    this.sub.unsubscribe();
    clearInterval();
  }


}

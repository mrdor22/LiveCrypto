import { Component, OnInit,OnDestroy, ChangeDetectorRef, IterableDiffers } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  sub: Subscription;
  myArray: any;
  term: any;
  coins: any;
  coin: any;
  fixedCoins: any[];
  interval: any;
  public show: boolean = true;
  constructor(public service: DataService,
    private changeDetection: ChangeDetectorRef,
    public router: Router,
    public cdr: ChangeDetectorRef,
    _differs: IterableDiffers
  ) { }


  refreshData(){
   this.sub = this.service.all()
        .subscribe(data => {
            this.fixedCoins = data;
        })
    
}

  public trackDemo(index: number, coin: any) {
    return coin ? coin.id : undefined;
  }

  redirectTo(uri: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([uri]));
  }

  getCoin(x) {

    this.service.oneCoin(x.id).subscribe(x => {
      const name = x.name;
      this.redirectTo(`/coins/${x.id}`)
    })
  }



  
  ngOnInit(): void {

    this.refreshData();
    this.interval = setInterval(() => { 
        this.refreshData(); 
    }, 5000);
    ;


    

    this.service.all().subscribe(x => {

      const addData = (f) => {
        this.fixedCoins.push(f);
      }


    })
  }


  ngOnDestroy(): void {
    this.sub.unsubscribe();
    clearInterval();
  }
}

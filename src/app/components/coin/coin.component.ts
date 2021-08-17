import { Route } from '@angular/compiler/src/core';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})
export class CoinComponent implements OnInit {

  coin: any;
  name: any;
sub: Subscription;
sub2: Subscription
someString: any;
trendingCoins: [];
  constructor(public router: Router,public service: DataService,public arouter: ActivatedRoute) { }

  ngOnInit(): void {
    
this.name = this.arouter.snapshot.paramMap.get('id');


this.service.get30Days(this.name).subscribe(x=> {
})

this.service.getPopularCoins().subscribe(f=> {
this.trendingCoins = f.coins;
this.trendingCoins.forEach(x=> {
})
})

     this.sub =  this.service.oneCoin(this.name).subscribe(x=> {
       this.coin = x;
      this.someString = x.description.es.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, ''); 

      })

  }

  signUp() { 
    this.router.navigateByUrl("/https://accounts.binance.com/en/register?ref=16529953");
  }


  ngOnDestroy() {
this.sub.unsubscribe();
  }

}

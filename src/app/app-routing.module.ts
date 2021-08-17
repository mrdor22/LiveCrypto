import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoinComponent } from './components/coin/coin.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path: 'coins/:id', component: CoinComponent },
  {path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

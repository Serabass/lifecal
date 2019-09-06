import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {YearsComponent} from './pages/years/years.component';
import {YearComponent} from './pages/year/year.component';

const routes: Routes = [
  {
    path: ':year',
    component: YearComponent
  },
  {
    path: '',
    component: YearsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {YearsComponent} from './pages/years/years.component';
import {YearComponent} from './pages/year/year.component';
import {AboutComponent} from './pages/about/about.component';
import {WeeksLifeComponent} from './pages/weeks-life/weeks-life.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'years',
    pathMatch: 'prefix'
  },
  {
    path: 'years',
    component: YearsComponent
  },
  {
    path: 'weeks-life',
    component: WeeksLifeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: ':year',
    component: YearComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

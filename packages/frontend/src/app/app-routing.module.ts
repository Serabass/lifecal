import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {YearsComponent} from './pages/years/years.component';
import {YearComponent} from './pages/year/year.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/years'
  },
  {
    path: 'year/:year',
    component: YearComponent
  },
  {
    path: 'years',
    component: YearsComponent
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module')
      .then(m => m.WelcomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

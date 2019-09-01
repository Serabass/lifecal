import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {YearsComponent} from './pages/years/years.component';
import {Years2Component} from './pages/years2/years2.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/welcome'
  },
  {
    path: 'years',
    component: Years2Component
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

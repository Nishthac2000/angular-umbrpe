import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPageComponent } from './MyComponents/detail-page/detail-page.component';
import { HomePageComponent } from './MyComponents/home-page/home-page.component';

const routes: Routes = [
  {
    path : '',
    component: HomePageComponent
  },
  {
    path: 'results/:teamCode',
    component: DetailPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

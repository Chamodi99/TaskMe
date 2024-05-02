import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDailyComponent } from '../add-daily/add-daily.component';
import { AddWeeklyComponent } from '../add-weekly/add-weekly.component';
import { AddMonthlyComponent } from '../add-monthly/add-monthly.component';


const routes: Routes = [
  { path: 'addDaily', component: AddDailyComponent },
  { path: 'addWeekly', component: AddWeeklyComponent },
  { path: 'addMonthly', component: AddMonthlyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

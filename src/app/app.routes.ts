import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { HistoryComponent } from './history/history.component';
import { SummaryComponent } from './summary/summary.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgModule } from '@angular/core';
import { AddDailyComponent } from './add-daily/add-daily.component';
import { AddWeeklyComponent } from './add-weekly/add-weekly.component';
import { AddMonthlyComponent } from './add-monthly/add-monthly.component';

export const routes: Routes = [
    {
        path : '',
        component : HomeComponent
    },
    {
        path : 'view',
        component : ViewComponent
    },
    {
        path : 'history',
        component : HistoryComponent
    },
    {
        path : 'summary',
        component : SummaryComponent
    },
    {
        path : 'addDaily',
        component : AddDailyComponent
    },
    {
        path : 'addWeekly',
        component : AddWeeklyComponent
    },
    {
        path : 'addMonthly',
        component : AddMonthlyComponent
    }
];



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';

import { AppComponent } from './app.component';
import { AppMain } from './app.main';
import { AppVideo } from './app.videodetails';
import { AppChannel } from './app.channeldetails';
import { OrderByPipe } from './sort.pipe';

const appRoutes: Routes = [
  { path: 'video', component: AppVideo},
  { path: 'channel', component: AppChannel},
  { path: 'main', component: AppMain},
  { path: '**',
    redirectTo: 'main',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [AppComponent, AppVideo, AppChannel, AppMain, OrderByPipe],
  imports: [
    BrowserModule,
    SlimLoadingBarModule.forRoot(),
    RouterModule.forRoot(
    	appRoutes
	),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RestaurantPage } from '../pages/restaurant/restaurant';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Stitch } from 'mongodb-stitch-browser-sdk';
import { MongoProvider } from '../providers/mongo/mongo';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RestaurantPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RestaurantPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Stitch,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MongoProvider
  ]
})
export class AppModule {}

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { Media } from '@ionic-native/media';
import { DataProvider } from '../providers/data/data';

import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
// import { CategoriesPage } from '../pages/categories/categories';
// import { TabsPage } from '../pages/tabs/tabs';
// import { FavoritesPage } from '../pages/favorites/favorites';




@NgModule({
  declarations: [
    MyApp,
    // HomePage,
    // TabsPage,
    // CategoriesPage,
    // FavoritesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // CategoriesPage,
    // FavoritesPage,
    // HomePage,
    // TabsPage
  ],
  providers: [
    DataProvider,
    StatusBar,
      SplashScreen,
      Media,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}

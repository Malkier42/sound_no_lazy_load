import { Component } from '@angular/core';

import { CategoriesPage } from '../categories/categories';
import { HomePage } from '../home/home';
import { FavoritesPage } from '../favorites/favorites';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  
  tab1Root = HomePage;
  tab2Root = CategoriesPage;
  tab3Root = FavoritesPage;

  constructor() {

  }
}

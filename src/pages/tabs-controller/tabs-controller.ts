import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CategoryPage } from '../category/category';
import { SearchPage } from '../search/search';
import { CartPage } from '../cart/cart';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = CategoryPage;
  tab3Root: any = SearchPage;
  tab4Root: any = CartPage;
  tab5Root: any = ProfilePage;
  constructor(public navCtrl: NavController) {
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }goToCategory(params){
    if (!params) params = {};
    this.navCtrl.push(CategoryPage);
  }goToSearch(params){
    if (!params) params = {};
    this.navCtrl.push(SearchPage);
  }goToCart(params){
    if (!params) params = {};
    this.navCtrl.push(CartPage);
  }
}

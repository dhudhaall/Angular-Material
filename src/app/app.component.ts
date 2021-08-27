import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SellerChainAppSuit';

  public isExpanded = false;
  isLoggedIn = true;

  public toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }
}

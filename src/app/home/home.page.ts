import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userHome: any;
  value = 'mumo';

  constructor(private activeroute: ActivatedRoute, private router: Router) {
    this.activeroute.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.userHome = this.router.getCurrentNavigation().extras.state.user;
        console.log('Dato a mostrar' + this.userHome);
      }
    });
  }
}

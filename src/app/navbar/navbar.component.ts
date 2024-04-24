import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent{

  constructor(private router: Router, private location: Location) {

    //if route changes, make sure currentPage is correct
    router.events.forEach((event) => {
      if(event instanceof NavigationEnd) {
        this.currentPage = this.location.path()
      }
    });

   }
   

  currentPage: string = this.location.path();


  navOptions: any[] = [
    {
      text: 'Home',
      route: '/home'
    },
    {
      text: 'Featured Country',
      route: '/featuredCountry'
    },
    {
      text: 'Browse',
      route: '/browse'
    },
    {
      text: 'Flights',
      route: '/flights'
    }
  ]

}

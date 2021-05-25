import { Component } from '@angular/core';
//import { Router } from '@angular/router';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;

  constructor(public router:Router){


    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
          console.log("*** started ****");
      }

      if (event instanceof NavigationEnd) {
        console.log("*** ended ****")
      }

      if (event instanceof NavigationError) {
          // Hide loading indicator

          // Present error to user
          console.log(event.error);
      }
    });

  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-statsbar',
  templateUrl: './statsbar.component.html',
  styleUrls: ['./statsbar.component.css']
})
export class StatsbarComponent {
  
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter();
  isOnNominatePage: boolean = false;

  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isOnNominatePage = event.url === '/nominate'; // Adjust the URL as needed
      }
    });
  }

  onButtonClick(buttonName: string) {
    this.buttonClicked.emit(buttonName);
  }

}

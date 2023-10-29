import { Component, EventEmitter, Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-statsbar',
  templateUrl: './statsbar.component.html',
  styleUrls: ['./statsbar.component.css']
})
export class StatsbarComponent {
  
  @Output() buttonClicked: EventEmitter<boolean> = new EventEmitter();
  isOnNominatePage: boolean = false;
  isHiddenStats: Boolean = false;

  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isOnNominatePage = event.url === '/nominate'; // Adjust the URL as needed
      }
    });
  }

  onButtonClick(buttonName: boolean) {

    if(buttonName === false){
      this.isHiddenStats = !this.isHiddenStats
    }

    this.buttonClicked.emit(buttonName);
  }

}


/*
import { Component, EventEmitter, Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-statsbar',
  templateUrl: './statsbar.component.html',
  styleUrls: ['./statsbar.component.css'],
  animations: [
    trigger('slideUpDown', [
      state('up', style({
        transform: 'translateY(-100%)',
        display: 'none',
      })),
      state('down', style({
        transform: 'translateY(0)',
        display: 'block',
      })),
      transition('up <=> down', animate('300ms ease-in-out')),
    ]),
  ],
})
export class StatsbarComponent {
  @Output() buttonClicked: EventEmitter<boolean> = new EventEmitter();
  isOnNominatePage: boolean = false;
  isStatsHidden: boolean = false;
  statsAnimationState = 'down';

  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isOnNominatePage = event.url === '/nominate'; // Adjust the URL as needed
      }
    });
  }

  onButtonClick(buttonName: boolean) {
    if (buttonName === false) {
      // If Hide Stats button is clicked, toggle the animation state
      this.statsAnimationState = this.statsAnimationState === 'up' ? 'down' : 'up';
    }

    this.isStatsHidden = !this.isStatsHidden;
    this.buttonClicked.emit(buttonName);
  }
}

*/ 
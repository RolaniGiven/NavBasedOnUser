import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

   currentPage: string = 'This is the Dash';

   constructor(private pageService: PageService) {}

   ngOnInit() {
     this.pageService.pageChanged.subscribe((page: string) => {
      this.currentPage = page;
     })
   }

}

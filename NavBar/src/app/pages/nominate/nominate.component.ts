import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-nominate',
  templateUrl: './nominate.component.html',
  styleUrls: ['./nominate.component.css']
})
export class NominateComponent implements OnInit {
  currentPage: string = 'This is the Nominate page';

  constructor(private pageService: PageService) {}

  ngOnInit() {
    this.pageService.pageChanged.subscribe((page: string) => {
     this.currentPage = page;
    })
  }

}

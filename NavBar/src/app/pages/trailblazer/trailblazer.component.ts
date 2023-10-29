import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-trailblazer',
  templateUrl: './trailblazer.component.html',
  styleUrls: ['./trailblazer.component.css']
})
export class TrailblazerComponent implements OnInit {
  
  currentPage: string = 'This is the Trailblaizer';

  constructor(private pageService: PageService) {}

  ngOnInit() {
    this.pageService.pageChanged.subscribe((page: string) => {
     this.currentPage = page;
    })
  }

}

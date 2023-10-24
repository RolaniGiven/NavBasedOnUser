import { Component } from '@angular/core';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
   constructor(private pageServices: PageService ) {}
   
   onPageLinkClick(page: string){
    this.pageServices.setPage(page);
   }
}

import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {
 
  public currentPage: string = '';
  public pageChanged: EventEmitter<string> = new EventEmitter();

  setPage(page: string) {
    this.currentPage = page;
    this.pageChanged.emit(this.currentPage);
  }
}

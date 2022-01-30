import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() pages !: number;
  @Input() currentPage !: number;

  public visiblePages: number[] = [];
  public offsetPages = 2;

  constructor() {
  }

  ngOnInit(): void {
    this.calcVisiblePages();
    console.log(this.pages);
    console.log(this.currentPage);
    console.log(this.visiblePages);
  }

  toPage(page: number) {
    console.log(page);
    this.currentPage = page;
    this.calcVisiblePages();
  }

  firstPage() {
    this.toPage(1);
  }
  prevPage() {
    if (this.currentPage > 1)
      this.toPage(this.currentPage - 1);
  }
  nextPage() {
    if (this.currentPage < this.pages)
      this.toPage(this.currentPage + 1);
  }
  lastPage() {
    this.toPage(this.pages);
  }

  calcVisiblePages() {
    this.visiblePages = [];
    for (let _i = this.currentPage - this.offsetPages; _i <= this.currentPage + this.offsetPages; _i++) {
      if (_i <= 1 || _i >= this.pages) {
        continue;
      }
      this.visiblePages.push(_i);
    }
  }

}

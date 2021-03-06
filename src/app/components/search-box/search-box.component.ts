import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  @Output() setTermEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  setTerm(event: any) {
    this.setTermEvent.emit(event.target.value);
  }
}

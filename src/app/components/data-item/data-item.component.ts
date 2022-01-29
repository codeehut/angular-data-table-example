import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../types/project.type";

@Component({
  selector: 'app-data-item',
  templateUrl: './data-item.component.html',
  styleUrls: ['./data-item.component.scss']
})
export class DataItemComponent implements OnInit {

  @Input() item !: Project;

  constructor() { }

  ngOnInit(): void {
  }

}

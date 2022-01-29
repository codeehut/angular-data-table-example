import { Component, OnInit } from '@angular/core';
import {Project} from "../../types/project.type";

// Import data
import projects from "../../data/projects";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public projects!: Project[];

  constructor() { }

  ngOnInit(): void {
    this.projects = projects;
  }

}

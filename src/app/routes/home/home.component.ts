import { Component, OnInit } from '@angular/core';
import {Project} from "../../types/project.type";

// Import data
import projects from "../../data/projects";
import {environment} from "../../../environments/environment";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public projects!: Project[];
  public currentPage: number = 1;
  public pages !: number;
  public term!: string

  constructor() { }

  ngOnInit(): void {
    this.projects = projects;
    this.pages = Math.ceil( this.projects.length / environment.resultsPerPage)
  }


  setPage(page: number) {
    console.log('setPage', page);
    this.currentPage = page;
  }

  updateTerm(term: string) {
    this.term = term;
    this.currentPage = 1;
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import {Project} from "../types/project.type";
import {environment} from "../../environments/environment";

@Pipe({
  pure: false,
  name: 'paging'
})
export class PagingPipe implements PipeTransform {

  transform(items: Project[], page: any): Project[] {

    let rItems = [...items];
    rItems = rItems.slice((page - 1) * environment.resultsPerPage, page * environment.resultsPerPage);
    return rItems;
  }

}
